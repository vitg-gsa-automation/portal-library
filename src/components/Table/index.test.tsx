import '@testing-library/jest-dom/extend-expect';
import { createColumnHelper } from '@tanstack/react-table';
import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Table } from '.';
import { Package } from '../../types/packages';

describe('Table', () => {
  const pkgs: Package[] = [
    {
      PkgName: 'VITGPkg1',
      SystemID: 43242,
      PkgDesc: 'Pkg description',
      Status: 'Pending',
      PkgCreateDate: 'March 03, 2023',
      ATOBeginDate: 'March 03, 2023',
      ATOEndDate: 'March 03, 2023',
      LastModified: 'March 03, 2023',
      ContactName: 'Aaron Nolan',
    },
    {
      PkgName: 'AwesomecloudPkg2',
      SystemID: 543,
      PkgDesc: 'Pkg description',
      Status: 'Pending',
      PkgCreateDate: 'November 03, 2023',
      ATOBeginDate: 'November 03, 2023',
      ATOEndDate: 'November 03, 2023',
      LastModified: 'November 03, 2023',
      ContactName: 'Aaron Nolan',
    },
    {
      PkgName: 'GooglePkg3',
      SystemID: 765,
      PkgDesc: 'Pkg description',
      Status: 'Pending',
      PkgCreateDate: 'Jan 03, 2023',
      ATOBeginDate: 'Jan 03, 2023',
      ATOEndDate: 'Jan 03, 2023',
      LastModified: 'Jan 03, 2023',
      ContactName: 'Aaron Nolan',
    },
    {
      PkgName: 'MicrosoftPkg3',
      SystemID: 987,
      PkgDesc: 'Pkg description',
      Status: 'Pending',
      PkgCreateDate: 'Jan 03, 2023',
      ATOBeginDate: 'Jan 03, 2023',
      ATOEndDate: 'Jan 03, 2023',
      LastModified: 'Jan 03, 2023',
      ContactName: 'Aaron Nolan',
    },
    {
      PkgName: 'AwesomecloudPkg3',
      SystemID: 987,
      PkgDesc: 'Pkg description',
      Status: 'Pending',
      PkgCreateDate: 'Jan 03, 2023',
      ATOBeginDate: 'Jan 03, 2023',
      ATOEndDate: 'Jan 03, 2023',
      LastModified: 'Jan 03, 2023',
      ContactName: 'Aaron Nolan',
    },
  ];

  const columnHelper = createColumnHelper<Package>();
  const columns = [
    columnHelper.accessor('PkgName', {
      header: 'Package name',
    }),
    columnHelper.accessor('SystemID', {
      header: 'SystemID',
    }),
    columnHelper.accessor('ATOBeginDate', {
      header: 'ATO Begins',
    }),
    columnHelper.accessor('ATOEndDate', {
      header: 'ATO Ends',
    }),
    columnHelper.accessor('ContactName', {
      header: 'Created by',
    }),
    columnHelper.accessor('LastModified', {
      header: 'Last modified',
    }),
    columnHelper.accessor('Status', {
      header: 'Status',
    }),
  ];

  test('renders table with data and columns', () => {
    render(<Table data={pkgs} columns={columns} />);

    expect(screen.getByText('Package name')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('VITGPkg1')).toBeInTheDocument();
    expect(screen.getByText('GooglePkg3')).toBeInTheDocument();
    expect(screen.getByText('AwesomecloudPkg2')).toBeInTheDocument();
  });

  test('triggers onRowClick when a row is clicked', () => {
    const onRowClick = jest.fn();
    render(<Table data={pkgs} columns={columns} onRowClick={onRowClick} />);

    fireEvent.click(screen.getByText('VITGPkg1'));
    expect(onRowClick).toHaveBeenCalledWith(pkgs[0]);
  });
  test('sorts table when a column header is clicked', async () => {
    render(<Table data={pkgs} columns={columns} />);
    const button = screen.getByText('Package name');
    fireEvent.click(button);
    // Wait for table to re-render after sorting
    await waitFor(() => {
      expect(screen.getByText('AwesomecloudPkg2')).toBeInTheDocument();
    });

    // Verify sorted order
    const rows = screen.getAllByRole('row');
    expect(rows[1]).toHaveTextContent('AwesomecloudPkg2');
    expect(rows[1]).toHaveTextContent('543');
    expect(rows[2]).toHaveTextContent('AwesomecloudPkg3');
    expect(rows[2]).toHaveTextContent('987');
  });
});

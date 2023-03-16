import { ReactNode } from 'react';

interface DashboardProps {
  children: ReactNode;
}

export function Dashboard({ children, ...props }: DashboardProps) {
  return (
    <div className="dashboard" {...props}>
      {children}
    </div>
  );
}

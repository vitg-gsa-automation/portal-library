import { Story } from '@storybook/react';
import { Preferences } from '../components/Preferences';
import { PreferencesProps } from '../components/Preferences/interfaces';
import { useLocalStorage } from '../hooks/useLocalStorage';

export default {
  title: 'Preferences',
  component: Preferences,
};

export const Default: Story<PreferencesProps> = (args) => {
  const DEFAULT_PREFERENCES: PreferencesProps.Preferences = {
    pageSize: 5,
    wrapLines: false,
    contentDisplay: [
      {
        id: 'name',
        visible: true,
      },
      {
        id: 'status',
        visible: true,
      },
      {
        id: 'type',
        visible: true,
      },
      {
        id: 'size',
        visible: true,
      },
    ],
  };
  const [preferences, setPreferences] = useLocalStorage<
    PreferencesProps.Preferences | undefined
  >('preferences', DEFAULT_PREFERENCES);

  return (
    <Preferences
      preferences={preferences}
      onConfirm={setPreferences}
      contentDisplayPreference={{
        options: [
          { id: 'name', label: 'File name' },
          { id: 'status', label: 'Status' },
          { id: 'type', label: 'Type' },
          { id: 'size', label: 'Size' },
        ],
      }}
    />
  );
};
Default.args = {};

export interface PreferencesProps {
  title?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  disabled?: boolean;
  pageSizePreference?: PreferencesProps.PageSizePreference;
  wrapLinesPreference?: PreferencesProps.WrapLinesPreference;
  contentDisplayPreference?: PreferencesProps.ContentDisplayPreference;
  preferences?: PreferencesProps.Preferences;
  onCancel?: () => void;
  onConfirm?: (preferences?: PreferencesProps.Preferences) => void;
}

export namespace PreferencesProps {
  export interface Preferences {
    pageSize?: number;
    wrapLines?: boolean;
    contentDisplay?: ReadonlyArray<ContentDisplayItem>;
  }

  export interface ContentDisplayPreference {
    title?: string;
    description?: string;
    options: ReadonlyArray<PreferencesProps.ContentDisplayOption>;
  }

  export interface ContentDisplayOption {
    id: string;
    label: string;
    alwaysVisible?: boolean;
  }

  export interface ContentDisplayItem {
    id: string;
    visible: boolean;
  }

  export interface PageSizePreference {
    title?: string;
    options: ReadonlyArray<PageSizeOption>;
  }

  export interface PageSizeOption {
    value: number;
    label?: string;
  }

  export interface WrapLinesPreference {
    label?: string;
    description?: string;
  }
}

/// <reference types="react" />
declare function useDialog(initialState?: boolean): {
    open: boolean;
    close: () => void;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
export default useDialog;

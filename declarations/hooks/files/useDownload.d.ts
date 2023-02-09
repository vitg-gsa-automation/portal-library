interface DownloadParams {
    fileIdentifier: string;
    outputFileName: string;
}
declare function useDownload(): {
    loading: boolean;
    error: string;
    download: ({ fileIdentifier, outputFileName, }: DownloadParams) => Promise<void>;
};
export default useDownload;

interface UseFetchArgs {
    url: string;
    params?: any;
}
declare function useFetch<T = any>(args?: UseFetchArgs): {
    data: T | undefined;
    loading: boolean;
    error: string;
};
export default useFetch;

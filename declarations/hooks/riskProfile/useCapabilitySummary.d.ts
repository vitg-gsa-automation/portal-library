import { Capability, Control } from 'types/riskProfiles';
declare function useCapabilitySummary(systemId?: number): {
    capability: Capability | undefined;
    select: (capability: Capability) => Promise<void>;
    loading: boolean;
    error: string;
    controls: Control[];
};
export default useCapabilitySummary;

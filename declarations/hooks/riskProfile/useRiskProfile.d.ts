import { Capability, Control } from 'types/riskProfiles';
declare function useRiskProfile(systemId?: number): {
    capabilities: Capability[];
    generate: () => Promise<void>;
    loading: boolean;
    error: string;
    capabilitySummary: {
        capability: Capability | undefined;
        select: (capability: Capability) => Promise<void>;
        loading: boolean;
        error: string;
        controls: Control[];
    };
};
export default useRiskProfile;

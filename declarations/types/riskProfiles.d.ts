export type RiskProfile = Capability[];
export interface Capability {
    ID: number;
    CapabilitiesId: number;
    CapabilityName: string;
    PercentTotal: number;
}
export interface Control {
    'Control Number': string;
    'Control Name': string;
    'Percent Implemented': number;
}

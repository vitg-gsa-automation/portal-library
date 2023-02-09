import { Capability, Control } from '../types/riskProfiles';
interface GetCapabilityControlsParams {
    AuthCode: string;
    SystemId: number;
    CapId: number;
}
interface GetRiskProfileParams {
    AuthCode: string;
    SystemId: number;
}
export declare function getCapabilityControls(params: GetCapabilityControlsParams): Promise<Control[]>;
export declare function getRiskProfile(params: GetRiskProfileParams): Promise<Capability[]>;
export {};

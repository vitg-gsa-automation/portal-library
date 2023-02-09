import { Capability, Control } from '../types/riskProfiles';
import riskProfileService from '../../services/riskProfileService';

interface GetRiskProfileUserAuthParams {
  loginid: string;
  passcode: string;
}

interface RiskProfileUserAuthResults {
  AuthCode: string;
  OrgId: string;
  UserId: number;
  ExpirationDate: string;
}

interface GetCapabilityControlsParams {
  AuthCode: string;
  SystemId: number;
  CapId: number;
}

interface GetRiskProfileParams {
  AuthCode: string;
  SystemId: number;
}

export async function getCapabilityControls(
  params: GetCapabilityControlsParams
) {
  const response = await riskProfileService.get<Control[]>(
    '/api/RiskProfiler/Capability',
    {
      params,
    }
  );
  return response.data;
}

export async function getRiskProfile(params: GetRiskProfileParams) {
  const response = await riskProfileService.get<Capability[]>(
    '/api/RiskProfiler',
    {
      params,
    }
  );
  return response.data;
}

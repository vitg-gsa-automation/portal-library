import { useState } from 'react';

import useUser from 'hooks/useUser';
import { getRiskProfile } from 'api/riskProfiles';
import { getErrorMessage } from 'helpers/utils';
import { Capability, Control } from 'types/riskProfiles';
import useCapabilitySummary from 'hooks/riskProfile/useCapabilitySummary';

const mockedCapabilities: Capability[] = [
  {
    ID: 1,
    CapabilitiesId: 1,
    CapabilityName: 'Manage and Asset Risk (RISK)',
    PercentTotal: 84,
  },
  {
    ID: 1,
    CapabilitiesId: 2,
    CapabilityName: 'Perform Resilient Systems Engineering (SE)',
    PercentTotal: 80,
  },
  {
    ID: 1,
    CapabilitiesId: 3,
    CapabilityName: 'Software Asset Management (SWAM)',
    PercentTotal: 71,
  },
  {
    ID: 1,
    CapabilitiesId: 4,
    CapabilityName: 'Configuration Settings Management (CSM)',
    PercentTotal: 83,
  },
  {
    ID: 1,
    CapabilitiesId: 5,
    CapabilityName: 'Vulnerability (Patch) Management (VULN)',
    PercentTotal: 95,
  },
  {
    ID: 1,
    CapabilitiesId: 6,
    CapabilityName: 'Manage Behavioral Expectations (BEHAVE)',
    PercentTotal: 85,
  },
  {
    ID: 1,
    CapabilitiesId: 7,
    CapabilityName: 'Manage Credentials and Authentication (CRED)',
    PercentTotal: 85,
  },
  {
    ID: 1,
    CapabilitiesId: 8,
    CapabilityName: 'Manage Privileges and Accounts (PRIV)',
    PercentTotal: 87,
  },
  {
    ID: 1,
    CapabilitiesId: 9,
    CapabilityName: 'Manage Network Boundaries (BOUND-N)',
    PercentTotal: 85,
  },
  {
    ID: 1,
    CapabilitiesId: 10,
    CapabilityName:
      'Manage Preparation for Events (Incidents and Contingencies) (PREP)',
    PercentTotal: 85,
  },
  {
    ID: 1,
    CapabilitiesId: 11,
    CapabilityName: 'Manage Anomalous Event Detection (DETECT)',
    PercentTotal: 85,
  },
  {
    ID: 1,
    CapabilitiesId: 12,
    CapabilityName: 'Manage Anomalous Event Response and Recovery (RESPOND)',
    PercentTotal: 85,
  },
];

function useRiskProfile(systemId?: number) {
  const user = useUser();
  const [capabilities, setCapabilities] = useState<Capability[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const capabilitySummary = useCapabilitySummary(systemId);

  const generate = async function () {
    try {
      if (!user?.AuthenticationCode) throw new Error('No authcode');
      if (!systemId) throw new Error('No systemId');
      setLoading(true);
      const capabilities = await getRiskProfile({
        AuthCode: user.AuthenticationCode,
        SystemId: systemId,
      });
      setCapabilities(capabilities);
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    capabilities,
    generate,
    loading,
    error,
    capabilitySummary,
  };
}
export default useRiskProfile;

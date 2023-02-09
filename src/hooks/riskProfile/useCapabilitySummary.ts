import { useState } from 'react';

import useUser from 'hooks/useUser';
import { getCapabilityControls } from 'api/riskProfiles';
import { getErrorMessage } from 'helpers/utils';
import { Capability, Control } from 'types/riskProfiles';

function useCapabilitySummary(systemId?: number) {
  const user = useUser();
  const [capability, setCapability] = useState<Capability>();
  const [controls, setControls] = useState<Control[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const select = async function (capability: Capability) {
    try {
      if (!user?.AuthenticationCode) throw new Error('No authcode');
      if (!systemId) throw new Error('No systemId');
      setCapability(capability);
      setLoading(true);
      const controls = await getCapabilityControls({
        AuthCode: user.AuthenticationCode,
        SystemId: systemId,
        CapId: capability.CapabilitiesId,
      });
      setControls(controls);
    } catch (error) {
      const message = getErrorMessage(error);
      setError(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { capability, select, loading, error, controls };
}
export default useCapabilitySummary;

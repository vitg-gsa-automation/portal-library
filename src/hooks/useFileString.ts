import { useEffect, useState } from 'react';

export function useFileString(file?: File) {
  const [value, setValue] = useState<string>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!file) return;
    setLoading(true);
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      // Get the string contents of the file
      if (typeof reader.result === 'string') setValue(reader.result);
      setLoading(false);
    };
  }, [file]);

  return { value, loading };
}

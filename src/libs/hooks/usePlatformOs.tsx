import { useEffect, useState } from 'react';

export function usePlatformOS() {
  const [platform, setPlatform] = useState<'android' | 'ios' | 'pc' | 'Unknown'>('Unknown');

  useEffect(() => {
    if (typeof navigator !== 'undefined' && 'userAgent' in navigator) {
      const UA = navigator.userAgent.toLowerCase();

      if (UA.includes('android')) {
        setPlatform('android');
      } else if (UA.includes('iphone') || UA.includes('ipad') || UA.includes('ipod')) {
        setPlatform('ios');
      } else {
        setPlatform('pc');
      }
    }
  }, []);

  return platform;
}

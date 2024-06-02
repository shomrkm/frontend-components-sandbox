import { useEffect, useState } from 'react';

/**
 * 指定したtransition秒数を考慮したマウント状態を返す
 */
export function useTransitionState(isMounted: boolean, transitionMs: number) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), transitionMs);
    }
    return () => {
      timeoutId && clearTimeout(timeoutId);
    };
  }, [transitionMs, isMounted, isTransitioning]);

  return isTransitioning;
}

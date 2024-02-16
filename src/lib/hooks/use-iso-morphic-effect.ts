/* eslint-disable react-hooks/rules-of-hooks */
import {
  useEffect,
  useLayoutEffect,
  type DependencyList,
  type EffectCallback,
} from 'react';
import { env } from '@/lib/utils/env';

export const useIsoMorphicEffect = (
  effect: EffectCallback,
  deps?: DependencyList | undefined
) => {
  if (env.isServer) {
    useEffect(effect, deps);
  } else {
    useLayoutEffect(effect, deps);
  }
};

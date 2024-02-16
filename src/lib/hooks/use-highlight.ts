import { MutableRefObject, useEffect } from 'react';
import hljs from 'highlight.js';

type Container = MutableRefObject<HTMLElement | null>;

export default function useHighlight(container: Container) {
  useEffect(() => {
    if (!container.current) return;
    console.log(container.current);
    hljs.highlightElement(container.current);
  }, [container]);
}

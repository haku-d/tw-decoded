import { useEffect, useRef, type MutableRefObject } from 'react';
import { useDocumentEvent } from './use-document-event';
import { useWindowEvent } from './use-window-event';

type Container = MutableRefObject<HTMLElement | null>;
type ContainerCollection = Container[] | Set<Container>;
type ContainerInput = Container | ContainerCollection;

export function useOutsideClick(
  containers: ContainerInput | (() => ContainerInput),
  cb: (
    event: MouseEvent | PointerEvent | FocusEvent | TouchEvent,
    target: HTMLElement
  ) => void,
  enabled = true
): void {
  const enabledRef = useRef(false);
  useEffect(() => {
    requestAnimationFrame(() => {
      enabledRef.current = enabled;
    });
  }, [enabled]);

  function handleOutsideClick<
    E extends MouseEvent | PointerEvent | FocusEvent | TouchEvent
  >(event: E, resolveTarget: (event: E) => HTMLElement | null) {
    if (!enabledRef.current) return;

    const target = resolveTarget(event);

    if (target === null) return;

    // Ignore if the target does not exist in the DOM anymore
    if (!target.getRootNode().contains(target)) return;

    // Ignore if the target was removed from the DOM by the time the handler was called
    if (!target.isConnected) return;

    const _containers = (function resolve(containers): ContainerCollection {
      if (typeof containers === 'function') {
        return resolve(containers());
      }

      if (Array.isArray(containers)) {
        return containers;
      }

      if (containers instanceof Set) {
        return containers;
      }

      return [containers];
    })(containers);

    // Ignore if the target exists in one of the containers
    for (const container of _containers) {
      if (container === null) continue;
      const domNode =
        container instanceof HTMLElement ? container : container.current;
      if (domNode?.contains(target)) {
        return;
      }
      // If the click crossed a shadow boundary, we need to check if the container
      // is inside the tree by using `composedPath` to "pierce" the shadow boundary
      /**
       * If you're clicking on a shadow boundary, the event target is always shadow root
       * `composedPath` will return the event's path which is an array of the objects on
       *  which listeners will be invoked
       */
      if (
        domNode?.shadowRoot &&
        event.composed &&
        event.composedPath().includes(domNode as EventTarget)
      ) {
        return;
      }
    }

    // TODO
    // Handle dialog case

    return cb(event, target);
  }

  const initialClickTarget = useRef<EventTarget | null>(null);

  useDocumentEvent(
    'pointerdown',
    (event) => {
      if (enabledRef.current) {
        initialClickTarget.current =
          event.composedPath?.()?.[0] || event.target;
      }
    },
    true
  );

  useDocumentEvent(
    'mousedown',
    (event) => {
      if (enabledRef.current) {
        initialClickTarget.current =
          event.composedPath?.()?.[0] || event.target;
      }
    },
    true
  );

  useDocumentEvent(
    'click',
    (event) => {
      // if (isMobile()) {
      //   return
      // }

      if (!initialClickTarget.current) {
        return;
      }

      handleOutsideClick(event, () => {
        return initialClickTarget.current as HTMLElement;
      });

      initialClickTarget.current = null;
    },

    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
    // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
    // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true
  );

  useDocumentEvent(
    'touchend',
    (event) => {
      return handleOutsideClick(event, () => {
        if (event.target instanceof HTMLElement) {
          return event.target;
        }
        return null;
      });
    },

    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
    // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
    // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true
  );

  // When content inside an iframe is clicked `window` will receive a blur event
  // This can happen when an iframe _inside_ a window is clicked
  // Or, if headless UI is *in* the iframe, when a content in a window containing that iframe is clicked

  // In this case we care only about the first case so we check to see if the active element is the iframe
  // If so this was because of a click, focus, or other interaction with the child iframe
  // and we can consider it an "outside click"
  useWindowEvent(
    'blur',
    (event) => {
      return handleOutsideClick(event, () => {
        return window.document.activeElement instanceof HTMLIFrameElement
          ? window.document.activeElement
          : null;
      });
    },
    true
  );
}

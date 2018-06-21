import { NOOP } from "../core/noop";
import { elementRemoveAttribute } from "../core/shortcuts";

/**
 * Syncable values are providing an escape hatch for synchronization algorithm and open possibilities for applying any
 * chagnes to DOM elements.
 *
 * When DOM element attributes are synchronized, all values types are checked if it is a string, number, boolean or a
 * syncable value. When it is a syncable value, synchronization function will be invoked with the current DOM element,
 * current attribute key, value from the previous syncable value and current value.
 */
export interface SyncableValue<P> {
  /**
   * Value.
   */
  v: P | undefined;
  /**
   * Synchronization function.
   *
   * @param element - Target element
   * @param key - Attribute key
   * @param prev - Previous value
   * @param next - Next value
   */
  s(element: Element, key: string, prev: P | undefined, next: P | undefined): void;
}

/**
 * {@link SyncableValue} with `undefined` value and `NOOP` sync function.
 */
export const SYNCABLE_VALUE_SKIP_UNDEFINED: SyncableValue<any> = {
  v: void 0,
  s: NOOP as (element: Element, key: string, prev: any, next: any) => void,
};

/**
 * {@link SyncableValue} with `undefined` value and sync functions that removes `key` attribute.
 */
export const SYNCABLE_VALUE_REMOVE_ATTR_UNDEFINED = {
  v: void 0,
  s: (element: Element, key: string, prev: any) => {
    if (prev !== void 0) {
      elementRemoveAttribute.call(element, key);
    }
  },
};

/**
 * {@link SyncableValue} with `undefined` value and sync functions that removes `key` event.
 */
export const SYNCABLE_VALUE_REMOVE_EVENT_UNDEFINED = {
  v: void 0,
  s: (
    element: Element,
    key: string,
    prev: ((ev: Event) => void) | undefined,
  ) => {
    if (prev !== void 0) {
      element.removeEventListener(key, prev);
    }
  },
};

/**
 * PROPERTY function creates a {@link SyncableValue} that assigns a property to a property name derived from the `key`
 * of the attribute.
 *
 * `undefined` values are ignored.
 *
 * @example
 *
 *   const e = div("", { _customProperty: PROPERTY("value") });
 *
 * @param v - Property value
 * @returns {@link SyncableValue}
 */
export function PROPERTY<T>(v: T | undefined): SyncableValue<T> {
  return (v === void 0) ? SYNCABLE_VALUE_SKIP_UNDEFINED : { v, s: syncProperty };
}

/**
 * Synchronization function for {@link SyncableValue} created with a {@link PROPERTY} function.
 *
 * @param element - Target element
 * @param key - Attribute key
 * @param prev - Previous value
 * @param next - Next value
 */
function syncProperty(element: Element, key: string, prev: any, next: any) {
  if (prev !== next) {
    (element as any)[key] = next!;
  }
}

/**
 * UNSAFE_HTML function creates a {@link SyncableValue} that assigns an `innerHTML` property to an Element.
 *
 * `undefined` values are ignored.
 *
 * @example
 *
 *   const e = div("", { unsafeHTML: UNSAFE_HTML("<span></span>") });
 *
 * @param v - innerHTML value
 * @returns {@link SyncableValue}
 */
export function UNSAFE_HTML(v: string | undefined): SyncableValue<string> {
  return (v === void 0) ? SYNCABLE_VALUE_SKIP_UNDEFINED : { v, s: syncUnsafeHTML };
}

/**
 * Synchronization function for {@link SyncableValue} created with {@link UNSAFE_HTML} function.
 *
 * @param element - Target element
 * @param key - Attribute key
 * @param prev - Previous value
 * @param next - Next value
 */
function syncUnsafeHTML(element: Element, key: string, prev: string | undefined, next: string) {
  if (prev !== next) {
    if (prev !== void 0 || next !== "") {
      element.innerHTML = next!;
    }
  }
}

/**
 * EVENT function creates a {@link SyncableValue} that assigns a native event handler derived from the `key` attribute
 * to an Element.
 *
 * `undefined` values remove event listener.
 *
 * @example
 *
 *   const e = div("", { click: EVENT((ev) => { console.log(ev) }); });
 *
 * @param v - Event handler
 * @returns {@link SyncableValue}
 */
export function EVENT(v: ((ev: Event) => void) | undefined): SyncableValue<(ev: Event) => void> {
  return (v === void 0) ? SYNCABLE_VALUE_REMOVE_EVENT_UNDEFINED : { v, s: syncEvent };
}

/**
 * Synchronization function for {@link SyncableValue} created with {@link EVENT} function.
 *
 * @param element - Target element
 * @param key - Attribute key
 * @param prev - Previous value
 * @param next - Next value
 */
function syncEvent(
  element: Element,
  key: string,
  prev: ((ev: Event) => void) | undefined,
  next: ((ev: Event) => void),
) {
  if (prev !== next) {
    if (prev !== void 0) {
      element.removeEventListener(key, prev);
    }
    element.addEventListener(key, next);
  }
}
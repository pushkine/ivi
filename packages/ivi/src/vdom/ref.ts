import { Box, UNMOUNT_TOKEN, UnmountToken } from "../core";
import { Op } from "./operations";
import { OpState } from "./state";
import { component } from "./factories";
import { useUnmount } from "./hooks";

function updateRef(prev: Box<OpState | null> | undefined, next: Box<OpState | null>, s: OpState): Box<OpState | null> {
  if (prev !== void 0 && prev !== next) {
    prev.v = null;
  }
  next.v = s;
  return next;
}

/**
 * Ref creates a component that captures internal state into a boxed value.
 *
 * @param r Boxed value.
 * @param c Children operations.
 * @returns Ref node.
 */
export const Ref = component<Box<OpState | null>, Op>((s) => {
  let _ref: Box<OpState | null>;
  const h = (p: UnmountToken | Box<OpState | null>, children: Op) => (
    (p === UNMOUNT_TOKEN) ?
      (_ref.v = null, void 0) :
      (_ref = updateRef(_ref, p as Box<OpState | null>, s), children)
  );
  useUnmount(s, h as () => void);
  return h as (p: Box<OpState | null>, c: Op) => Op;
});

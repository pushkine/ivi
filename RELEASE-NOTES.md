## v0.23.0

### Synthetic Events

Synthetic event internals were heavily redesigned to reduce overall complexity and improve API flexibility for custom
synthetic events.

Custom synthetic events can now dispatch custom events when native events are dispatched. It should significantly
improve performance when there are many custom synthetic events as it would require to traverse virtual dom just once
when dispatch targets are collected.

API for creating custom synthetic events is still an unstable API and it is most likely that there will be changes in
the future, but it is an extremely useful API that solves alot of problems with UI applications.

#### Native events are no longer wrapped in a `SyntheticNativeEvent` object.

BEFORE

```js
onClick((ev) => {
  console.log(ev.native.target); // target
});
```

AFTER:

```js
onClick((ev) => {
  console.log(ev.target);
});
```

#### `EventFlags` is removed.

To stop event propagation event handler should return `true` value.

BEFORE:

```js
onClick((ev) => {
  return EventFlags.PreventDefault | EventFlags.StopPropagation;
});
```

AFTER:

```js
onClick((ev) => {
  ev.preventDefault();
  return true;
});
```

#### `currentTarget` is now accessible as a second argument.

BEFORE

```js
onClick((ev) => {
  console.log(ev.node); // target
});
```

AFTER:

```js
onClick((ev, currentTarget) => {
  console.log(currentTarget);
});
```

#### `SyntheticEvent` interface is removed

`SyntheticEvent` interface had two properties: `node` and `timestamp`. `node` were used to assign current target, it is
replaced with an additional argument in all event handler functions. `timestamp` is a leftover from an old synthetic
events implementation that tried to fix cross-browser quirks, for many custom synthetic events this property doesn't
have any value and it should be decided by a custom event implementor when `timestamp` value is necessary.

#### `beforeNativeEvent()` and `afterNativeEvent()` is removed

It is replaced with an `addNativeEventMiddleware()`.

```js
addNativeEventMiddleware(MOUSE_DOWN, (event, next) => {
  // beforeNativeEvent...
  next(event);
  // afterNativeEvent...
});
```

### Error Handling

Unhandled exceptions raised inside of a `catchError()` block are now considered as userspace bugs and will change
application state to "error". When application state is "error", all entry points wrapped in `catchError()` will be
blocked to prevent potential security issues because it is impossible to infer which part of an application state
caused a bug.

All ivi entry points like `render()`, synthetic event handlers, etc are wrapped with a `catchError()` block.

#### Creating custom functions wrapped with a `catchError()`

```js
const entryFn = catchError((arg1, arg2) => {
  // ...
});

entryFn(arg1, arg2);
```

### Reconciler

- Fixed bug when direct child node of a `Context()` node triggers replace operation.
- Fixed bug when strictly equal direct child node of an HTML/SVG element doesn't trigger deep dirty checking.
- Fixed bug when `useUnmount()` hook hasn't been receiving an undocumented `true` value as a first argument. It is an
unstable feature that can be used for micro optimizations in custom hooks.
- Ported back shortcuts for DOM property accesors that should reduce megamorphic call-sites. Chrome 74 fixed an issue
with performance https://bugs.chromium.org/p/v8/issues/detail?id=8820

### Misc

- Replaced `containsRelatedTarget()` with a generic function `containsDOMElement()`.
- Added `hasDOMElementChild()` function.
- Removed autofix for [Mouse Event bubbling in iOS](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html)
- Added `VisitNodesDirective` to get a better control over `visitNodes()` algorithm.
- Added `onTransitionRun()` and `onTransitionStart()` events.
- Context propagation through portals.

## v0.22.0

### Synthetic Events

Added support for native events:

- `onBeforeInput()`
- `onTransitionCancel()`
- `onTransitionEnd()`

## Global Variables replaced with Environment Variables

`__IVI_DEBUG__` and `__IVI_TARGET__` were replaced with `process.env.NODE_ENV !== "production"` and
`process.env.IVI_TARGET` to support parcel bundler [Issue #10](https://github.com/localvoid/ivi/issues/10).

## v0.21.0

- Full support for server-side rendering `renderToString()`
- Reduced code size

### Global Variables

`DEBUG` and `TARGET` were renamed to `__IVI_DEBUG__` and `__IVI_TARGET__` to prevent name conflicts with variables that
can be used in different packages.

### `useSelect()`

Context argument is removed from selectors, `context()` function should be used to access current context.

```ts
function useSelect<T>(
  c: StateNode,
  selector: (props?: undefined, prev?: T | undefined) => T,
): () => T;
function useSelect<T, P>(
  c: StateNode,
  selector: (props: P, prev?: T | undefined) => T,
  shouldUpdate?: undefined extends P ? undefined : (prev: P, next: P) => boolean,
): undefined extends P ? () => T : (props: P) => T;
```

### Attribute Directives

Attribute directives were changed to support server-side rendering:

```ts
interface AttributeDirective<P> {
  v: P;
  u?: (element: Element, key: string, prev: P | undefined, next: P | undefined) => void;
  s?: (key: string, next: P) => void;
}
```

`s()` method can be used to alter `renderToString()` behavior.

#### `VALUE()` directive

`VALUE()` directive now works only with `HTMLInputElement` elements. New `CONTENT()` directive should be used to assign
value for `HTMLTextArea` elements.

`VALUE()` directive emits `value="${v}"` attribute when rendered to string.

`CONTENT()` directive emits children string `<textarea>${v}</textarea>` when rendered to string.
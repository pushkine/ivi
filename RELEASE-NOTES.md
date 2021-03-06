## v1.0.1

### Bug Fixes

- Fixed `getDOMNode()` returning `null` value when first non-null node in a fragment or `TrackByKey` operation doesn't
have any DOM nodes.
- Fixed event dispatching algorithm visiting more nodes than it is necessary.

## v1.0.0

### Components

Added second prop to components.

```ts
const Button = statelessComponent<{ id: string }, Op>((props, children) => (
  button("button", props, children)
));

Button({ id: "button-id" },
  "Click Me",
);
```

#### Custom `areEqual` function

```ts
const View = statelessComponent<number, [number, number]>(
  (a, b) => (
    a + b[0] + b[1]
  ),
  undefined,
  shallowEqualArray,
);
View(1, [2, 3]);
```

### Dirty Checking / Observables

Dirty checking API were redesigned to improve support for use cases with coarse-grained observable graphs and
mutable data structures.

New API for dirty checking is composable and can be used in stateless components.

- `useSelect()` hook were removed.
- Added pull-based observables.
- Context is reimplemented with observables and it is now way much cheaper to dirty check.

#### Examples

##### Computed Values (lazy evaluation)

```js
const a = observable(1);
const b = observable(2);
const sum = computed(() => watch(a) + watch(b));
const A = statelessComponent(() => div(_, _, watch(sum)()));
```

##### Basic selectors with immutable state

```js
const STATE = { value: 1 };
const A = component((c) => {
  const getValue = selector(() => STATE.value);
  return () => div(_, _, watch(getValue)());
});
```

##### Memoized selector with immutable state

```js
const STATE = { a: 1, b: 2 };
const A = component((c) => {
  const getValue = selector((prev) => (
    prev !== void 0 && prev.a === STATE.a && prev.b === STATE.b ? prev :
      { a: STATE.a, b: STATE.b, result: STATE.a + STATE.b };
  ));
  return () => div(_, _, watch(getValue)());
});
```

##### Composition

```js
const a = observable(1);
const A = component((c) => {
  const getValue = memo((i) => computed(() => watch(a) + i));
  return (i) => div(_, _, watch(getValue(i))());
});
```

### Boolean DOM Attribute Values

Removed automagic conversion from boolean values to empty string. Correct attribute values should be specified
explicitly.

### `textContent=""` Optimization

This optimization has a quite noticeable impact in popular benchmarks. But in real applications, use cases that would
benefit from this optimization will work significantly faster by wrapping lists into a transient DOM node.

### Deep State Tracking

Deep state tracking optimization were removed. It is one of those optimizations that improve performance in benchmarks,
but make it worse in real applications.

This optimization worked by updating node state flags during stack unwinding. It saved information about node subtree,
so we could skip dirty checking and unmounting for subtrees that didn't have any stateful components. In applications
decomposed into small components there will be many stateful components used as leaf nodes, so instead of optimizing, it
will make dirty checking and reconciliation algorithms slightly slower. Also, this optimization were adding a lot of
complexity to the reconciliation algorithm.

### Simplified track by key algorithm

Instead of returning LIS indices, nodes that are part of LIS are now marked in the input array.

### Events

#### Stop Propagation

Synthetic event handlers do not propagate events anymore. To propagate events, event handler should return
`DispatchEvent.Propagate` value.

#### Move Events

Removed touch/mouse/pointer move events. Move event handlers usually attached when down event is triggered. To make
sure that we don't lose any move events, we can't wait until next frame is rerendered, so move event handlers should be
attached with native DOM api.

### Server Side Rendering

Removed. Not interested in supporting this feature.

## v0.27.1

Deep state flags propagation algorithm were redesigned to merge flags only when going through fragments and `TrackByKey`
nodes. New algorithm also fixes some edge cases when deep state flags were kept assigned even when subtree no longer had
this state.

## v0.27.0

### Optimizations

Reduced memory consumption by operation nodes. All properties are now inlined into operation nodes and there are three
different operation node shapes. Almost all callsites should stay in monomorphic state, except for the one that
accessing operation type in the mount and update functions, it will be in polymorphic state and it is ok as long as it
doesn't transition into megamorphic state.

### Bug Fixes

- Fixed `nextNode` assignment in a dirty checking algorithm when it is going through DOM elements.

## v0.26.0

### Optimizations

Reduced memory consumption in component hooks, refs and portals.

API that is used for this optimizations is now public. This API is using several objects: `TASK_TOKEN`, `SELECT_TOKEN`
and `UNMOUNT_TOKEN` to identify who is invoking a callback function. Callbacks registered with `scheduleMicrotask()`
will receive `TASK_TOKEN` as a first argument, hooks added with `useUnmount()` will receive `UNMOUNT_TOKEN`.
`SELECT_TOKEN` is used internally to optimize `useSelect()`.

### Immediately executed `useEffect()`

`useEffect()` hook is now immediately executed when it is invoked in the internal component "update" function. It makes
it fully deterministic to prevent unexpected bugs when `useEffect()` is used to listen some observable value that can
generate an event before microtask with an effect is executed. When it is immediately executed, it will guarantee that
we don't miss any events generated by an observable value.

## v0.25.0

### Context

New context implementation provides a slightly different API that makes it possible to remove dirty context checking
during updates and dirty checking, doesn't require to provide value type when retrieving context values, and doesn't use
global namespace for context keys.

BEFORE:

```ts
const C = component((c) => {
  const getValue = useSelect((c) => context<{ value: number }>().value);
  return () => getValue();
});

render(
  Context({ value: 123 },
    C(),
  ),
  container,
);
```

AFTER:

```ts
const Value = contextValue<number>();
const C = component((c) => {
  const getValue = useSelect((c) => Value.get());
  return () => getValue();
});

render(
  Value.set(123,
    C(),
  ),
  container,
);
```

### Reconciler

Children reconciliation algorithm for fragments were changed to dynamically add/remove at the end of the fragment
instead of reinstantiating entire fragment when fragment length is changed.

## v0.24.0

### `shouldUpdate`

All `shouldUpdate` functions are replaced with their inverse function `areEqual`.

APIs affected by this change:

- `component(_, shouldUpdate)`
- `statelessComponent(_, shouldUpdate)`
- `useSelect(_, shouldUpdate)`
- `useEffect(_, shouldUpdate)`
- `useLayoutEffect(_, shouldUpdate)`
- `useMutationEffect(_, shouldUpdate)`
- `memo(_, shouldUpdate)`
- `selector(_, shouldUpdate)`

### Tests

New package `ivi-jest` adds a collection of useful tools for testing with jest library. All ivi tests were completely
rewritten using a new `ivi-jest` library.

### Scheduler

`ivi-scheduler` and `ivi-test-scheduler` packages were removed. Old unit tests were using package aliasing to mock
scheduler behavior and now it is not needed anymore.

### Events

Removed optional bubbling, all events are now always bubble.

### Bug Fixes

- Fast path for `TrackByKey` hasn't been executed correctly when nodes doesn't change their positions. It is hard to
test because it is still works correctly even when this fast path doesn't execute.
- Prevent `VALUE()` and `CONTENT()` attribute directives from accepting numbers, they should work only with string
values.
- `shouldUpdate` functions hasn't been executed correctly in component hooks and caused more updates than it was
necessary.

## v0.23.0

### Synthetic Events

Synthetic event internals were heavily redesigned to reduce overall complexity and improve API flexibility for custom
synthetic events.

Custom synthetic events can now inject their own behavior into event flow of native events. It should significantly
improve performance when there are many custom synthetic events as it won't be necessary to traverse virtual dom to
collect dispatch targets for each custom synthetic event.

API for creating custom synthetic events is still an unstable API and it is most likely that there will be changes in
the future, but it is an extremely useful API that solves alot of problems with UI applications.

#### Native events are no longer wrapped in a `SyntheticNativeEvent` object

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

#### `EventFlags` is removed

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

#### `currentTarget` is now accessible as a second argument

BEFORE

```js
onClick((ev) => {
  console.log(ev.node); // currentTarget
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
events implementation that tried to fix cross-browser quirks. For many custom synthetic events this property doesn't
have any value and it custom event implementor should decide when `timestamp` value is necessary.

#### `beforeNativeEvent()` and `afterNativeEvent()` are removed

It is replaced with an `addNativeEventMiddleware()`.

```js
addNativeEventMiddleware(MOUSE_DOWN, (event, next) => {
  // beforeNativeEvent...
  next(event);
  // afterNativeEvent...
});
```

### Portals

Portals were completely redesigned and moved to `ivi-portal` package. Portals now correctly propagate context through
portal entries.

```js
import { _, render, component, invalidate, Events, onClick, } from "ivi";
import { div, button } from "ivi-html";
import { portal } from "ivi-portal";

const MODAL = portal();

const App = component((c) => {
  let showModal = false;
  const showEvent = onClick(() => { showModal = true; invalidate(c); });

  return () => (
    [
      showModal ? MODAL.entry(div("modal", _, "This is being rendered inside the #modal-root div.")) : null,
      Events(showEvent,
        button(_, _, "Show modal"),
      ),
    ]
  );
});

render(App(), document.getElementById("app"));
render(MODAL.root, document.getElementById("modal-root"));
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
- Added shortcuts for DOM property accesors that should reduce megamorphic call-sites.

### Misc

- Replaced `containsRelatedTarget()` with a generic function `containsDOMElement()`.
- Added `hasDOMElementChild()` function.
- Removed autofix for [Mouse Event bubbling in iOS](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html)
- Added `VisitNodesDirective` to get a better control over `visitNodes()` algorithm.
- Added `onTransitionRun()` and `onTransitionStart()` events.

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

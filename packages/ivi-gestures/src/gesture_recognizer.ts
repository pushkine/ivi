import { GesturePointerEvent } from "./gesture_pointer_event";
import { GestureBehavior } from "./gesture_behavior";
import { GestureController, GestureConflictResolverAction } from "./gesture_controller";

export const enum GestureRecognizerState {
  Active = 1,
  Resolved = 1 << 1,
  Accepted = 1 << 2,
}

/**
 * Gesture Recognizer.
 *
 * Initial State => Active => Active|Resolved => Active|Resolved|Accepted
 *                            Active|Accepted => Active|Resolved|Accepted
 *
 * Initial State   :: activate()
 * Active          :: resolve() | cancel()
 * Active|Resolved :: cancel() | finish()
 */
export abstract class GestureRecognizer<T> {
  /**
   * See {@link GestureRecognizerState} for details.
   */
  public state: GestureRecognizerState;
  /**
   * Action that is required to resolve this gesture.
   */
  public resolveAction: GestureBehavior;
  /**
   * Actions that should be prevented in recognizers with lower priority.
   */
  public preventAction: GestureBehavior;
  /**
   * Minimum number of pointers to recognize this gesture.
   */
  public minPointers: number;
  /**
   * {@link GestureController}
   */
  private readonly controller: GestureController;
  protected readonly handler: (ev: T) => void;

  constructor(
    controller: GestureController,
    handler: (ev: T) => void,
    resolveAction: GestureBehavior,
    preventAction: GestureBehavior,
    minPointers: number,
  ) {
    this.state = 0;
    this.resolveAction = resolveAction;
    this.preventAction = preventAction;
    this.minPointers = minPointers;
    this.controller = controller;
    this.handler = handler;
  }

  reset() {
    this.state = 0;
  }

  shouldWait(): boolean {
    return false;
  }

  accepted(): void {
    //
  }

  rejected(): void {
    //
  }

  abstract handleEvent(event: GesturePointerEvent): void;

  /**
   * Dispose recognizer.
   */
  dispose() {
    if (this.state & GestureRecognizerState.Active) {
      this.cancel();
    }
  }

  protected activate() {
    if (DEBUG) {
      if (this.state & GestureRecognizerState.Active) {
        throw new Error("Unable to activate gesture recognizer, gesture recognizer is already activated");
      }
      if (this.state !== 0) {
        throw new Error("Unable to activate gesture recognizer, gesture recognizer has invalid state");
      }
    }
    this.controller(this, GestureConflictResolverAction.Activate);
  }

  protected resolve() {
    if (DEBUG) {
      if (!(this.state & GestureRecognizerState.Active)) {
        throw new Error("Unable to resolve gesture recognizer, gesture recognizer should be active");
      }
      if (this.state & GestureRecognizerState.Resolved) {
        throw new Error("Unable to resolve gesture recognizer, gesture recognizer is already resolved");
      }
    }
    this.controller(this, GestureConflictResolverAction.Resolve);
  }

  protected cancel() {
    if (DEBUG) {
      if (!(this.state & GestureRecognizerState.Active)) {
        throw new Error("Unable to cancel gesture recognizer, gesture recognizer should be active");
      }
    }
    this.controller(this, GestureConflictResolverAction.Cancel);
  }

  protected finish() {
    if (DEBUG) {
      if (!(this.state & GestureRecognizerState.Active)) {
        throw new Error("Unable to finish gesture recognizer, gesture recognizer should be active");
      }
      if (!(this.state & GestureRecognizerState.Resolved)) {
        throw new Error("Unable to finish gesture recognizer, gesture recognizer should be resolved");
      }
    }
    this.controller(this, GestureConflictResolverAction.Finish);
  }
}
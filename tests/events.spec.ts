import { EventHandler } from "../src/events/event_handler";
import { SyntheticEvent } from "../src/events/synthetic_event";
import { Events } from "../src/events/events";
import { IVNode } from "../src/vdom/ivnode";
import { $h } from "../src/vdom/vnode_dom";
import { render as rootRender } from "../src/vdom/root";
import { expect } from "chai";

function render<T extends Element>(node: IVNode<any> | null, container: Element): T {
    rootRender(node, container);
    return container.firstChild as T;
}

function createMouseEvent(type: string): MouseEvent {
    if (document.createEvent) {
        const ev = document.createEvent("MouseEvent");
        ev.initMouseEvent(type, true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null!);
        return ev;
    }
    return new MouseEvent(type);
}

export interface EventCounter {
    value: number;
    event: EventHandler<any>;
}

export function eventCounter(handlerFactory: (
    handler: (ev: SyntheticEvent) => void,
    capture?: boolean) => EventHandler<any>,
): EventCounter {
    const c = {
        value: 0,
        event: null as EventHandler<any> | null,
    };
    c.event = handlerFactory(() => {
        c.value++;
    }, false);

    return c as EventCounter;
}

describe("events", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);

    afterEach(() => {
        render(null, container);
    });

    it("<div onclick=FN>", () => {
        const click = eventCounter(Events.onClick);
        const n = render<HTMLElement>($h("div").events([click.event]), container);
        n!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
    });

    it("<div onclick=FN onclick=FN>", () => {
        const aClick = eventCounter(Events.onClick);
        const bClick = eventCounter(Events.onClick);
        const n = render<HTMLElement>($h("div").events([aClick.event, bClick.event]), container);
        n!.dispatchEvent(createMouseEvent("click"));
        expect(aClick.value).to.equal(1);
        expect(bClick.value).to.equal(1);
    });

    it("<div onclick=FN onmousedown=FN>", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        const n = render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        n!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
        expect(mousedown.value).to.equal(0);
        n!.dispatchEvent(createMouseEvent("mousedown"));
        expect(click.value).to.equal(1);
        expect(mousedown.value).to.equal(1);
    });

    it("null => []", () => {
        render<HTMLElement>($h("div"), container);
        render<HTMLElement>($h("div").events([]), container);
    });

    it("[] => []", () => {
        render<HTMLElement>($h("div").events([]), container);
        render<HTMLElement>($h("div").events([]), container);
    });

    it("null => {onclick}", () => {
        const click = eventCounter(Events.onClick);
        render<HTMLElement>($h("div"), container);
        const b = render<HTMLElement>($h("div").events([click.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
    });

    it("{} => [onclick]", () => {
        const click = eventCounter(Events.onClick);
        render<HTMLElement>($h("div").events([]), container);
        const b = render<HTMLElement>($h("div").events([click.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
    });

    it("null => [onclick, onmousedown]", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        render<HTMLElement>($h("div"), container);
        const b = render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(1);
    });

    it("{} => [onclick, onmousedown]", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        render<HTMLElement>($h("div").events([]), container);
        const b = render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(1);
    });

    it("null => [onclick, onclick]", () => {
        const aClick = eventCounter(Events.onClick);
        const bClick = eventCounter(Events.onClick);
        render<HTMLElement>($h("div"), container);
        const b = render<HTMLElement>($h("div").events([aClick.event, bClick.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(aClick.value).to.equal(1);
        expect(bClick.value).to.equal(1);
    });

    it("[onclick] => [onclick]", () => {
        const click = eventCounter(Events.onClick);
        render<HTMLElement>($h("div").events([click.event]), container);
        const b = render<HTMLElement>($h("div").events([click.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
    });

    it("[onclick] => []", () => {
        const click = eventCounter(Events.onClick);
        render<HTMLElement>($h("div").events([click.event]), container);
        const b = render<HTMLElement>($h("div").events([]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(0);
    });

    it("[onclick] => null", () => {
        const click = eventCounter(Events.onClick);
        render<HTMLElement>($h("div").events([click.event]), container);
        const b = render<HTMLElement>($h("div").events([]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(0);
    });

    it("[onclick, null] => [null, onclick]", () => {
        const aClick = eventCounter(Events.onClick);
        const bClick = eventCounter(Events.onClick);
        render<HTMLElement>($h("div").events([aClick.event, null]), container);
        const b = render<HTMLElement>($h("div").events([null, bClick.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(aClick.value).to.equal(0);
        expect(bClick.value).to.equal(1);
    });

    it("[onclick, onmousedown] => []", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        const b = render<HTMLElement>($h("div").events([]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(0);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(0);
    });

    it("[onclick, onmousedown] => null", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        const b = render<HTMLElement>($h("div"), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(0);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(0);
    });

    it("[onclick, onmousedown] => [onclick]", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        const b = render<HTMLElement>($h("div").events([click.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(0);
    });

    it("[onclick, onmousedown] => [onclick, onmouseup]", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        const mouseup = eventCounter(Events.onMouseUp);
        render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        const b = render<HTMLElement>($h("div").events([click.event, mouseup.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(1);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(0);
        b!.dispatchEvent(createMouseEvent("mouseup"));
        expect(mouseup.value).to.equal(1);
    });

    it("[onclick, onmousedown] => [onmouseup]", () => {
        const click = eventCounter(Events.onClick);
        const mousedown = eventCounter(Events.onMouseDown);
        const mouseup = eventCounter(Events.onMouseUp);
        render<HTMLElement>($h("div").events([click.event, mousedown.event]), container);
        const b = render<HTMLElement>($h("div").events([mouseup.event]), container);
        b!.dispatchEvent(createMouseEvent("click"));
        expect(click.value).to.equal(0);
        b!.dispatchEvent(createMouseEvent("mousedown"));
        expect(mousedown.value).to.equal(0);
        b!.dispatchEvent(createMouseEvent("mouseup"));
        expect(mouseup.value).to.equal(1);
    });
});

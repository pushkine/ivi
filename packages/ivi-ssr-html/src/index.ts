import {
  HTMLAnchorElementProps, HTMLElementProps, HTMLAppletElementProps, HTMLAreaElementProps, HTMLAudioElementProps,
  HTMLBaseElementProps, HTMLBaseFontElementProps, HTMLBodyElementProps, HTMLBRElementProps, HTMLButtonElementProps,
  HTMLCanvasElementProps, HTMLQuoteElementProps, HTMLTableCaptionElementProps, HTMLTableColElementProps,
  HTMLDataListElementProps, HTMLModElementProps, HTMLDirectoryElementProps, HTMLDivElementProps,
  HTMLDListElementProps, HTMLEmbedElementProps, HTMLFieldSetElementProps, HTMLFontElementProps, HTMLFormElementProps,
  HTMLFrameElementProps, HTMLFrameSetElementProps, HTMLHeadElementProps, HTMLHeadingElementProps, HTMLHRElementProps,
  HTMLHtmlElementProps, HTMLIFrameElementProps, HTMLImageElementProps, HTMLInputElementProps, HTMLLabelElementProps,
  HTMLLegendElementProps, HTMLLIElementProps, HTMLLinkElementProps, HTMLMapElementProps,
  HTMLMenuElementProps, HTMLMetaElementProps, HTMLMeterElementProps, HTMLObjectElementProps, HTMLOListElementProps,
  HTMLOptGroupElementProps, HTMLOptionElementProps, HTMLParagraphElementProps, HTMLParamElementProps,
  HTMLPictureElementProps, HTMLPreElementProps, HTMLProgressElementProps, HTMLScriptElementProps,
  HTMLSelectElementProps, HTMLSourceElementProps, HTMLSpanElementProps, HTMLStyleElementProps,
  HTMLTableDataCellElementProps, HTMLTableElementProps, HTMLTableHeaderCellElementProps, HTMLTableRowElementProps,
  HTMLTableSectionElementProps, HTMLTemplateElementProps, HTMLTextAreaElementProps, HTMLTitleElementProps,
  HTMLTrackElementProps, HTMLUListElementProps, HTMLVideoElementProps,
  MSHTMLWebViewElementProps,
} from "ivi-core";
import { VNode, VNodeFlags } from "ivi-ssr";

/**
 * Create a VNode representing a Text node.
 *
 * @param content Text content.
 * @returns VNode object.
 */
export function t(content: string | number | null): VNode<null> {
  return new VNode<null>(VNodeFlags.Text, null, null, null, content, null);
}

// HTML Elements:
export function a(className?: string): VNode<HTMLAnchorElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<a",
    null,
    className === undefined ? null : className,
    null,
    "</a>",
  );
}
export function abbr(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<abbr",
    null,
    className === undefined ? null : className,
    null,
    "</abbr>",
  );
}
export function acronym(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<acronym",
    null,
    className === undefined ? null : className,
    null,
    "</acronym>",
  );
}
export function address(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<address",
    null,
    className === undefined ? null : className,
    null,
    "</address>",
  );
}
export function applet(className?: string): VNode<HTMLAppletElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<applet",
    null,
    className === undefined ? null : className,
    null,
    "</applet>",
  );
}
export function area(className?: string): VNode<HTMLAreaElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<area",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function article(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<article",
    null,
    className === undefined ? null : className,
    null,
    "</article>",
  );
}
export function aside(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<aside",
    null,
    className === undefined ? null : className,
    null,
    "</aside>",
  );
}
export function b(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<b",
    null,
    className === undefined ? null : className,
    null,
    "</b>",
  );
}
export function base(className?: string): VNode<HTMLBaseElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<base",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function basefont(className?: string): VNode<HTMLBaseFontElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<basefont",
    null,
    className === undefined ? null : className,
    null,
    "</basefont>",
  );
}
export function bdo(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<bdo",
    null,
    className === undefined ? null : className,
    null,
    "</bdo>",
  );
}
export function big(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<big",
    null,
    className === undefined ? null : className,
    null,
    "</big>",
  );
}
export function blockquote(className?: string): VNode<HTMLQuoteElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<blockquote",
    null,
    className === undefined ? null : className,
    null,
    "</blockquote>",
  );
}
export function body(className?: string): VNode<HTMLBodyElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<body",
    null,
    className === undefined ? null : className,
    null,
    "</body>",
  );
}
export function br(className?: string): VNode<HTMLBRElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<br",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function button(className?: string): VNode<HTMLButtonElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.ButtonElement,
    "<button type=\"button\"",
    null,
    className === undefined ? null : className,
    null,
    "</button>",
  );
}
export function buttonSubmit(className?: string): VNode<HTMLButtonElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.ButtonElement,
    "<button",
    null,
    className === undefined ? null : className,
    null,
    "</button>",
  );
}
export function buttonReset(className?: string): VNode<HTMLButtonElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.ButtonElement,
    "<button type=\"reset\"",
    null,
    className === undefined ? null : className,
    null,
    "</button>",
  );
}
export function canvas(className?: string): VNode<HTMLCanvasElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<canvas",
    null,
    className === undefined ? null : className,
    null,
    "</canvas>",
  );
}
export function caption(className?: string): VNode<HTMLTableCaptionElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<caption",
    null,
    className === undefined ? null : className,
    null,
    "</caption>",
  );
}
export function center(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<center",
    null,
    className === undefined ? null : className,
    null,
    "</center>",
  );
}
export function cite(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<cite",
    null,
    className === undefined ? null : className,
    null,
    "</cite>",
  );
}
export function code(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<code",
    null,
    className === undefined ? null : className,
    null,
    "</code>",
  );
}
export function col(className?: string): VNode<HTMLTableColElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<col",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function colgroup(className?: string): VNode<HTMLTableColElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<colgroup",
    null,
    className === undefined ? null : className,
    null,
    "</colgroup>",
  );
}
export function data(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<data",
    null,
    className === undefined ? null : className,
    null,
    "</data>",
  );
}
export function datalist(className?: string): VNode<HTMLDataListElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<datalist",
    null,
    className === undefined ? null : className,
    null,
    "</datalist>",
  );
}
export function dd(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<dd",
    null,
    className === undefined ? null : className,
    null,
    "</dd>",
  );
}
export function del(className?: string): VNode<HTMLModElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<del",
    null,
    className === undefined ? null : className,
    null,
    "</del>",
  );
}
export function dfn(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<dfn",
    null,
    className === undefined ? null : className,
    null,
    "</dfn>",
  );
}
export function dir(className?: string): VNode<HTMLDirectoryElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<dir",
    null,
    className === undefined ? null : className,
    null,
    "</dir>",
  );
}
export function div(className?: string): VNode<HTMLDivElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<div",
    null,
    className === undefined ? null : className,
    null,
    "</div>",
  );
}
export function dl(className?: string): VNode<HTMLDListElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<dl",
    null,
    className === undefined ? null : className,
    null,
    "</dl>",
  );
}
export function dt(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<dt",
    null,
    className === undefined ? null : className,
    null,
    "</dt>",
  );
}
export function em(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<em",
    null,
    className === undefined ? null : className,
    null,
    "</em>",
  );
}
export function embed(className?: string): VNode<HTMLEmbedElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<embed",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function fieldset(className?: string): VNode<HTMLFieldSetElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<fieldset",
    null,
    className === undefined ? null : className,
    null,
    "</fieldset>",
  );
}
export function figcaption(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<figcaption",
    null,
    className === undefined ? null : className,
    null,
    "</figcaption>",
  );
}
export function figure(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<figure",
    null,
    className === undefined ? null : className,
    null,
    "</figure>",
  );
}
export function font(className?: string): VNode<HTMLFontElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<font",
    null,
    className === undefined ? null : className,
    null,
    "</font>",
  );
}
export function footer(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<footer",
    null,
    className === undefined ? null : className,
    null,
    "</footer>",
  );
}
export function form(className?: string): VNode<HTMLFormElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<form",
    null,
    className === undefined ? null : className,
    null,
    "</form>",
  );
}
export function frame(className?: string): VNode<HTMLFrameElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<frame",
    null,
    className === undefined ? null : className,
    null,
    "</frame>",
  );
}
export function frameset(className?: string): VNode<HTMLFrameSetElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<frameset",
    null,
    className === undefined ? null : className,
    null,
    "</frameset>",
  );
}
export function h1(className?: string): VNode<HTMLHeadingElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<h1",
    null,
    className === undefined ? null : className,
    null,
    "</h1>",
  );
}
export function h2(className?: string): VNode<HTMLHeadingElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<h2",
    null,
    className === undefined ? null : className,
    null,
    "</h2>",
  );
}
export function h3(className?: string): VNode<HTMLHeadingElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<h3",
    null,
    className === undefined ? null : className,
    null,
    "</h3>",
  );
}
export function h4(className?: string): VNode<HTMLHeadingElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<h4",
    null,
    className === undefined ? null : className,
    null,
    "</h4>",
  );
}
export function h5(className?: string): VNode<HTMLHeadingElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<h5",
    null,
    className === undefined ? null : className,
    null,
    "</h5>",
  );
}
export function h6(className?: string): VNode<HTMLHeadingElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<h6",
    null,
    className === undefined ? null : className,
    null,
    "</h6>",
  );
}
export function head(className?: string): VNode<HTMLHeadElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<head",
    null,
    className === undefined ? null : className,
    null,
    "</head>",
  );
}
export function header(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<header",
    null,
    className === undefined ? null : className,
    null,
    "</header>",
  );
}
export function hgroup(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<hgroup",
    null,
    className === undefined ? null : className,
    null,
    "</hgroup>",
  );
}
export function hr(className?: string): VNode<HTMLHRElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<hr",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function html(className?: string): VNode<HTMLHtmlElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<html",
    null,
    className === undefined ? null : className,
    null,
    "</html>",
  );
}
export function i(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<i",
    null,
    className === undefined ? null : className,
    null,
    "</i>",
  );
}
export function iframe(className?: string): VNode<HTMLIFrameElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<iframe",
    null,
    className === undefined ? null : className,
    null,
    "</iframe>",
  );
}
export function img(className?: string): VNode<HTMLImageElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<img",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function ins(className?: string): VNode<HTMLModElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<ins",
    null,
    className === undefined ? null : className,
    null,
    "</ins>",
  );
}
export function kbd(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<kbd",
    null,
    className === undefined ? null : className,
    null,
    "</kbd>",
  );
}
export function keygen(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<keygen",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function label(className?: string): VNode<HTMLLabelElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<label",
    null,
    className === undefined ? null : className,
    null,
    "</label>",
  );
}
export function legend(className?: string): VNode<HTMLLegendElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<legend",
    null,
    className === undefined ? null : className,
    null,
    "</legend>",
  );
}
export function li(className?: string): VNode<HTMLLIElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<li",
    null,
    className === undefined ? null : className,
    null,
    "</li>",
  );
}
export function link(className?: string): VNode<HTMLLinkElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<link",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function listing(className?: string): VNode<HTMLPreElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement,
    "<listing",
    null,
    className === undefined ? null : className,
    null,
    "</listing>",
  );
}
export function main(className?: string): VNode<HTMLMapElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<main",
    null,
    className === undefined ? null : className,
    null,
    "</main>",
  );
}
export function map(className?: string): VNode<HTMLMapElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<map",
    null,
    className === undefined ? null : className,
    null,
    "</map>",
  );
}
export function mark(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<mark",
    null,
    className === undefined ? null : className,
    null,
    "</mark>",
  );
}
export function menu(className?: string): VNode<HTMLMenuElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<menu",
    null,
    className === undefined ? null : className,
    null,
    "</menu>",
  );
}
export function meta(className?: string): VNode<HTMLMetaElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<meta",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function meter(className?: string): VNode<HTMLMeterElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<meter",
    null,
    className === undefined ? null : className,
    null,
    "</meter>",
  );
}
export function nav(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<nav",
    null,
    className === undefined ? null : className,
    null,
    "</nav>",
  );
}
export function nobr(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<nobr",
    null,
    className === undefined ? null : className,
    null,
    "</nobr>",
  );
}
export function noframes(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<noframes",
    null,
    className === undefined ? null : className,
    null,
    "</noframes>",
  );
}
export function noscript(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<noscript",
    null,
    className === undefined ? null : className,
    null,
    "</noscript>",
  );
}
export function object(className?: string): VNode<HTMLObjectElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<object",
    null,
    className === undefined ? null : className,
    null,
    "</object>",
  );
}
export function ol(className?: string): VNode<HTMLOListElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<ol",
    null,
    className === undefined ? null : className,
    null,
    "</ol>",
  );
}
export function optgroup(className?: string): VNode<HTMLOptGroupElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<optgroup",
    null,
    className === undefined ? null : className,
    null,
    "</optgroup>",
  );
}
export function option(className?: string): VNode<HTMLOptionElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<option",
    null,
    className === undefined ? null : className,
    null,
    "</option>",
  );
}
export function p(className?: string): VNode<HTMLParagraphElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<p",
    null,
    className === undefined ? null : className,
    null,
    "</p>",
  );
}
export function param(className?: string): VNode<HTMLParamElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<param",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function picture(className?: string): VNode<HTMLPictureElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<picture",
    null,
    className === undefined ? null : className,
    null,
    "</picture>",
  );
}
export function plaintext(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<plaintext",
    null,
    className === undefined ? null : className,
    null,
    "</plaintext>",
  );
}
export function pre(className?: string): VNode<HTMLPreElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.NewLineEatingElement,
    "<pre",
    null,
    className === undefined ? null : className,
    null,
    "</pre>",
  );
}
export function progress(className?: string): VNode<HTMLProgressElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<progress",
    null,
    className === undefined ? null : className,
    null,
    "</progress>",
  );
}
export function q(className?: string): VNode<HTMLQuoteElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<q",
    null,
    className === undefined ? null : className,
    null,
    "</q>",
  );
}
export function rt(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<rt",
    null,
    className === undefined ? null : className,
    null,
    "</rt>",
  );
}
export function ruby(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<ruby",
    null,
    className === undefined ? null : className,
    null,
    "</ruby>",
  );
}
export function s(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<s",
    null,
    className === undefined ? null : className,
    null,
    "</s>",
  );
}
export function samp(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<samp",
    null,
    className === undefined ? null : className,
    null,
    "</samp>",
  );
}
export function script(className?: string): VNode<HTMLScriptElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<script",
    null,
    className === undefined ? null : className,
    null,
    "</script>",
  );
}
export function section(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<section",
    null,
    className === undefined ? null : className,
    null,
    "</section>",
  );
}
export function select(className?: string): VNode<HTMLSelectElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<select",
    null,
    className === undefined ? null : className,
    null,
    "</select>",
  );
}
export function small(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<small",
    null,
    className === undefined ? null : className,
    null,
    "</small>",
  );
}
export function source(className?: string): VNode<HTMLSourceElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<source",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function span(className?: string): VNode<HTMLSpanElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<span",
    null,
    className === undefined ? null : className,
    null,
    "</span>",
  );
}
export function strike(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<strike",
    null,
    className === undefined ? null : className,
    null,
    "</strike>",
  );
}
export function strong(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<strong",
    null,
    className === undefined ? null : className,
    null,
    "</strong>",
  );
}
export function style(className?: string): VNode<HTMLStyleElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<style",
    null,
    className === undefined ? null : className,
    null,
    "</style>",
  );
}
export function sub(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<sub",
    null,
    className === undefined ? null : className,
    null,
    "</sub>",
  );
}
export function sup(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<sup",
    null,
    className === undefined ? null : className,
    null,
    "</sup>",
  );
}
export function table(className?: string): VNode<HTMLTableElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<table",
    null,
    className === undefined ? null : className,
    null,
    "</table>",
  );
}
export function tbody(className?: string): VNode<HTMLTableSectionElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<tbody",
    null,
    className === undefined ? null : className,
    null,
    "</tbody>",
  );
}
export function td(className?: string): VNode<HTMLTableDataCellElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<td",
    null,
    className === undefined ? null : className,
    null,
    "</td>",
  );
}
export function template(className?: string): VNode<HTMLTemplateElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<template",
    null,
    className === undefined ? null : className,
    null,
    "</template>",
  );
}
export function tfoot(className?: string): VNode<HTMLTableSectionElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<tfoot",
    null,
    className === undefined ? null : className,
    null,
    "</tfoot>",
  );
}
export function th(className?: string): VNode<HTMLTableHeaderCellElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<th",
    null,
    className === undefined ? null : className,
    null,
    "</th>",
  );
}
export function thead(className?: string): VNode<HTMLTableSectionElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<thead",
    null,
    className === undefined ? null : className,
    null,
    "</thead>",
  );
}
export function time(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<time",
    null,
    className === undefined ? null : className,
    null,
    "</time>",
  );
}
export function title(className?: string): VNode<HTMLTitleElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<title",
    null,
    className === undefined ? null : className,
    null,
    "</title>",
  );
}
export function tr(className?: string): VNode<HTMLTableRowElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<tr",
    null,
    className === undefined ? null : className,
    null,
    "</tr>",
  );
}
export function track(className?: string): VNode<HTMLTrackElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<track",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function tt(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<tt",
    null,
    className === undefined ? null : className,
    null,
    "</tt>",
  );
}
export function u(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<u",
    null,
    className === undefined ? null : className,
    null,
    "</u>",
  );
}
export function ul(className?: string): VNode<HTMLUListElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<ul",
    null,
    className === undefined ? null : className,
    null,
    "</ul>",
  );
}
export function wbr(className?: string): VNode<HTMLElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.VoidElement,
    "<wbr",
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function x_ms_webview(className?: string): VNode<MSHTMLWebViewElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<x-ms-webview",
    null,
    className === undefined ? null : className,
    null,
    "</x-ms-webview>",
  );
}
export function xmp(className?: string): VNode<HTMLPreElementProps | null> {
  return new VNode(
    VNodeFlags.Element,
    "<xmp",
    null,
    className === undefined ? null : className,
    null,
    "</xmp>",
  );
}

// Textarea / Input Elements:
export function textarea(className?: string): VNode<HTMLTextAreaElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.TextAreaElement | VNodeFlags.NewLineEatingElement,
    "<textarea",
    null,
    className === undefined ? null : className,
    null,
    "</textarea>",
  );
}
export function inputButton(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="button"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputCheckbox(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="checkbox"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputColor(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="color"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputDate(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="date"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputDatetime(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="datetime"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputDatetimeLocal(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="datetime-local"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputEmail(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="email"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputFile(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="file"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputHidden(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="hidden"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputImage(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="image"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputMonth(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="month"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputNumber(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="number"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputPassword(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="password"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputRadio(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="radio"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputRange(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="range"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputReset(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="reset"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputSearch(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="search"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputSubmit(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="submit"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputTel(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="tel"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputText(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputTime(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="time"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputUrl(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="url"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}
export function inputWeek(className?: string): VNode<HTMLInputElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.InputElement | VNodeFlags.VoidElement,
    `<input type="week"`,
    null,
    className === undefined ? null : className,
    null,
    null,
  );
}

// Media Elements:
export function audio(className?: string): VNode<HTMLAudioElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.MediaElement,
    "<audio",
    null,
    className === undefined ? null : className,
    null,
    "</audio>",
  );
}

export function video(className?: string): VNode<HTMLVideoElementProps | null> {
  return new VNode(
    VNodeFlags.Element | VNodeFlags.MediaElement,
    "<video",
    null,
    className === undefined ? null : className,
    null,
    "</video>",
  );
}

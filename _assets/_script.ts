function setElementClass(
  replace: boolean,
  selector: string,
  value: string,
  ignores?: string[],
): void {

  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
  for (const num in elements) {
    if (elements.hasOwnProperty(num)) {
      const cls: string = elements[num].className;

      if (ignores === undefined || ignores.indexOf(cls) < 0) {
        if (replace) {
          elements[num].className = value;
        } else {
          elements[num].classList.add(value);
        }
      }
    }
  }
}

class RSElem {
  public readonly selector: string;
  public readonly hi: string;
  public readonly lo: string;

  constructor(selector: string, hi: string, lo: string) {
    this.selector = selector;
    this.hi = hi;
    this.lo = lo;
  }
}

const WRS_ELEMENTS: ReadonlyArray<RSElem> = [
  new RSElem(
    ".pure-menu",
      "pure-menu pure-menu-horizontal",
      "pure-menu",
  ),
  new RSElem(
    ".navigation-header-subtitle",
      "pure-menu-list navigation-header-subtitle pull-end",
      "pure-menu-list navigation-header-subtitle",
  ),
  new RSElem(
    ".navigation-header",
      "navigation-header clearfix",
      "navigation-header",
  ),
];

function windowResized(): void {
  function resized(): void {
    const isWide: boolean = (document.documentElement.clientWidth >= 768);
    for (const elem of WRS_ELEMENTS) {
      setElementClass(true, elem.selector, isWide ? elem.hi : elem.lo);
    }
  }

  resized();
  window.addEventListener("resize", resized);
}

function backToTop(): void {
  const button: HTMLElement | null  = document.getElementById("btn-gototop");
  if (null === button) { return; }

  button.addEventListener("click", (): void => {
    function scroll(): void {
      const offset: number = window.pageYOffset;
      if (offset > 0) { setTimeout(scroll, 8); }
      window.scroll(0, offset - 512);
    }
    scroll();
  });
}

document.addEventListener("DOMContentLoaded", (): void => {
  setElementClass(false, "img", "pure-img");
  setElementClass(false, "table", "pure-table", ["lntable"]);

  windowResized();
  backToTop();
});

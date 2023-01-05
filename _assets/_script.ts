function setElementClass(
  selector: string,
  value: string,
  ignores?: string[],
): void {

  const elements: NodeListOf<HTMLElement> = document.querySelectorAll(selector);
  for (const num in elements) {
    if (elements.hasOwnProperty(num)) {
      const cls: string = elements[num].className;

      if (ignores === undefined || ignores.indexOf(cls) < 0) {
        elements[num].classList.add(value);
      }
    }
  }
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
  setElementClass("img", "pure-img");
  setElementClass("table", "pure-table", ["lntable"]);

  backToTop();
});

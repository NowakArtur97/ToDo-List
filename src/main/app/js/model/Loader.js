import DOMClasses from '../dom/DOMClasses';

export default class Loader {
  init() {
    const loaderAnimationDuration = 3300;

    const loaderContainer = document.createElement("div");
    loaderContainer.classList.add(DOMClasses.loader.container);

    const loader = document.createElement("div");
    loader.classList.add(DOMClasses.loader.main);

    const blueItem = document.createElement("div");
    blueItem.classList.add(DOMClasses.loader.item, DOMClasses.loader.blueItem);

    const yellowItem = document.createElement("div");
    yellowItem.classList.add(
      DOMClasses.loader.item,
      DOMClasses.loader.yellowItem
    );

    const redItem = document.createElement("div");
    redItem.classList.add(DOMClasses.loader.item, DOMClasses.loader.redItem);

    const purpleItem = document.createElement("div");
    purpleItem.classList.add(
      DOMClasses.loader.item,
      DOMClasses.loader.purpleItem
    );

    const loadingText = document.createElement("p");
    loadingText.classList.add(DOMClasses.loader.text);
    loadingText.innerText = "Loading........";

    blueItem.appendChild(loadingText);
    yellowItem.appendChild(loadingText.cloneNode(true));
    redItem.appendChild(loadingText.cloneNode(true));
    purpleItem.appendChild(loadingText.cloneNode(true));

    loader.appendChild(blueItem);
    loader.appendChild(yellowItem);
    loader.appendChild(redItem);
    loader.appendChild(purpleItem);

    loaderContainer.appendChild(loader);
    document.body.appendChild(loaderContainer);

    setTimeout(() => loaderContainer.remove(), loaderAnimationDuration);
  }
}

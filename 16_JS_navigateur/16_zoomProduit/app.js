class ProductViewer {
  /** @type {HTMLImageElement} */
  #mediumImage;
  /** @type {HTMLImageElement} */
  #largeImage;
  /** @type {string} */
  #largeImageSrc;
  /** @type {HTMLElement} */
  #thumbnailWrapper;
  /** @type {HTMLElement} */
  #zoomElement;
  /** @type {HTMLElement} */
  #magnifier;

  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.#mediumImage = element.querySelector(".js-image-medium");
    this.#thumbnailWrapper = element.querySelector(".js-images");
    this.#zoomElement = element.querySelector(".js-zoom");
    this.#largeImage = element.querySelector(".js-image-large");
    this.#magnifier = element.querySelector(".js-magnifier");

    const links = this.#thumbnailWrapper.querySelectorAll("a");
    this.#largeImageSrc = links[0].getAttribute("href");
    for (const link of links) {
      link.addEventListener("click", this.#onThumbnailClick.bind(this));
    }
    this.#mediumImage.addEventListener("mouseenter", this.#onEnter.bind(this));
    this.#mediumImage.addEventListener("mouseleave", this.#onLeave.bind(this));
    this.#largeImage.addEventListener("load", this.#updateRatio.bind(this));
  }

  /**
   * @param {PointerEvent} e
   */
  #onThumbnailClick(e) {
    e.preventDefault();
    this.#thumbnailWrapper.querySelector(".active")?.classList.remove("active");
    e.currentTarget.classList.add("active");
    const medium = e.currentTarget.dataset.medium;
    this.#mediumImage.src = medium;
    this.#largeImageSrc = e.currentTarget.getAttribute("href");
  }

  /**
   *
   * @param {PointerEvent} e
   */
  #onEnter(e) {
    this.#zoomElement.classList.add("active");
    const rect = this.#mediumImage.getBoundingClientRect();
    this.#largeImage.setAttribute("src", this.#largeImageSrc);
    this.#zoomElement.style.setProperty("--left", `${rect.x + rect.width}px`);
  }

  /**
   *
   * @param {PointerEvent} e
   */
  #onLeave(e) {
    this.#zoomElement.classList.remove("active");
  }

  #updateRatio() {
    const zoomRect = this.#zoomElement.getBoundingClientRect();
    const ratio = {
      width: zoomRect.width / this.#largeImage.width,
      height: zoomRect.height / this.#largeImage.height,
    };
    this.#magnifier.style.setProperty("width", `${ratio.width * 100}%`);
    this.#magnifier.style.setProperty("height", `${ratio.height * 100}%`);
  }
}

document.querySelectorAll(".js-product").forEach((el) => new ProductViewer(el));

class ProductViewer {
  /**
   * @param {HTMLElement} element
   */
  constructor(element) {
    const links = element.querySelectorAll(".js-images a");
    for (const link of links) {
      link.addEventListener("click", this.#onThumbnailClick.bind(this));
    }
  }

  /**
   * @param {PointerEvent} e
   */
  #onThumbnailClick(e) {
    e.preventDefault();
  }
}

document.querySelectorAll(".js-product").forEach((el) => new ProductViewer(el));

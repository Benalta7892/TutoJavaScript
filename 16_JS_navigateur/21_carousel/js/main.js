class Carousel {
  /**
   *
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {Object} options.slidesToScroll Nombre d'éléments à faire défiler
   * @param {Object} options.slidesVisible Nombre d'éléments visible dans un slide
   */
  constructor(element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );
    let children = [].slice.call(element.children);
    this.currentItem = 0;
    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel_container");
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel_item");
      item.appendChild(child);
      this.container.appendChild(item);
      return item;
    });
    this.setStyle();
    this.createNavigation();
  }

  /**
   * Applique les bonnes dimensions aux éléments du carousel
   */
  setStyle() {
    let ratio = this.items.length / this.options.slidesVisible;
    this.container.style.width = ratio * 100 + "%";
    this.items.forEach((item) => (item.style.width = 100 / this.options.slidesVisible / ratio + "%"));
  }

  createNavigation() {
    let nextButton = this.createDivWithClass("carousel_next");
    let prevButton = this.createDivWithClass("carousel_prev");
    this.root.appendChild(nextButton);
    this.root.appendChild(prevButton);
    nextButton.addEventListener("click", this.next.bind(this));
    prevButton.addEventListener("click", this.prev.bind(this));
  }

  next() {
    this.goToItem(this.currentItem + this.options.slidesToScroll);
  }

  prev() {
    this.goToItem(this.currentItem - this.options.slidesToScroll);
  }

  /**
   * Déplace le carousel vers l'élément ciblé
   * @param {number} index
   */
  goToItem(index) {
    this.currentItem = index;
  }

  /**
   * Crée une div et ajoute la classe className
   * @param {string} className
   * @returns {HTMLElement}
   */
  createDivWithClass(className) {
    let div = document.createElement("div");
    div.setAttribute("class", className);
    return div;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  new Carousel(document.querySelector("#carousel1"), {
    slidesVisible: 3,
  });
});

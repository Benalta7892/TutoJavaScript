class Carousel {
  /**
   * This callback type is called `requestCallback` and is displayed as a global symbol.
   *
   * @callback moveCallback
   * @param {number} index
   */

  /**
   *
   * @param {HTMLElement} element
   * @param {Object} options
   * @param {Object} [options.slidesToScroll=1] Nombre d'éléments à faire défiler
   * @param {Object} [options.slidesVisible=1] Nombre d'éléments visible dans un slide
   * @param {boolean} [options.loop=false] Doit-on boucler en fin de carousel ?
   * @param {boolean} [options.pagination=false] Doit-on afficher la pagination ?
   * @param {boolean} [options.navigation=true] Doit-on afficher la navigation ?
   */
  constructor(element, options = {}) {
    // Initialisation des variables de la classe Carousel
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
        loop: false,
        pagination: false,
        navigation: true,
      },
      options
    );
    let children = [].slice.call(element.children);
    this.isMobile = false;
    this.currentItem = 0;
    this.moveCallbacks = [];

    // Création de la structure du carousel - Modification du DOM
    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel_container");
    this.root.setAttribute("tabindex", "0");
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel_item");
      item.appendChild(child);
      this.container.appendChild(item);
      return item;
    });
    this.setStyle();
    if (this.options.navigation) {
      this.createNavigation();
    }
    if (this.options.pagination) {
      this.createPagination();
    }

    // Evenements
    this.moveCallbacks.forEach((cb) => cb(0));
    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize.bind(this));
    this.root.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight" || e.key === "Right") {
        this.next();
      } else if (e.key === "ArrowLeft" || e.key === "Left") {
        this.prev();
      }
    });
  }

  /**
   * Applique les bonnes dimensions aux éléments du carousel
   */
  setStyle() {
    let ratio = this.items.length / this.slidesVisible;
    this.container.style.width = ratio * 100 + "%";
    this.items.forEach((item) => (item.style.width = 100 / this.slidesVisible / ratio + "%"));
  }

  /**
   * Crée les boutons de navigation du carousel dans le DOM
   */
  createNavigation() {
    let nextButton = this.createDivWithClass("carousel_next");
    let prevButton = this.createDivWithClass("carousel_prev");
    this.root.appendChild(nextButton);
    this.root.appendChild(prevButton);
    nextButton.addEventListener("click", this.next.bind(this));
    prevButton.addEventListener("click", this.prev.bind(this));
    if (this.options.loop === true) {
      return;
    }
    this.onMove((index) => {
      if (index === 0) {
        prevButton.classList.add("carousel_prev-hidden");
      } else {
        prevButton.classList.remove("carousel_prev-hidden");
      }
      if (this.items[this.currentItem + this.slidesVisible] === undefined) {
        nextButton.classList.add("carousel_next-hidden");
      } else {
        nextButton.classList.remove("carousel_next-hidden");
      }
    });
  }

  /**
   * Crée la pagination du carousel dans le DOM
   * */
  createPagination() {
    let pagination = this.createDivWithClass("carousel_pagination");
    let buttons = [];
    this.root.appendChild(pagination);
    for (let i = 0; i < this.items.length; i = i + this.options.slidesToScroll) {
      let button = this.createDivWithClass("carousel_pagination_button");
      button.addEventListener("click", () => this.goToItem(i));
      pagination.appendChild(button);
      buttons.push(button);
    }
    this.onMove((index) => {
      let activeButton = buttons[Math.floor(index / this.options.slidesToScroll)];
      if (activeButton) {
        buttons.forEach((button) => button.classList.remove("carousel_pagination_button-active"));
        activeButton.classList.add("carousel_pagination_button-active");
      }
    });
  }

  /**
   * Déplace le carousel vers l'élément suivant
   */
  next() {
    this.goToItem(this.currentItem + this.slidesToScroll);
  }

  /**
   * Déplace le carousel vers l'élément précédent
   */
  prev() {
    this.goToItem(this.currentItem - this.slidesToScroll);
  }

  /**
   * Déplace le carousel vers l'élément ciblé
   * @param {number} index
   */
  goToItem(index) {
    if (index < 0) {
      if (this.options.loop) {
        index = this.items.length - this.slidesVisible;
      } else {
        return;
      }
    } else if (
      index >= this.items.length ||
      (this.items[this.currentItem + this.slidesVisible] === undefined && index > this.currentItem)
    ) {
      if (this.options.loop) {
        index = 0;
      } else {
        return;
      }
    }
    let translateX = (index * -100) / this.items.length;
    this.container.style.transform = "translate3d(" + translateX + "%, 0, 0)";
    this.currentItem = index;
    this.moveCallbacks.forEach((cb) => cb(index));
  }

  /**
   * Déplace le container pour afficher le prochain élément
   * @param {moveCallback} cb
   */
  onMove(cb) {
    this.moveCallbacks.push(cb);
  }

  onWindowResize() {
    let mobile = window.innerWidth < 800;
    if (mobile !== this.isMobile) {
      this.isMobile = mobile;
      this.setStyle();
      this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    }
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

  /**
   * Retourne le nombre d'éléments à faire défiler en fonction de la taille de l'écran (responsive)
   * @returns {number}
   */
  get slidesToScroll() {
    return this.isMobile ? 1 : this.options.slidesToScroll;
  }

  /**
   * Retourne le nombre d'éléments visibles en fonction de la taille de l'écran (responsive)
   * @returns {number}
   */
  get slidesVisible() {
    return this.isMobile ? 1 : this.options.slidesVisible;
  }
}

let onReady = function () {
  new Carousel(document.querySelector("#carousel1"), {
    slidesVisible: 3,
    slidesToScroll: 2,
    loop: true,
  });

  new Carousel(document.querySelector("#carousel2"), {
    slidesVisible: 2,
    slidesToScroll: 2,
    pagination: true,
    loop: true,
  });

  new Carousel(document.querySelector("#carousel3"));
};

if (document.readyState !== "loading") {
  onReady();
}
document.addEventListener("DOMContentLoaded", onReady);

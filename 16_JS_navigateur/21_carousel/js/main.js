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
   * @param {boolean} [options.infinite=false] Doit-on boucler en fin de carousel ?
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
        infinite: false,
      },
      options
    );
    if (this.options.loop && this.options.infinite) {
      throw new Error("Un carousel ne peut être à la fois en boucle et infini");
    }
    let children = [].slice.call(element.children);
    this.isMobile = false;
    this.currentItem = 0;
    this.moveCallbacks = [];
    this.offset = 0;

    // Création de la structure du carousel - Modification du DOM
    this.root = this.createDivWithClass("carousel");
    this.container = this.createDivWithClass("carousel_container");
    this.root.setAttribute("tabindex", "0");
    this.root.appendChild(this.container);
    this.element.appendChild(this.root);
    this.items = children.map((child) => {
      let item = this.createDivWithClass("carousel_item");
      item.appendChild(child);
      return item;
    });
    if (this.options.infinite) {
      this.offset = this.options.slidesVisible + this.options.slidesToScroll;
      if (this.offset > children.length) {
        console.log("Vous n'avez pas assez d'éléments dans le carousel", element);
      }
      this.items = [
        ...this.items.slice(this.items.length - this.offset).map((item) => item.cloneNode(true)),
        ...this.items,
        ...this.items.slice(0, this.offset).map((item) => item.cloneNode(true)),
      ];
      this.goToItem(this.offset, false);
    }
    this.items.forEach((item) => this.container.appendChild(item));
    this.setStyle();
    if (this.options.navigation) {
      this.createNavigation();
    }
    if (this.options.pagination) {
      this.createPagination();
    }

    // Evenements
    this.moveCallbacks.forEach((cb) => cb(this.currentItem));
    this.onWindowResize();
    window.addEventListener("resize", this.onWindowResize.bind(this));
    this.root.addEventListener("keyup", (e) => {
      if (e.key === "ArrowRight" || e.key === "Right") {
        this.next();
      } else if (e.key === "ArrowLeft" || e.key === "Left") {
        this.prev();
      }
    });
    if (this.options.infinite) {
      this.container.addEventListener("transitionend", this.resetInfinite.bind(this));
    }
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
    for (let i = 0; i < this.items.length - 2 * this.offset; i = i + this.options.slidesToScroll) {
      let button = this.createDivWithClass("carousel_pagination_button");
      button.addEventListener("click", () => this.goToItem(i + this.offset));
      pagination.appendChild(button);
      buttons.push(button);
    }
    this.onMove((index) => {
      let count = this.items.length - 2 * this.offset;
      let activeButton = buttons[Math.floor(((index - this.offset) % count) / this.options.slidesToScroll)];
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
   * @param {boolean} [animation=true]
   */
  goToItem(index, animation = true) {
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
    if (animation === false) {
      this.container.style.transition = "none";
    }
    this.container.style.transform = "translate3d(" + translateX + "%, 0, 0)";
    this.container.offsetHeight; // Force le repaint
    if (animation === false) {
      this.container.style.transition = "";
    }
    this.currentItem = index;
    this.moveCallbacks.forEach((cb) => cb(index));
  }

  /**
   * Déplace le container pour donner l'illusion d'un carousel infini
   */
  resetInfinite() {
    if (this.currentItem <= this.options.slidesToScroll) {
      this.goToItem(this.currentItem + (this.items.length - 2 * this.offset), false);
    } else if (this.currentItem >= this.items.length - this.offset) {
      this.goToItem(this.currentItem - (this.items.length - 2 * this.offset), false);
    }
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
    slidesToScroll: 1,
    loop: true,
    // infinite: true,
    pagination: true,
  });

  new Carousel(document.querySelector("#carousel2"), {
    slidesVisible: 3,
    slidesToScroll: 3,
    infinite: true,
    pagination: true,
  });

  new Carousel(document.querySelector("#carousel3"));
};

if (document.readyState !== "loading") {
  onReady();
}
document.addEventListener("DOMContentLoaded", onReady);

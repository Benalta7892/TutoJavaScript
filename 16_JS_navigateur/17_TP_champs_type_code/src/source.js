/**
 * Elément web personnalisé
 * Plus d'info : https://grafikart.fr/tutoriels/web-component-1201
 */
class CodeInput extends HTMLElement {
  /** @var {HTMLInputElement[]} */
  #inputs = [];

  /** @var {HTMLInputElement | null} */
  #hiddenInput = null;

  static get observedAttributes() {
    return ["value"];
  }

  connectedCallback() {
    const legend = this.getAttribute("legend") ?? "Entrez votre code";
    const name = this.getAttribute("name") ?? "";
    const size = parseInt(this.getAttribute("size") ?? "6", 10);
    const value = this.getAttribute("value") ?? "";
    this.innerHTML = `
      <fieldset>
        <legend>${legend}</legend>
        <div class="code-inputs">
          ${Array.from(
            { length: size },
            (_, k) => `<input
            type="text"
            inputmode="numeric"
            aria-label="Chiffre ${k}"
            pattern="[0-9]{1}"
            value="${value.slice(k, k + 1)}"
            required
            />`
          ).join("")}
        </div>
        <input type="hidden" name="${name}" value="${value}" />
      </fieldset>`;
    this.#hiddenInput = this.querySelector("input[type='hidden']");
    this.#inputs = Array.from(this.querySelectorAll("input[type='text']"));
    this.#inputs.forEach((input) => {
      input.addEventListener("input", this.#onInput.bind(this));
      input.addEventListener("keydown", this.#onKeyDown.bind(this));
    });
  }

  /**
   * Code exécuté lorsqu'un attribut change
   *
   * @param name Nom de l'attribut
   * @param oldValue Ancienne valeur
   * @param newValue Nouvelle valeur
   */
  attributeChangedCallback(name, oldValue, newValue) {}

  /**
   * @param {InputEvent} e
   */
  #onInput(e) {
    e.currentTarget.value = e.currentTarget.value.replaceAll(/\D/g, "").slice(0, 1);
    this.#updateHiddenInput();
  }

  /**
   * @param {KeyboardEvent} e
   */
  #onKeyDown(e) {
    if (e.key.match(/\d/)) {
      e.preventDefault();
      e.currentTarget.value = e.key;
      const nextInput = e.currentTarget.nextElementSibling;
      if (nextInput) {
        nextInput.focus();
      }
      this.#updateHiddenInput();
    }

    if (e.key === "Backspace" && e.currentTarget.value === "") {
      const previousInput = e.currentTarget.previousElementSibling;
      if (!previousInput) {
        return;
      }
      previousInput.value = "";
      previousInput.focus();
      this.#updateHiddenInput();
    }
  }

  #updateHiddenInput() {
    this.#hiddenInput.value = this.#inputs.map((input) => input.value).join("");
  }
}

customElements.define("code-input", CodeInput);

/**
 * Elément web personnalisé
 * Plus d'info : https://grafikart.fr/tutoriels/web-component-1201
 */
class CodeInput extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }

  connectedCallback() {
    const legend = this.getAttribute("legend") ?? "Entrez votre code";
    const name = this.getAttribute("name") ?? "";
    const size = parseInt(this.getAttribute("size") ?? "6", 10);
    this.innerHTML = `
      <fieldset>
        <legend>${legend}</legend>
        <div class="code-inputs">
          ${Array.from(
            { length: size },
            (_, k) => `<input type="text" inputmode="numeric" aria-label="Chiffre ${k}" pattern="[0-9]{1}" />`
          ).join("")}
        </div>
        <input type="hidden" name"${name}" />
      </fieldset>`;
    const inputs = this.querySelectorAll("input[type='text']");
    inputs.forEach((input) => {
      input.addEventListener("input", this.#onInput.bind(this));
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

  #onInput(e) {
    console.log(e);
  }
}

customElements.define("code-input", CodeInput);

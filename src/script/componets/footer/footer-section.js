class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="bg-primary d-flex justify-content-center ">
            <p class="text-center fw-bold text-white">Dibuat dengan 🧡 Rikoairlanramadhan in 2022</p>
        </div>
    `;
  }
}

customElements.define("footer-section", FooterSection);

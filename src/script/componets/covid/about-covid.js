class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class = "container mt-5 min-vh-100 d-flex align-items-center">
              <div class = "row d-flex justify-content-center">
                <h1 class="mb-5 text-center fw-bold">What is Covid-19 ?</h1>
                <p class="text-center">
                  Corona Virus Disease 2019 atau yang biasa disingkat COVID-19 adalah penyakit menular 
                  yang disebabkan oleh SARS-CoV-2, salah satu jenis koronavirus. Penderita COVID-19 dapat mengalami demam, 
                  batuk kering, dan kesulitan bernafas.
                </p>
                <div>
                </div>
                <div class="d-flex justify-content-end">
                  <p>(Di kutip dari sumber: corona.kendalkab.go.id)</p>
                </div>
              </div>
            </div>

        `;
  }
}

customElements.define("about-covid", About);

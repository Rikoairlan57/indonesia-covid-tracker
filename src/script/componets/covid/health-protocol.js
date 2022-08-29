import masker from "../../../assets/images/memakai-masker.png";
import cuciTangan from "../../../assets/images/mencuci-tangan.png";
import menjagaJarak from "../../../assets/images/menjaga-jarak.png";
import jauhiKerumuna from "../../../assets/images/jauhi-kerumunan.jpg";
import kurangiMobilitas from "../../../assets/images/kurangi-mobilitas.jpg";

class HealthProtocol extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container min-vh-100">
            <h1 class="text-center fw-bold">Apa itu Protocol 5M ? </h1>
            <div class="row d-flex text-center justify-content-evenly">
                <div class="col-12 col-md-6 col-lg-4 mt-5">
                    <div class="card">
                        <img src="${masker}" alt="masker" />
                        <div class="card-body">
                            <h4>Memakai masker</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-5">
                    <div class="card">
                        <img src="${cuciTangan}" alt="cuci tangan" />
                        <div class="card-body">
                            <h4>Mencuci Tangan</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 mt-5">
                    <div class="card">
                        <img src="${menjagaJarak}" alt="menjaga jarak" />
                        <div class="card-body">
                            <h4>Menjaga Jarak</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 my-5">
                    <div class="card">
                        <img src="${jauhiKerumuna}" alt="jauhi kerumunan" />
                        <div class="card-body">
                            <h4>Menjauhi Kerumunan</h4>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-4 my-5">
                    <div class="card">
                        <img src="${kurangiMobilitas}" alt="kurangi mobilitas" />
                        <div class="card-body">
                            <h4>Mengurangi Mobilitas</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}

customElements.define("health-protocol", HealthProtocol);

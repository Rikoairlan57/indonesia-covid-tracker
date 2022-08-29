import indonesia from "../../../assets/images/indonesia.png";

class PandemicCovid extends HTMLElement {
  set pandemicItemValue(item) {
    this._pandemicItemValue = item;
    this.render();
  }

  render() {
    this.innerHTML = `                    
    <div class="container mt-5 min-vh-100">
        <div class =" d-flex justify-content-center mb-5">
            <img src="${indonesia}" height="250" width="450" alt="indonesia-flag" />
        </div>
        <div class="row d-flex justify-content-around">
            <div class="col-lg-8">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-4 text-white">
                        <div class="card text-center bg-recover">
                            <div class="card-body">
                            <h4 class="card-title fw-bold">${this._pandemicItemValue.recovered.value}</h4>
                            <p class="card-text fw-bold">Recorvered</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 my-4 my-lg-0">
                        <div class="card text-center bg-confirm">
                            <div class="card-body">
                            <h4 class="card-title fw-bold">${this._pandemicItemValue.confirmed.value}</h4>
                            <p class="card-text fw-bold">Confirmed</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-4 text-white">
                        <div class="card text-center bg-deads">
                            <div class="card-body">
                            <h4 class="card-title fw-bold">${this._pandemicItemValue.deaths.value}</h4>
                            <p class="card-text fw-bold">Deads</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center mt-5">
                <p class="text-center">Data ini terakhir di update pada : ${this._pandemicItemValue.lastUpdate} menurut sumbernya</p>
            </div>
        </div>
    </div>`;
  }
}

customElements.define("pandemic-covid", PandemicCovid);

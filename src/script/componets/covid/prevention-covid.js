class PreventionCovid extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class = "container mt-5 min-vh-100 d-flex align-items-center">
        <div class = "row d-flex justify-content-center">
          <h1 class="mb-5 text-center fw-bold">How can we prevent the spread of Covid 19 ? </h1>
          <p class="text-center">
           Tindakan pencegahan untuk mengurangi kemungkinan infeksi antara lain tetap berada di rumah, menghindari bepergian 
          dan beraktivitas di tempat umum, sering mencuci tangan dengan sabun dan air, tidak menyentuh mata, hidung, atau mulut dengan tangan yang tidak dicuci. Segera hubungi 
          Hotline jika Anda mengalami gejala atau memiliki riwayat perjalanan/berpergian dari Negara yang terjangkit."Hal yang paling utama adalah
          harus mematuhi protokol yang sudah dibuat yaitu selalu menerapkan 5M"
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

customElements.define("prevention-covid", PreventionCovid);

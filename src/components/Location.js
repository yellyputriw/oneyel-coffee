class Locations extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */ `
      <article id="location" class="spy">
        <div class="judul">
          <h2>Location.</h2>
        </div>
        <div class="loc">
          <div class="lc-img">
            <img src="/images/in-store.png" alt="Location Image" />
          </div>
          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253497.13516734913!2d107.50307079265457!3d-6.90342901505421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Bandung%20City%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1626393190033!5m2!1sen!2sid"
              width="400"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div class="loc-text">
            <p>
              <span><img src="/icon/map.svg" alt="location icon" /></span>
              Jl. Melati No. 278, Bandung, Jawa Barat 40925
            </p>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('coffee-location', Locations);

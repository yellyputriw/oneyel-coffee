class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div id="content">
      <div id="home" class="spy">
        <!-- Main Image -->
        <section class="banner"></section>
        <div class="containers">
          <div class="col">
            <h1>Oneyel Coffee</h1>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('coffee-hero', Hero);

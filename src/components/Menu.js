class Menu extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <article id="menu" class="spy">
        <!-- Title -->
        <div class="judul">
          <h2>Menu.</h2>
        </div>
        <!-- Menu Image -->
        <div class="menu">
          <div class="menu-img">
            <img src="/images/menu-a.png" alt="Menu-A Image" />
            <p>Coffee</p>
          </div>
          <div class="menu-img">
            <img src="/images/menu-b.png" alt="Menu-B Image" />
            <p>Non-Coffee</p>
          </div>
          <div class="menu-img">
            <img src="/images/menu-c.png" alt="Menu-C Image" />
            <p>Dessert</p>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('coffee-menu', Menu);

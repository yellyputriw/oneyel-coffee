class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <header>
        <nav>
          <div class="container">
            <!-- Logo -->
            <a class="logo" href="#">
              <img src="/icon/logo.svg" class="logo-img" alt="Logo Coffee" />
            </a>
            <!-- Hamburger Button -->
            <button class="nav-toggle effect" type="button" aria-label="Toggle navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <!-- Navigasi -->
            <div id="wrapper">
              <ul>
                <li>
                  <a class="nav-link active" href="#home">Home</a>
                </li>
                <li>
                  <a class="nav-link" href="#story">Story</a>
                </li>
                <li>
                  <a class="nav-link" href="#menu">Menu</a>
                </li>
                <li>
                  <a class="nav-link" href="#location">Location</a>
                </li>
                <li>
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('coffee-navbar', Navbar);

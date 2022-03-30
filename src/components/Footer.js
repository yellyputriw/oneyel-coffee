class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */ `
      <footer>
        <p>Copyright &#169; 2021 Oneyel Coffee</p>
      </footer>
    `;
  }
}

customElements.define('coffee-footer', Footer);

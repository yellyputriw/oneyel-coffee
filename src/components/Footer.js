class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */ ` <p>Copyright &#169; 2021 Oneyel Coffee</p> `;
  }
}

customElements.define('oc-footer', Footer);

class Contact extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* HTML */ `
      <article id="contact" class="spy">
        <!-- Title -->
        <div class="judul">
          <h2>Contact.</h2>
        </div>
        <div class="container-ctc">
          <!-- Left -->
          <div class="contact-left">
            <!-- Text -->
            <div class="text">
              <p>
                <span><img src="/icon/phone.svg" alt="icon phone" /></span>+62881-0227-3270-8
              </p>
              <p>
                <span><img src="/icon/mail.svg" alt="icon message" /></span>coffee@oneyel.com
              </p>
              <p>
                <span><img src="/icon/instagram.svg" alt="icon instagram" /></span>@oneyel_coffee
              </p>
            </div>
            <!-- Ojek Image -->
            <div class="ojek-logo">
              <img src="/images/gofood.png" alt="GoFood Logo" />
              <img src="/images/grabfood.png" alt="GrabFood Logo" />
            </div>
          </div>
          <!-- Right -->
          <div class="contact-right">
            <!-- Input -->
            <div class="input">
              <label for="mail">Enter your E-mail and get special voucher!</label>
              <form action="#">
                <input type="email" id="mail" required />
                <input type="submit" value="I Want!" />
              </form>
            </div>
          </div>
        </div>
      </article>
    `;
  }
}

customElements.define('coffee-contact', Contact);

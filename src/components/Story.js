class Story extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <article id="story" class="spy">
      <!-- Text -->
      <div class="story-text">
        <h2>Story.</h2>
        <p>Oneyel Coffee was founded in August 2020 in a simple rented building. Oneyel Coffee focuses on being a comfortable place to work and hangout for everyone without forgetting to provide the best service for all visitors.</p>
      </div>
      <!-- Image -->
      <div class="story-img">
        <img src="/images/story.png" alt="Story Image" />
      </div>
    </article>
    `;
  }
}

customElements.define('oc-story', Story);

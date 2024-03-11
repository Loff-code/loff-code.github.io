const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<style> @import "/Style/Header.css" </style>

  <header>
    <div class="blog-header">
      <a href="/index.html" class="logo-link">
        <img class="logo-img" src="/images/Logo.png" alt="Logo" />
      </a>

      <div class="dropdown">
        <button class="dropbtn"></button>
        <div class="dropdown-content">
          <a class="download" href="/Pages/Downloads.html">Flight Scrapers</a>
          <a class="next" href="/Pages/FuckU.html">Fuck You Dudee</a>
          <a class="converter" href="/Pages/Link2Down.html">Convert Download Link</a>
          <a class="converter" href="/Pages/UnitConverter.html">Convert Units</a>
          <a class="next" href="/Projects/RPS/Play.html">Rock, Paper, Scissor</a>
        
          </div>
      </div>
    </div>
  </header>
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content.cloneNode(true));
  }
}

customElements.define("header-component", Header);

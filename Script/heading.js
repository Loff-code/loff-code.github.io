const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
  <style>
    @import url("/loffy.dk/Style/header.css");
  </style>

  <header>
    <div class="blog-header">
      <a href="/loffy.dk/index.html" class="logo-link">
        <img class="logo-img" src="/loffy.dk/images/Logo.png" alt="Logo" />
      </a>

      <div class="dropdown">
        <button class="dropbtn"></button>
        <div class="dropdown-content">
          <a class="download" href="/loffy.dk/Pages/Downloads.html">Flight Scrapers</a>
          <a class="next" href="/loffy.dk/Pages/FuckU.html">Fuck You Dudee</a>
          <a class="converter" href="/loffy.dk/Pages/Link2Down.html">Convert Download Link</a>
          <a class="converter" href="/loffy.dk/Pages/UnitConverter.html">Convert Units</a>
          <a class="next" href="/loffy.dk/Pages/Form_upload.php">Upload Form</a>
          <a class="next" href="/view_data.php">View Data</a>
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

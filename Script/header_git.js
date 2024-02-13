const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<link rel="stylesheet" href="/loffy.dk/Style/header.css" />
   

  <header>
  <div class="blog-header">
  <a href="/loffy.dk/index.html" class="logo-link">
    <img class="logo-img" src="/loffy.dk/images/Logo.png" alt="Logo" />
  </a>

  <div class="dropdown">
    <button class="dropbtn"></button>
    <div class="dropdown-content">
      <a class="download" href="/Pages/Downloads.html">Flight Scrapers</a>
      <a class="next" href="/Pages/FuckU.html">Fuck You Dudee</a>
      <a class="converter" href="/Pages/Link2Down.html">Convert Download Link</a>
      <a class="converter" href="/Pages/UnitConverter.html"
        >Convert Units</a
      >
      <a class="next" href="/Pages/Poster.html">Post .csv file</a>
      <a class="Manwha" href="/Pages/Manwha.html">Manwha</a>
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

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
 <style>
 
.blog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #212e36;
    padding: 0px;
    text-align: center;
    color: #fff;
  }
  
  
  .blog-header a.logo-link {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    margin-right: 10px;
    padding: 0%;
  }
  
  .blog-header a.logo-link img {
    width: 70px; /* Adjust the width to match the heading font size */
    height: auto; /* Maintain aspect ratio */
    border-radius: 50px;
    margin-right: 10px;
  }
  
  .blog-header a.logo-link:hover {
    background: none;
  }
  
/* Styles for the dropdown menu */
.dropdown {
  display: inline-block;
}
.dropbtn {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #3498db;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  background-position: 8px center;
  background-repeat: no-repeat;
  padding-left: 32px;
  background-size: 16px 16px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: transparent;
  min-width: 160px;
  right: 4px; /* Align the dropdown to the right edge of the button */
  z-index: 1;
}

.dropdown-content a {
  color: #fff;
  padding: 12px 16px;
  display: block;
  text-decoration: none;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown content when hovering over the dropdown button */
.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a.download {
  background-image: url("../Icons/downloads.png");
}

.dropdown-content a.converter {
  background-image: url("../Icons/Converter.png");
}

.dropdown-content a.next {
  background-image: url("../Icons/Next.png");
}

.dropdown-content a.email {
  background-image: url("../Icons/Email.png");
  background-size: 20px 16px;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

</style>


  <header>
  <div class="blog-header">
  <a href="/index.html" class="logo-link">
    <img class="logo-img" src="/images/Logo.png" alt="Logo" />
  </a>

  <div class="dropdown">
    <button class="dropbtn">Menu</button>
    <div class="dropdown-content">
      <a href="/Pages/Downloads.html">Flight Scrapers</a>
      <a href="/Pages/FuckU.html">Fuck You Dudee</a>
      <a href="/Pages/Link2Down.html">Convert download link</a>
      <a href="/Pages/UnitConverter.html"
        >Convert Between Metric and Imperial</a
      >
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
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);
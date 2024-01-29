const headerTemplate = document.createElement("template");

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
  padding: 20px 20px;
  text-decoration: none;
  color: #fff;
  background-color: transparent;
  border-radius: 18px;
  border: none;
  transition: background-color 0.3s ease;
  background-position: center;
  background-repeat: no-repeat;

  background-size: 25px 25px;
  background-image: url("/Icons/Menu.png"); 
}


button.dropbtn:hover {
  background: #2980b9; /* Updated hover background color */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px 25px;
  background-image: url("/Icons/Menu.png"); 
}

button.dropbtn:active {
  background: #f4579; /* Updated active background color */
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 2px 3px -1px #b5b5b5;
  background-size: 25px 25px;
  background-image: url("/Icons/Menu.png"); 
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
  padding: 12px 26px;
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

.dropdown-content a:hover {
  background-color: #ddd;
}
a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  border-radius: 50px;
  transition: background-color 0.3s ease;
  background-position: 5px center;
  background-repeat: no-repeat;
  padding-left: 36px;
  background-size: 16px 16px;
}

a.download {
  background-image: url("/Icons/downloads.png");
}
a.converter {
  background-image: url("/Icons/Converter.png");
}

a.next {
  background-image: url("/Icons/Next.png");
}

a.email {
  background-image: url("/Icons/Email.png");
  background-size: 20px 16px;
}

</style>


  <header>
  <div class="blog-header">
  <a href="/" class="logo-link">
    <img class="logo-img" src="/images/Logo.png" alt="Logo" />
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

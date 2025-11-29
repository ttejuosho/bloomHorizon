class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 50;
          background: white;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
        }
        .logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: #09537bff;
          text-decoration: none;
        }
        .logo-icon {
          color: #09537bff;
          margin-right: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        a {
          color: #09537bff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          position: relative;
        }
        a:hover {
          color: #0d6b9dff;
        }
        a.active:after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #09537bff;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #09537bff;
          font-size: 1.5rem;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .nav-links.active {
            display: flex;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          <i class="fas fa-leaf logo-icon"></i>
          Bloom Horizon
        </a>
        <button class="mobile-menu-btn" id="mobileMenuBtn">
          <i class="fas fa-bars"></i>
        </button>
        <div class="nav-links" id="navLinks">
          <a href="#serviceRequestSection">Services</a>
          <a href="#about">About</a>
          <a href="#contactSection" class="active">Contact</a>
          <a href="#serviceForm" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">Get Quote</a>
        </div>
      </nav>
    `;

    // Mobile menu toggle
    const mobileMenuBtn = this.shadowRoot.getElementById("mobileMenuBtn");
    const navLinks = this.shadowRoot.getElementById("navLinks");

    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}
customElements.define("custom-header", CustomHeader);

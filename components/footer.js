class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <!-- Load Font Awesome inside Shadow DOM -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
      />
      <style>
        :host {
          display: block;
          background: #09537bff;
          color: white;
          padding: 2rem 0;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .footer-logo-icon {
          color: #ffffff;
          margin-right: 0.5rem;
        }
        .footer-description {
          max-width: 300px;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .footer-column h3 {
          font-size: 1.125rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: white;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-column li {
          margin-bottom: 0.5rem;
        }
        .footer-column a {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-column a:hover {
          color: #0fa0ee;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          color: white;
          transition: background 0.3s;
          font-size: 1.2rem;
        }
        .social-links a:hover {
          background: rgba(255,255,255,0.2);
          color: #0fa0ee;
        }
        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #ffffff;
          font-size: 0.875rem;
        }
        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 2fr repeat(3, 1fr);
          }
        }
      </style>

      <div class="footer-content">
        <div class="footer-about">
          <div class="footer-logo">
            <i class="fas fa-leaf footer-logo-icon"></i>
            Bloom Horizon Services
          </div>
          <p class="footer-description">
            Founded with a commitment to excellence in student transportation, we provide dependable shuttle services that families and schools can trust.
          </p>
          <div class="social-links">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h3>Services</h3>
            <ul>
              <li>School Shuttle Services</li>
              <li>Private Transportation</li>
              <li>Goods Transportation</li>
              <li>General Logistics</li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#heroSection">About Us</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#contactSection">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div class="copyright">
          © ${new Date().getFullYear()} Bloom Horizon Services. All rights reserved.
        </div>
      </div>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);

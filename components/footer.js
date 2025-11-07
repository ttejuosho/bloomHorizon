class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #166534;
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
          color: #86efac;
          margin-right: 0.5rem;
        }
        .footer-description {
          max-width: 300px;
          color: #d1fae5;
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
          color: #d1fae5;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-column a:hover {
          color: white;
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
        }
        .social-links a:hover {
          background: rgba(255,255,255,0.2);
        }
        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: #d1fae5;
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
            Delivering sustainable transportation solutions for a greener tomorrow.
          </p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <div class="footer-column">
            <h3>Services</h3>
            <ul>
              <li><a href="#">School Shuttle Services</a></li>
              <li><a href="#">Private Transportation</a></li>
              <li><a href="#">Goods Transport</a></li>
              <li><a href="#">Logistics</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
              <li><a href="#">News</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Tracking</a></li>
              <li><a href="#">Terms</a></li>
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

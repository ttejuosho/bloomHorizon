class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="text-2xl font-bold text-[#0fa0ee]">
            Bloom Horizon
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobileMenuBtn" class="md:hidden text-3xl text-[#0fa0ee]">
            <i class="fas fa-bars"></i>
          </button>

          <!-- Desktop Nav -->
          <ul class="hidden md:flex space-x-8 text-[#0fa0ee] font-semibold">
            <li><a href="#heroSection" class="hover:text-[#0d8acb]">Home</a></li>
            <li><a href="#servicesSection" class="hover:text-[#0d8acb]">Services</a></li>
            <li><a href="#serviceRequestSection" class="hover:text-[#0d8acb]">Request</a></li>
            <li><a href="#contactSection" class="hover:text-[#0d8acb]">Contact</a></li>
          </ul>
        </nav>

        <!-- MOBILE MENU -->
        <div id="mobileMenu"
          class="hidden md:hidden bg-white shadow-lg border-t border-gray-100">
          <ul class="flex flex-col text-[#0fa0ee] font-semibold p-4 space-y-4">
            <li><a href="#heroSection">Home</a></li>
            <li><a href="#servicesSection">Services</a></li>
            <li><a href="#serviceRequestSection">Request</a></li>
            <li><a href="#contactSection">Contact</a></li>
          </ul>
        </div>
      </header>

      <script>
        document.getElementById("mobileMenuBtn").onclick = () => {
          document.getElementById("mobileMenu").classList.toggle("hidden");
        };
      </script>
    `;
  }
}

customElements.define("custom-header", CustomHeader);

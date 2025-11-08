// Import React and ReactDOM for the UserTable component
// import React from "react";
// import ReactDOM from "react-dom/client";
// import UserTable from "./components/UserTable.js";

// Initialize React component
// const tableContainer = document.getElementById("user-table-container");
// if (tableContainer) {
//   const root = ReactDOM.createRoot(tableContainer);
//   root.render(
//     <React.StrictMode>
//       <UserTable />
//     </React.StrictMode>
//   );
// }

document.addEventListener("DOMContentLoaded", () => {
  // Email interaction tracking (would be implemented in real email service)
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      // In a real implementation, this would track link clicks
      console.log(`Link clicked: ${e.target.href}`);
    });
  });

  // Animation for elements
  const animatedElements = document.querySelectorAll(".flex.items-start");
  animatedElements.forEach((el, index) => {
    el.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    el.style.opacity = "0";
  });
});

// Contact form submission handling
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector(".contact-form-submit-btn");
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";
  formStatus.textContent = "";
  formStatus.className = "form-status";

  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mwpaevkb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formStatus.textContent =
        "Thank you for reaching out. We'll be in touch soon.";
      formStatus.className = "form-status success";
      form.reset();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    formStatus.textContent =
      "Something went wrong. Please try again or email us directly.";
    formStatus.className = "form-status error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Submit";
  }
});

// Service Request form submission handling
const serviceRequestForm = document.getElementById("serviceRequestForm");
const serviceRequestFormStatus = document.getElementById(
  "serviceRequestFormStatus"
);

serviceRequestForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const srSubmitBtn = serviceRequestForm.querySelector(
    ".service-request-form-submit-btn"
  );
  srSubmitBtn.disabled = true;
  srSubmitBtn.textContent = "Sending...";
  serviceRequestFormStatus.textContent = "";
  serviceRequestFormStatus.className = "sr-form-status";

  const formData = new FormData(serviceRequestForm);

  try {
    const response = await fetch("https://formspree.io/f/mwpaevkb", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      serviceRequestFormStatus.textContent =
        "Thank you for reaching out. We'll be in touch soon.";
      serviceRequestFormStatus.className = "sr-form-status success";
      serviceRequestForm.reset();
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    serviceRequestFormStatus.textContent =
      "Something went wrong. Please try again or email us directly.";
    serviceRequestFormStatus.className = "sr-form-status error";
  } finally {
    srSubmitBtn.disabled = false;
    srSubmitBtn.textContent = "Submit";
  }
});
console.log("Script loaded successfully");

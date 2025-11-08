// Import React and ReactDOM for the UserTable component
import React from "react";
import ReactDOM from "react-dom/client";
import UserTable from "./components/UserTable.js";

// Initialize React component
const tableContainer = document.getElementById("user-table-container");
if (tableContainer) {
  const root = ReactDOM.createRoot(tableContainer);
  root.render(
    <React.StrictMode>
      <UserTable />
    </React.StrictMode>
  );
}

// Tab switching functionality
document.addEventListener("DOMContentLoaded", () => {
  // Handle service request form submission
  const serviceForm = document.getElementById("serviceForm");
  if (serviceForm) {
    serviceForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(serviceForm);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch("https://formspree.io/f/mwpaevkb", {
          // Replace with your Formspree ID
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New Service Request from Bloom Horizon Website",
            _replyto: data["service-email"],
            _to: "ttejuosho@outlook.com",
          }),
        });

        if (response.ok) {
          alert("Thank you! Your service request has been submitted.");
          serviceForm.reset();
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "There was an error submitting your request. Please try again later."
        );
      }
    });
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      try {
        const response = await fetch("https://formspree.io/f/mwpaevkb", {
          // Replace with your Formspree ID
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New Contact Form Submission from Bloom Horizon Website",
            _replyto: data.email,
            _to: "ttejuosho@outlook.com",
          }),
        });

        if (response.ok) {
          alert("Thank you! Your message has been sent.");
          contactForm.reset();
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "There was an error sending your message. Please try again later."
        );
      }
    });
  }

  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active state from all buttons
      tabButtons.forEach((btn) =>
        btn.classList.remove("active", "text-green-800", "border-green-600")
      );
      tabButtons.forEach((btn) => btn.classList.add("text-gray-500"));

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.add("hidden"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Activate clicked tab button
      button.classList.add("active", "text-green-800", "border-green-600");
      button.classList.remove("text-gray-500");

      // Show matching tab content
      const target = button.getAttribute("data-tab");
      const contentToShow = document.querySelector(
        `[data-tab-content="${target}"]`
      );
      contentToShow.classList.remove("hidden");
      contentToShow.classList.add("active");
    });
  });

  // Tab buttons
  // const tabButtons = document.querySelectorAll('.tab-button');
  // tabButtons.forEach(button => {
  //     button.addEventListener('click', () => {
  //         // Remove active class from all buttons
  //         tabButtons.forEach(btn => btn.classList.remove('active'));
  //         // Add active class to clicked button
  //         button.classList.add('active');

  //         // Get target tab content
  //         const tabName = button.getAttribute('data-tab');
  //         const tabContents = document.querySelectorAll('.tab-content');

  //         // Hide all tab contents
  //         tabContents.forEach(content => {
  //             content.classList.add('hidden');
  //             content.classList.remove('active');
  //         });

  //         // Show selected tab content
  //         const activeTab = document.querySelector(`.tab-content[data-tab-content="${tabName}"]`);
  //         if (activeTab) {
  //             activeTab.classList.remove('hidden');
  //             activeTab.classList.add('active');
  //         }
  //     });
  // });

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

// const form = document.getElementById("contactForm");
// const formStatus = document.getElementById("formStatus");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   const submitBtn = form.querySelector(".submit-btn");
//   submitBtn.disabled = true;
//   submitBtn.textContent = "Sending...";
//   formStatus.textContent = "";
//   formStatus.className = "form-status";

//   const formData = new FormData(form);

//   try {
//     const response = await fetch("https://formspree.io/f/xldpwjoo", {
//       method: "POST",
//       body: formData,
//       headers: {
//         Accept: "application/json",
//       },
//     });

//     if (response.ok) {
//       formStatus.textContent =
//         "Thank you for reaching out. We'll be in touch soon.";
//       formStatus.className = "form-status success";
//       form.reset();
//     } else {
//       throw new Error("Form submission failed");
//     }
//   } catch (error) {
//     formStatus.textContent =
//       "Something went wrong. Please try again or email us directly.";
//     formStatus.className = "form-status error";
//   } finally {
//     submitBtn.disabled = false;
//     submitBtn.textContent = "Submit";
//   }
// });

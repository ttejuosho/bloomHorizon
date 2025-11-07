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

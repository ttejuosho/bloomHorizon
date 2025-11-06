"use client";

import {
  FaTruck,
  FaLeaf,
  FaWarehouse,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import Input from "../components/Input";
import Radio from "../components/Radio";
import Textarea from "../components/Textarea";
import ContactItem from "../components/ContactItem";

export default function MainContent() {
  return (
    <main className="container mx-auto px-4 py-20">
      {/* ---------- Hero Section ---------- */}
      <section className="hero-section mb-20">
        <div className="bg-green-50 rounded-xl p-8 md:p-12 lg:p-16 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-800 mb-6">
            Sustainable Transportation Solutions
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto md:mx-0">
            Delivering eco-friendly logistics with care for our planet and your
            business needs.
          </p>
          <a
            href="#service-request"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Service Request
          </a>
        </div>
      </section>

      {/* ---------- Services Section ---------- */}
      <section className="services-section mb-20" id="services">
        <h2 className="text-3xl font-bold text-green-800 mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<FaTruck />}
            title="Freight Transportation"
            description="Reliable and efficient freight services with real-time tracking and monitoring."
          />
          <ServiceCard
            icon={<FaLeaf />}
            title="Eco-Friendly Solutions"
            description="Sustainable transport options with reduced carbon footprint."
          />
          <ServiceCard
            icon={<FaWarehouse />}
            title="Warehousing"
            description="Secure storage solutions with climate-controlled options available."
          />
        </div>
      </section>

      {/* ---------- Contact Section ---------- */}
      <section id="contact" className="contact-section mb-20">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Contact Us
              </h2>
              <form className="space-y-6">
                <Input label="Full Name" type="text" required />
                <Input label="Email Address" type="email" required />
                <Input label="Phone Number" type="tel" />
                <Textarea label="Your Message" rows={4} required />

                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-green-50 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-green-800 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  title="Our Location"
                  lines={["457 E 168th Street, South Holland, IL 60473"]}
                />
                <ContactItem
                  icon={<FaPhoneAlt />}
                  title="Call Us"
                  lines={["+1 (773) 712-4465", "Mon-Fri: 8am-6pm"]}
                />
                <ContactItem
                  icon={<FaEnvelope />}
                  title="Email Us"
                  lines={[
                    "support@bloomhorizonservices.com",
                    "info@bloomhorizonservices.com",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

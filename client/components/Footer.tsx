"use client";

import Link from "next/link";
import {
  FaLeaf,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <div className="flex items-center text-2xl font-bold mb-4">
            <FaLeaf className="text-green-300 mr-2" />
            Bloom Horizon
          </div>
          <p className="text-green-100 max-w-xs mb-6">
            Delivering safe & secure transportation solutions across Nigeria.
          </p>

          <div className="flex space-x-4">
            <SocialIcon href="#" icon={<FaFacebookF />} />
            <SocialIcon href="#" icon={<FaTwitter />} />
            <SocialIcon href="#" icon={<FaLinkedinIn />} />
            <SocialIcon href="#" icon={<FaTiktok />} />
            <SocialIcon href="#" icon={<FaInstagram />} />
          </div>
        </div>

        {/* Services */}
        <FooterColumn title="Services">
          <FooterLink href="#">School Shuttle Services</FooterLink>
          <FooterLink href="#">General Transport Services</FooterLink>
          <FooterLink href="#">Auto Rentals </FooterLink>
          <FooterLink href="#">Freight & Logistics</FooterLink>
        </FooterColumn>

        {/* Company */}
        <FooterColumn title="Company">
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Sustainability</FooterLink>
          <FooterLink href="#">News</FooterLink>
        </FooterColumn>

        {/* Support */}
        <FooterColumn title="Support">
          <FooterLink href="#">Contact Us</FooterLink>
          <FooterLink href="#">FAQs</FooterLink>
          <FooterLink href="#">Tracking</FooterLink>
          <FooterLink href="#">Terms</FooterLink>
        </FooterColumn>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-100 text-sm">
        © {new Date().getFullYear()} Bloom Horizon. All rights reserved.
      </div>
    </footer>
  );
}

/* ---------- Subcomponents ---------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-green-100 hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      aria-label="Social link"
    >
      {icon}
    </Link>
  );
}

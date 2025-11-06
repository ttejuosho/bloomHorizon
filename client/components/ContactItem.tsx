// components/ContactItem.tsx
import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
}

export default function ContactItem({ icon, title, lines }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-green-600 text-xl mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        {lines.map((line, i) => (
          <p key={i} className="text-gray-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

// Usage
{
  /* <ContactItem
  icon={<i className="fas fa-phone-alt" />}
  title="Call Us"
  lines={["+1 (555) 123-4567", "Mon–Fri: 8am–6pm"]}
/>; */
}

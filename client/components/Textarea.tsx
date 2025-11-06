// components/Textarea.tsx
import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  rows?: number;
}

export default function Textarea({
  label,
  name,
  rows = 3,
  ...props
}: TextareaProps) {
  const textareaId = props.id || name;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={textareaId}
        className="block text-gray-700 mb-2 font-medium"
      >
        {label}
      </label>
      <textarea
        id={textareaId}
        name={name}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        {...props}
      />
    </div>
  );
}

// Sample usage:
/*
<Textarea
  label="Your Message"
  name="message"
  placeholder="Type your message here..."
  rows={5}
  required
/>
*/

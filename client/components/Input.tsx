// components/Input.tsx
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function Input({
  label,
  type = "text",
  name,
  ...props
}: InputProps) {
  const inputId = props.id || name;

  return (
    <div className="flex flex-col">
      <label htmlFor={inputId} className="block text-gray-700 mb-2 font-medium">
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        type={type}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
        {...props}
      />
    </div>
  );
}

// Sample Usage
/*
<Input
  label="Full Name"
  name="fullName"
  placeholder="Enter your full name"
  required
/>
*/

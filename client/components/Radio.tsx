// components/Radio.tsx
import React from "react";

interface RadioProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Radio({
  label,
  name,
  value,
  checked,
  onChange,
}: RadioProps) {
  const id = `${name}-${value}`;

  return (
    <label htmlFor={id} className="flex items-center cursor-pointer">
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
}

//Sample Usage
{
  /* <fieldset className="flex flex-wrap gap-4">
  <Radio label="One Way" name="trip-type" value="one-way" checked />
  <Radio label="Round Trip" name="trip-type" value="round-trip" />
  <Radio label="Multi-Location" name="trip-type" value="multi-location" />
</fieldset>; */
}

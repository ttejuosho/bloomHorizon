"use client";

import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Radio from "./Radio";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ServiceRequestFormProps {
  onClose?: () => void; // optional close callback
}

export default function ServiceRequestForm({
  onClose,
}: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    tripType: "one-way",
    passengers: 1,
    pickup: "",
    destination: "",
    fromDate: "",
    toDate: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTripTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, tripType: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Service request submitted!");
    onClose?.(); // close modal after submission
  };

  return (
    <div className="relative">
      {/* Close button */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <fieldset className="border border-gray-200 rounded-lg p-4">
          <legend className="text-lg font-medium text-gray-700 px-2">
            Trip Information
          </legend>
          <div className="flex flex-wrap gap-4 mb-4">
            <Radio
              label="One Way"
              name="tripType"
              value="one-way"
              checked={formData.tripType === "one-way"}
              onChange={handleTripTypeChange}
            />
            <Radio
              label="Round Trip"
              name="tripType"
              value="round-trip"
              checked={formData.tripType === "round-trip"}
              onChange={handleTripTypeChange}
            />
            <Radio
              label="Multi-Location"
              name="tripType"
              value="multi-location"
              checked={formData.tripType === "multi-location"}
              onChange={handleTripTypeChange}
            />
          </div>

          <Input
            label="Number of Passengers"
            name="passengers"
            type="number"
            min={1}
            value={formData.passengers}
            onChange={handleChange}
            required
          />
          <Input
            label="Pick Up Location"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            required
          />
          <Input
            label="Destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="From (Date & Time)"
              name="fromDate"
              type="datetime-local"
              value={formData.fromDate}
              onChange={handleChange}
              required
            />
            <Input
              label="To (Date & Time)"
              name="toDate"
              type="datetime-local"
              value={formData.toDate}
              onChange={handleChange}
            />
          </div>

          <Textarea
            label="Notes / Instructions"
            name="notes"
            rows={3}
            value={formData.notes}
            onChange={handleChange}
          />
        </fieldset>

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-full"
        >
          Submit Request
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-full"
            aria-label="Close form"
          >
            Close
          </button>
        )}
      </form>
    </div>
  );
}

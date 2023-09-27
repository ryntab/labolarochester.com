import React, { useState } from 'react';

import Link from 'next/link';

const Book = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [budget, setBudget] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      date,
      eventDetails,
      budget,
      numOfPeople,
      eventType,
      eventLocation
    };

    try {
      const response = await fetch('/api/bookEvent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });


      if (response.ok) {
        alert('Event booking request submitted successfully.');
        window.location.href = '/';
      } else {
        alert('Failed to submit event booking request.');
      }
    } catch (error) {
      console.error('Error submitting event booking request:', error);
      alert('Error submitting event booking request.');
    }
  };


  return (
    <div className="container mx-auto max-w-2xl bg-teal-900/75 pt-0 backdrop-blur">
      <img className="w-full -m-x-6 mb-4 object-cover h-[50vh]" src="event2.jpg"/>
      <Link href="/"
          type="submit"
          className="bg-black/75 shadow-lg mx-6 hover:bg-black/90 text-white font-bold py-2 inline-block px-4 rounded mr-auto block"
        >
          Back
        </Link>
      <h1 className="px-6 text-2xl font-bold mt-4 text-white mb-2">Event / Catering Inquiry Form</h1>
      <form onSubmit={handleSubmit} className="p-6">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-100 text-sm font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-100 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-100 text-sm font-bold mb-2">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-100 text-sm font-bold mb-2">
            Date of Event:
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Event Details */}
        <div className="mb-4">
          <label htmlFor="eventDetails" className="block text-gray-100 text-sm font-bold mb-2">
            Event Details:
          </label>
          <textarea
            id="eventDetails"
            value={eventDetails}
            onChange={(e) => setEventDetails(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            placeholder="Provide further event details"
            required
          />
        </div>

        {/* Budget Range */}
        <div className="mb-4">
          <label htmlFor="budget" className="block text-gray-100 text-sm font-bold mb-2">
            Budget:
          </label>
          <input
            type="text"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter approximate budget"
            required
          />
        </div>

        {/* Number of People */}
        <div className="mb-4">
          <label htmlFor="numOfPeople" className="block text-gray-100 text-sm font-bold mb-2">
            Number of People:
          </label>
          <input
            type="number"
            id="numOfPeople"
            value={numOfPeople}
            onChange={(e) => setNumOfPeople(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the number of people, estimate if needed"
            required
          />
        </div>

        {/* Event Type */}
        <div className="mb-4">
          <label htmlFor="eventType" className="block text-gray-100 text-sm font-bold mb-2">
            Event Type:
          </label>
          <input
            type="text"
            id="eventType"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the type of event"
            required
          />
        </div>

        {/* Event Location */}
        <div className="mb-4">
          <label htmlFor="eventLocation" className="block text-gray-100 text-sm font-bold mb-2">
            Event Location (If Not At La Bola):
          </label>
          <input
            type="text"
            id="eventLocation"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter the event location"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-black/75 shadow-lg hover:bg-black/90 text-white font-bold py-2 px-4 rounded ml-auto block"
        >
          Submit
        </button>
      </form>
        <p className="text-sm text-gray-400 mt-4 px-6 pb-6">
            Note: Submitting this form does not guarantee the availability or booking of your event. Our team will review your request and contact you to discuss the details and confirm the event.
        </p>
    </div>
  );
};

export default Book;

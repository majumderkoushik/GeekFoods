import React from 'react';
import '../../../App.css'
import Footer from '../../Footer/Footer';
const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
    <div className="flex items-center justify-center h-screen bg-teal-500">
      <div className="bg-gradient-to-r from-pink-500 to-pink-700  p-8 rounded-md w-96  c-box">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-green-500 mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            type="text"
            id="name"
            name="name"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            type="email"
            id="email"
            name="email"
            required
          />

          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>

          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contacts;
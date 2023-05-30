import React from 'react'

function Input() {
  return (
    <div className="relative mb-2">
    <label
      htmlFor="name"
      className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
    >
      Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      className="block w-full rounded-md border-0 py-4 text-lg text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      placeholder="Jane Smith"
    />
    </div>

  )
}

export default Input
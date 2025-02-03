import React, { useState } from 'react';
import PasswordItem from './PasswordItem';

export default function Passwords() {
  const passwords = [
    { pid: 1, name: 'Google', url: 'https://google.com', password: '1234' },
    { pid: 2, name: 'Facebook', url: 'https://facebook.com', password: 'abcd' },
  ];

  return (
    <div className="flex flex-col h-full w-full p-6 text-gray-100">

      <input
        type="text"
        placeholder="Search"
        className="border border-gray-700 p-3 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
      />

      <div className="mt-4 flex justify-end">
        <button className="bg-blue-950 hover:bg-violet-950 transition text-white px-4 py-2 rounded-lg text-reg">
          Add
        </button>
      </div>

      <div className="overflow-y-auto mt-8">
        <table className="w-full table-auto text-left border-collapse">
          <thead className="border-b border-gray-700">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">URL</th>
            </tr>
          </thead>
          <tbody>
            {passwords.map((item) => (
              <PasswordItem
                key={item.pid}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

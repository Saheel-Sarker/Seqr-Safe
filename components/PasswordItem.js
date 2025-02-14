import Link from 'next/link';
import React, { useState } from 'react';

export default function PasswordItem({ item }) {

  

  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
      <td className="px-4 py-2 cursor-pointer">
        <Link href={`/dashboard/passwords/${item.id}`}>
            {item.title}
        </Link>
      </td>
      {/* <td className="px-4 py-2 cursor-pointer">
        {item.url}
      </td> */}
    </tr>
  );
}

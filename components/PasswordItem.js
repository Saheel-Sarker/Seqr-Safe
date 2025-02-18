import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function PasswordItem({ item }) {
  const router = useRouter();

  return (
      <tr className="border-b border-gray-700 hover:bg-gray-800 transition" onClick={()=>router.push(`/dashboard/passwords/${item.id}`)}>
          <td className="px-4 py-2 cursor-pointer">
              {item.title}
          </td>
      </tr>
    
  );
}

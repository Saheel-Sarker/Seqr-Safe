'use client'
import Main from '@/components/Main';
import Notes from '@/components/Notes';
import Passwords from '@/components/Passwords';
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useState } from 'react';

export default function page() {

  return (
    <Main>
      <Passwords></Passwords>
    </Main>
  )
}

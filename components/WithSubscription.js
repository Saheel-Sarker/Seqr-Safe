import { useAuthStore } from '@/store/auth.store'
import { useRouter } from 'next/navigation';
import React from 'react'
import Pricing from './Pricing';

export default function WithSubscription({children}) {
  const {user} = useAuthStore();
  const router = useRouter();
  if (!user?.hasAccess) {
    return <Pricing redirectToPlans={true}/>
  }
  return (
    <div>
        {children}
    </div>
  )
}

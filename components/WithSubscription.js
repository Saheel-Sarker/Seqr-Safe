import { useAuthStore } from '@/store/auth.store'
import React, { useEffect, useState } from 'react'
import Pricing from './Pricing';
import CenterAuthItems from './CenterAuthItems';

export default function WithSubscription({children, showPricing}) {
  const {user, isCheckingAuth} = useAuthStore();
  const [wasAuthenticated, setWasAuthenticated] = useState(false);
  console.log(isCheckingAuth);
  useEffect(()=>{
    if (user?.hasAccess) {
      setWasAuthenticated(true);
    }
  },[]);
  if (isCheckingAuth){
    console.log('loading');
    return(
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <div className="w-28 h-28 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin border-t-transparent"></div>
      </div>
    )
  }
  if (wasAuthenticated || showPricing) {
    return <Pricing redirectToPlans={true}/>
  }
  else{
    return (
      <div>
          {children}
      </div>
    );
  }
}

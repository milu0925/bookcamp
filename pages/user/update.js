import { useAuth } from '@/hooks/auth-context'
import UserAside from '@/components/user/user-aside';
import React from 'react'
import EditInformation from '@/components/user/information/edit-information';

export default function UserUpdate() {
  const {auth} = useAuth();
  console.log(auth);
  
  return (
    <div className="l-user">
    <UserAside />
    <EditInformation />
  </div>
  )
}

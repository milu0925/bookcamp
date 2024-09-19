import React from 'react'
import { useAuth } from '@/hooks/auth-context'
import UserAside from '@/components/user/user-aside';
import EditPassword from '@/components/user/information/edit-password';

export default function ResetPassword() {
  const {auth} = useAuth();
  console.log(auth);
  return (
    <div className="l-user">
    <UserAside />
    <EditPassword />
  </div>
  )
}


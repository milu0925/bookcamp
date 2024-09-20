import React from 'react'
import UserAside from '@/components/user/user-aside';
import EditPassword from '@/components/user/information/edit-password';

export default function ResetPassword() {
  return (
    <div className="l-user">
    <UserAside />
    <EditPassword />
  </div>
  )
}


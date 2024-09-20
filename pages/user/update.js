
import UserAside from '@/components/user/user-aside';
import React from 'react'
import EditInformation from '@/components/user/information/edit-information';

export default function UserUpdate() {

  return (
    <div className="l-user">
    <UserAside />
    <EditInformation />
  </div>
  )
}

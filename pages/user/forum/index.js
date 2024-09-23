import UserAside from '@/components/user/user-aside'
import React from 'react'
import MyForum from '@/components/user/forum/myforum'
export default function Forum() {
  return (
    <div className="l-user">
    <UserAside />
    <MyForum  />
  </div>
  )
}

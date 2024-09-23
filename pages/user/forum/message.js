import React from 'react'
import Mymessage from '@/components/user/forum/mymessage'
import UserAside from '@/components/user/user-aside'
export default function ForumMessage() {
  return (
    <div className="l-user">
      <UserAside />
      <Mymessage />
    </div>
  )
}

import UserAside from '@/components/user/user-aside'
import React from 'react'
import MyCollect from '@/components/user/forum/mycollect'
export default function ForumCollect() {
  return (
    <div className="l-user">
    <UserAside />
    <MyCollect />
  </div>
  )
}

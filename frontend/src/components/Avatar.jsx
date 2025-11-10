import React from 'react'
import './avatar.css'

export default function Avatar({ nickname, avatarId }) {
  // Render a circular avatar with initials and a small id badge
  const name = nickname || ''
  const initials = name.split(' ').filter(Boolean).map(n => n[0]).slice(0,2).join('').toUpperCase() || 'FF'

  return (
    <div className="avatar-root">
      <div className="avatar-circle">{initials}</div>
      <div className="avatar-id">#{avatarId ?? '—'}</div>
    </div>
  )
}

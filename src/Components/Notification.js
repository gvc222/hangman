import React from 'react'

export const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
        <p>You've already entered this letter</p>
    </div>
  )
}

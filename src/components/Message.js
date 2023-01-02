import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ messages }) => {
  return (
    messages &&
    messages.map((message, i) => (
      <Alert key={i} variant={message.variant}>
        {message.text}
      </Alert>
    ))
  )
}

export default Message

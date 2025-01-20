import React from 'react'
import {useParams} from 'react-router-dom'

function ContactUs() {
  const {username} = useParams();
  return (
    <div>ContactUs
      <h1>Hello {username}</h1>
    </div>
  )
}

export default ContactUs

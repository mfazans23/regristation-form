import React, { useState } from 'react'
import Message from './Message'

const RegristationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [messages, setMessages] = useState([])

  const { name, email, password } = formData

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  let alerts = []
  const handleSubmit = (e) => {
    e.preventDefault()

    alerts = [] // reset alerts
    // check if empty
    if (name === '') {
      alerts = [
        ...alerts,
        { text: 'nama tidak boleh kosong', variant: 'danger' },
      ]
    }

    // check email
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!email.match(emailRegex)) {
      alerts = [
        ...alerts,
        {
          text: 'email tidak valid',
          variant: 'danger',
        },
      ]
    }

    // check password
    let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if (!password.match(passwordRegex)) {
      alerts = [
        ...alerts,
        {
          text: 'Password harus terdiri dari minimal 8 karakter, setidaknya 1 huruf dan 1 angka',
          variant: 'danger',
        },
      ]
    }

    if (alerts.length === 0) {
      alerts = [
        ...alerts,
        {
          text: `Name: ${name}`,
          variant: 'success',
        },
        {
          text: `Email: ${email}`,
          variant: 'success',
        },
        {
          text: `Password: ${password}`,
          variant: 'success',
        },
      ]
    }

    setMessages(alerts)
    // Remove alert state after 1.7 seconds
    setTimeout(() => {
      setMessages([])
    }, 2500)
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className='w-4/5 mx-auto rounded-lg md:w-3/5 lg:w-2/5'
    >
      {messages.length > 0 && <Message messages={messages} />}
      <h1 className='text-slate-800 text-xl font-bold text-center mb-6 md:text-3xl md:mb-8 lg:text-4xl lg:mb-12'>
        Sign Up
      </h1>
      <div
        className='flex items-center gap-4 w-9/10 mb-6 mx-auto p-3 rounded-full sm:w-5/6 md:w-3/4'
        style={{ 'box-shadow': '0px 0px 19px -5px rgba(0,0,0,0.75)' }}
      >
        <i className='fa-solid fa-user text-purple-800 md:text-xl'></i>
        <input
          className='w-full focus:outline-none text-sm'
          type='text'
          id='name'
          name='name'
          onChange={(e) => handleChange(e)}
          value={name}
          placeholder='Enter name...'
        />
      </div>
      <div
        className='flex items-center gap-4 w-9/10 mb-6 mx-auto p-3 rounded-full sm:w-5/6 md:w-3/4'
        style={{ 'box-shadow': '0px 0px 19px -5px rgba(0,0,0,0.75)' }}
      >
        <i className='fa-solid fa-envelope text-purple-800 md:text-xl'></i>
        <input
          className='w-full focus:outline-none text-sm'
          type='email'
          id='email'
          name='email'
          onChange={(e) => handleChange(e)}
          value={email}
          placeholder='Enter email...'
        />
      </div>
      <div
        className='flex items-center gap-4 w-9/10 mb-6 mx-auto p-3 rounded-full sm:w-5/6 md:w-3/4 lg:mb-12'
        style={{ 'box-shadow': '0px 0px 19px -5px rgba(0,0,0,0.75)' }}
      >
        <i className='fa-solid fa-lock text-purple-800 md:text-xl'></i>

        <input
          className='w-full focus:outline-none text-sm'
          type='password'
          id='password'
          name='password'
          onChange={(e) => handleChange(e)}
          value={password}
          placeholder='Enter password...'
        />
      </div>

      <button className='block bg-purple-800 text-white mt-8 py-2 px-4 rounded-full mx-auto focus:outline-none'>
        Create Account
      </button>
    </form>
  )
}

export default RegristationForm

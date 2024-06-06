'use client'

import React, { useState } from 'react'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            alert('Email sent successfully')
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        } else {
            const result = await response.json()
            alert(`Error sending email: ${result.error}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                />
            </div>
            <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                />
            </div>
            <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md'
                    required
                />
            </div>
            <button
                type='submit'
                className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
            >
                Send
            </button>
        </form>
    )
}

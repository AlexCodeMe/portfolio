import ContactForm from '@/components/contact-form'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function ContactPage() {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    // })
    // const [formStatus, setFormStatus] = useState('')

    // async function handleSubmit(e: FormEvent) {
    //     e.preventDefault();

    //     const res = await fetch('/api/contact-form', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //     });

    //     if (res.ok) {
    //         setFormStatus('Form submitted successfully!');
    //         setFormData({ name: '', email: '', message: '' });
    //     } else {
    //         setFormStatus('Failed to submit form. Please try again.');
    //     }
    // }

    // function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     })
    // }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <ContactForm />
            {/* <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                    <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
                    <textarea required
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit
                </button>
            </form>
            {formStatus && <p className="mt-4 text-sm text-gray-600">{formStatus}</p>} */}
        </div>
    )
}

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles.js'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion.js'

const Contact = () => {
  const formRef = useRef()
  const errors = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [error, setError] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: import.meta.env.VITE_EMAIL_NAME,
        from_email: form.email,
        to_email: import.meta.env.VITE_EMAIL_TO,
        message: form.message
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        alert('Danke. Ich melde mich so schnell es geht.')

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        console.log(error)

        alert('Etwas ist schief gelaufen.')
      })
  }

  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                  className="flex flex-col w-full bg-black-200 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Kontakt aufnehmen</p>
        <h3 className={styles.sectionHeadText}>Kontakt<span className="text-amber-500">.</span></h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <input type="text" name="name" value={form.name} onChange={handleChange} className="px-4 py-3 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-none border border-tertiary focus:border-amber-500" placeholder="Name" />
          </label>
          <label className="flex flex-col">
            <input type="email" name="email" value={form.email} onChange={handleChange} className="px-4 py-3 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-none border border-tertiary focus:border-amber-500" placeholder="Email" />
          </label>
          <label className="flex flex-col">
            <textarea rows="7" name="message" value={form.message} onChange={handleChange} className="px-4 py-3 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-none border border-tertiary focus:border-amber-500" placeholder="Nachricht" />
          </label>

          <button type="submit" className="px-4 py-2 bg-amber-600 hover:bg-amber-700 outline-none w-fit rounded-lg">
            {loading ? 'Senden..' : 'Schicken'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
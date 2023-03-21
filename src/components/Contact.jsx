import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

import { styles } from '../styles.js'
import { SectionWrapper } from '../hoc'
import { slideIn, textVariant, fadeIn } from '../utils/motion.js'

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
    <div className='max-w-7xl mx-auto'>
      <div className="flex-col flex gap-10 overflow-hidden">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Mehr erfahren?</p>
          <h3 className={styles.sectionHeadText}>Kontakt</h3>
        </motion.div>

        <motion.div variants={fadeIn('left', '', .2, .4)}
                    className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='text-center font-xl'>
            <FontAwesomeIcon icon={solid('location-dot')} className='h-12 text-teal-500' />
            <p className='pt-4 text-base'>Radeberg, Sachsen</p>
          </div>
          <div className='text-center font-xl'>
            <FontAwesomeIcon icon={solid('envelope')} className='h-12 text-teal-500' />
            <p className='pt-4 text-base'>contact@philippschurig.de</p>
          </div>
        </motion.div>

        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                    className="contact-card flex flex-col w-full p-8 rounded-2xl" >
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <label className="flex flex-col">
              <input type="text" name="name" value={form.name} onChange={handleChange} className="px-4 py-3 bg-gray-800 placeholder:text-secondary text-white rounded-lg outline-none" placeholder="Name" />
            </label>
            <label className="flex flex-col">
              <input type="email" name="email" value={form.email} onChange={handleChange} className="px-4 py-3 bg-gray-800 placeholder:text-secondary text-white rounded-lg outline-none" placeholder="Email" />
            </label>
            <label className="flex flex-col">
              <textarea rows="7" name="message" value={form.message} onChange={handleChange} className="px-4 py-3 bg-gray-800 placeholder:text-secondary text-white rounded-lg outline-none" placeholder="Nachricht" />
            </label>

            <button type="submit" className="bg-theme-gradient px-5 py-3 outline-none w-fit rounded-lg">
              {loading ? 'Senden..' : 'Schicken'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact', 'bg-grey-800')
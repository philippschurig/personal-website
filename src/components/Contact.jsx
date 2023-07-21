import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'

import { styles } from '../styles.js'
import { SectionWrapper } from '../hoc'
import { slideIn, textVariant } from '../utils/motion.js'

const Contact = () => {
  const captchaRef = useRef(null)
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const token = await captchaRef.current.executeAsync()

    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: import.meta.env.VITE_NAME,
        from_email: form.email,
        to_email: import.meta.env.VITE_EMAIL,
        message: form.message,
        'g-recaptcha-response': token,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false)
        setSubmit(true)

        setForm({
          name: '',
          email: '',
          message: '',
        })
      }, (error) => {
        setLoading(false)
        setError(true)
      })
  }

  return (
    <div className='max-w-7xl mx-auto overflow-hidden'>
      <div className="flex-col flex gap-10 overflow-hidden">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Mehr erfahren?</p>
          <h3 className={styles.sectionHeadText}>Kontakt</h3>
        </motion.div>

        <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
                    className="contact-card flex flex-col w-full p-8 rounded-2xl overflow-hidden" >
          <div className={`${submit ? 'block' : 'hidden'} p-4 bg-teal-500 rounded-lg mb-8`}>Nachricht wurde gesendet.</div>
          <div className={`${error ? 'block' : 'hidden'} p-4 bg-red-500 rounded-lg mb-8`}>Deine Nachricht konnte nicht gesendet werden.</div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8" id="contact-form">
            <label className="flex flex-col">
              <input type="text"
                     name="name"
                     value={form.name}
                     onChange={handleChange}
                     className="px-4 py-3 bg-gray-800 placeholder:text-secondary text-white rounded-lg outline-none"
                     placeholder="Name" required />
            </label>
            <label className="flex flex-col">
              <input type="email"
                     name="email"
                     value={form.email}
                     onChange={handleChange}
                     className="px-4 py-3 bg-gray-800 placeholder:text-secondary text-white rounded-lg outline-none"
                     placeholder="Email" required />
            </label>
            <label className="flex flex-col">
              <textarea rows="7"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="px-4 py-3 bg-gray-800 placeholder:text-secondary text-white rounded-lg outline-none"
                        placeholder="Nachricht" required />
            </label>

            <ReCAPTCHA sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_KEY}
                       size="invisible"
                       ref={captchaRef}  />

            <button type="submit" className="btn-primary px-6 py-4 outline-none w-fit rounded-lg">
              <FontAwesomeIcon icon={regular('paper-plane')}  className="mr-4"/>
              {loading ? 'Senden..' : 'Schicken'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact', 'bg-themeGrey-100')
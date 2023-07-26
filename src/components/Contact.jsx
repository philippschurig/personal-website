import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro'
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
    <div className='flex justify-center'>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 w-full md:w-3/4" id="contact-form">
        <p className={`${submit ? 'block' : 'hidden'} p-4 bg-teal-500 rounded-lg mb-8`}>Nachricht wurde gesendet.</p>
        <p className={`${error ? 'block' : 'hidden'} p-4 bg-red-500 rounded-lg mb-8`}>Deine Nachricht konnte nicht gesendet werden.</p>

        <div className='flex flex-col md:flex-row md:justify-between gap-6'>
          <label className="flex flex-col w-full">
            <input type="text"
                   name="name"
                   value={form.name}
                   onChange={handleChange}
                   className="px-4 py-3 bg-themeGrey-400 border border-themeGrey-400 focus:border-themeOrange-100 placeholder:text-secondary text-white rounded-lg outline-none"
                   placeholder="Name"
                   required />
          </label>
          <label className="flex flex-col w-full">
            <input type="email"
                   name="email"
                   value={form.email}
                   onChange={handleChange}
                   className="px-4 py-3 bg-themeGrey-400 border border-themeGrey-400 focus:border-themeOrange-100 placeholder:text-secondary text-white rounded-lg outline-none"
                   placeholder="Email"
                   required />
          </label>
        </div>

        <label className="flex flex-col w-full">
              <textarea rows="7"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-themeGrey-400 placeholder:text-secondary border border-themeGrey-400 focus:border-themeOrange-100 text-white rounded-lg outline-none"
                        placeholder="Nachricht"
                        required />
        </label>

        <ReCAPTCHA sitekey={import.meta.env.VITE_GOOGLE_CAPTCHA_KEY}
                   size="invisible"
                   className='hidden'
                   ref={captchaRef}  />

        <button type="submit" className="self-end px-4 py-2 outline-none border border-themeOrange-100 w-fit transition-all ease-in-out duration-300 hover:bg-themeOrange-100 rounded-lg">
          <FontAwesomeIcon icon={regular('paper-plane')}  className="mr-4"/>
          {loading ? 'Senden..' : 'Absenden'}
        </button>
      </form>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact', 'Kontakt', 'Hast du eine Frage?', 'bg-themeGrey-100')
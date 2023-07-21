import React, {useEffect, useState} from 'react'

const Typewriter = ({ captions, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeout

    captions.forEach(text => {
      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex])
          setCurrentIndex(prevIndex => prevIndex + 1)
        }, delay)

      } else if (infinite) {
        setCurrentIndex(0)
        setCurrentText('')
      }
    })

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, infinite, captions])

  return <span className='font-bold text-gray-800'>{currentText}</span>
}

export default Typewriter
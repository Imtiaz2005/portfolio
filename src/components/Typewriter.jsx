import { useEffect, useState } from 'react'

function useTypewriter(text, { typingSpeed = 130, pause = 1600, deletingSpeed = 70, restDelay = 500 } = {}) {
  const [display, setDisplay] = useState('')
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    let timeout

    if (phase === 'typing') {
      if (display.length < text.length) {
        timeout = setTimeout(() => setDisplay(text.slice(0, display.length + 1)), typingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), pause)
      }
    } else {
      if (display.length > 0) {
        timeout = setTimeout(() => setDisplay(text.slice(0, display.length - 1)), deletingSpeed)
      } else {
        timeout = setTimeout(() => setPhase('typing'), restDelay)
      }
    }

    return () => clearTimeout(timeout)
  }, [display, phase, text, typingSpeed, deletingSpeed, pause, restDelay])

  return display
}

// Text আর cursor কে একই <span> এর ভেতরে normal inline flow তে রাখা হয়েছে,
// যাতে text এর length যাই হোক না কেন, লাইনের height সবসময় parent এর
// font-size/line-height দিয়েই ঠিক হয় — cursor আলাদা flex-child না হওয়ায়
// আর উপর-নিচ jump করে না।
export default function Typewriter({ text }) {
  const display = useTypewriter(text)
  return (
    <span
      className="text-paper font-semibold whitespace-nowrap inline-block"
      style={{ minWidth: `${text.length}ch` }}
    >
      {display}
      <span
        className="inline-block w-[2px] h-[0.85em] bg-ember ml-1 align-middle animate-pulse"
        aria-hidden="true"
      />
    </span>
  )
}

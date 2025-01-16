'use client'

import { useState, useEffect } from 'react'

const LanguageToggle = () => {
  const [language, setLanguage] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem('language') || 'en'
    setLanguage(savedLang)
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'bn' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    document.documentElement.lang = newLang
  }

  if (!mounted) return null

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <button
        onClick={toggleLanguage}
        className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-700 to-maroon-800 text-white 
        hover:from-amber-800 hover:to-maroon-900 transition-all duration-300 shadow-lg text-lg"
        aria-label={language === 'en' ? 'Switch to Bengali' : 'Switch to English'}
      >
        {language === 'en' ? 'বাংলা' : 'English'}
      </button>
    </div>
  )
}

export default LanguageToggle
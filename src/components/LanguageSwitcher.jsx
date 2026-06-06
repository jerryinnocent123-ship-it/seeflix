import { useState } from 'react'
import "./styles/languageSwitcher.css"
import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'ht', label: 'Kreyòl' },
]

function LanguageSwitcher({ compact = true, className = '' }) {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const handleChangeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div
      className={`ls-wrapper ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-label={t('language')}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="language-btn"
      >
        <Globe />
      </button>

      {isOpen && (
        <div className="ls-dropdown" role="listbox">
          {languages.map((language) => (
            <button
              key={language.code}
              type="button"
              onClick={() => handleChangeLanguage(language.code)}
              className="ls-item"
              role="option"
            >
              {language.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
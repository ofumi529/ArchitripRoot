import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const toggle = () => {
    const newLng = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(newLng);
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {t('Language')}: {i18n.language === 'ja' ? '日本語' : 'English'}
    </button>
  );
}

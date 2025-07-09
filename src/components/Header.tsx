import { Bars3Icon } from '@heroicons/react/24/outline';
import Button from './ui/Button';
import LanguageToggle from './LanguageToggle';
import OriginSelector from './OriginSelector';
import { useTranslation } from 'react-i18next';

interface Props {
  onOpenLeft: () => void;
  onOpenRight: () => void;
  origin: string | null;
  setOrigin: (s: string | null) => void;
}

export default function Header({ onOpenLeft, onOpenRight, origin, setOrigin }: Props) {
  const { t } = useTranslation();
  return (
    <header className="flex items-center justify-between p-3 border-b bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="sm" className="lg:hidden" onClick={onOpenLeft}>
          <Bars3Icon className="w-5 h-5" />
        </Button>
        <h1 className="text-lg font-semibold whitespace-nowrap">{t('Architectour Planner')}</h1>
      </div>
      <div className="flex items-center gap-2">
        <OriginSelector value={origin} onChange={setOrigin} />
        <LanguageToggle />
        <Button variant="secondary" size="sm" className="lg:hidden" onClick={onOpenRight}>
          <Bars3Icon className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}

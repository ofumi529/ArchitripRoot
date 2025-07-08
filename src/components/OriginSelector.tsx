import { useTranslation } from 'react-i18next';
import { countryCenters } from '../data/countryCenters';

interface Props {
  value: string | null;
  onChange: (country: string | null) => void;
}

export default function OriginSelector({ value, onChange }: Props) {
  const { t } = useTranslation();
  return (
    <select
      className="border px-2 py-1 text-sm rounded"
      value={value ?? ''}
      onChange={(e) => onChange(e.target.value || null)}
    >
      <option value="">{t('Select Origin')}</option>
      {Object.keys(countryCenters).map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

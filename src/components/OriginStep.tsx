import OriginSelector from './OriginSelector';
import Button from './ui/Button';
import { useTranslation } from 'react-i18next';

interface Props {
  origin: string | null;
  setOrigin: (s: string | null) => void;
  onNext: () => void;
}

// import architect portraits dynamically
const portraits: string[] = Object.values(
  import.meta.glob('../data/architects/*.{jpg,png,jpeg}', { eager: true, as: 'url' })
) as string[];

export default function OriginStep({ origin, setOrigin, onNext }: Props) {
  const { t } = useTranslation();
  return (
    <div className="relative h-full flex flex-col items-center justify-center gap-6 p-6 text-center overflow-hidden">
      {/* background collage */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-2 object-cover">
          {Array.from({ length: 6 }).map((_, i) => {
            if (i === 4) {
              return (
                <div
                  key="abstract"
                  className="w-full h-full bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-amber-600 via-stone-600 to-amber-700"
                />
              );
            }
            const imgIdx = i < 4 ? i : i - 1; // skip slot 4
            const src = portraits[imgIdx % portraits.length];
            return (
              <img
                key={i}
                src={src}
                className="w-full h-full object-cover grayscale mix-blend-luminosity"
                alt="architect"
              />
            );
          })}
        </div>
      </div>
      <h2 className="text-3xl font-display text-stone-800">
        {t('いざ、巨匠建築を巡る旅へ')}
      </h2>
      <p className="text-sm font-body text-stone-600 max-w-md">
        {t('まずは出発国を選択してください。そこから巨匠建築巡礼がはじまります！')}
      </p>
      <OriginSelector value={origin} onChange={setOrigin} />
      <Button
        variant="primary"
        disabled={!origin}
        onClick={onNext}
        className="mt-4 px-6 py-2"
      >
        {t('次へ')}
      </Button>
    </div>
  );
}

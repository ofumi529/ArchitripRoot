import { useSelection } from '../context/SelectionContext';
import MapView from './CleanMapView';
import PhotoSelector from './PhotoSelector';
import SelectedList from './SelectedList';
import Button from './ui/Button';
import { works } from '../data/works';
import { useState } from 'react';

interface Props {
  onNext: () => void;
}

export default function SelectWorksStep({ onNext }: Props) {
  const { selected } = useSelection();
  const [mode, setMode] = useState<'map' | 'photo'>('map');

  return (
    <div className="flex flex-col h-full">
      {/* mode toggle */}
      <div className="flex justify-center gap-2 py-2 bg-gradient-to-r from-slate-800 via-stone-800 to-amber-900 text-[10px] uppercase tracking-wide text-amber-50 shadow-inner">
        <button
          className={`px-3 py-1 rounded-full font-semibold transition-colors duration-200 ${mode === 'map' ? 'bg-slate-600 text-white' : 'hover:bg-slate-700/30'}`}
          onClick={() => setMode('map')}
        >
          地図で巡る — Masterpiece Atlas
        </button>
        <button
          className={`px-3 py-1 rounded-full font-semibold transition-colors duration-200 ${mode === 'photo' ? 'bg-amber-700 text-white' : 'hover:bg-amber-800/30'}`}
          onClick={() => setMode('photo')}
        >
          写真で選ぶ — Visual Gallery
        </button>
      </div>

      {/* selector area */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {mode === 'map' ? <MapView route={[]} /> : <PhotoSelector works={works} />}
      </div>

      {/* selected summary */}
      <div className="border-t p-4 bg-stone-50">
        <h3 className="text-sm font-semibold mb-2">選択済み作品 ({selected.length})</h3>
        <div className="max-h-40 overflow-y-auto text-xs mb-3">
          <SelectedList />
        </div>
        <Button variant="primary" disabled={selected.length === 0} onClick={onNext} className="w-full">
          ルートへ進む
        </Button>
      </div>
    </div>
  );
}

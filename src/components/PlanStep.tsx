import TravelPlanPanel from './TravelPlanPanel';
import MapView from './CleanMapView';
import Button from './ui/Button';

interface Props {
  origin: string | null;
  originCoords: [number, number] | null;
  onRestart: () => void;
}

import { useState } from 'react';

export default function PlanStep({ origin, originCoords, onRestart }: Props) {
    const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 grid grid-rows-[300px_1fr] min-h-0">
        {/* Map showing generated route */}
        <div className="border-b relative">
          <MapView route={routeCoords} />
        </div>
        {/* Travel plan stats */}
        <div className="overflow-y-auto p-4 bg-gray-50 min-h-0">
          <TravelPlanPanel
            onRouteReady={setRouteCoords}
            origin={origin}
            originCoords={originCoords}
          />
        </div>
      </div>
      <div className="border-t p-4 bg-stone-800 text-center">
        <Button variant="secondary" onClick={onRestart} className="text-white">
          作品を選び直す
        </Button>
      </div>
    </div>
  );
}

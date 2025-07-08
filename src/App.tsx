import { Suspense, useState } from 'react';
import './i18n';
import MapView from './components/CleanMapView';
import { SelectionProvider } from './context/SelectionContext';
import SelectedList from './components/SelectedList';
import { countryCenters } from './data/countryCenters';
import TravelPlanPanel from './components/TravelPlanPanel';
import { useTranslation } from 'react-i18next';
import Drawer from './components/ui/Drawer';
import HeaderBar from './components/Header';

export default function App() {
  const { t } = useTranslation();
  const [routeCoords, setRouteCoords] = useState<[number, number][]>([]);
  const [origin, setOrigin] = useState<string | null>(null);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <Suspense fallback={<div className="p-4">Loading...</div>}>
      <SelectionProvider>
        <div className="h-screen flex flex-col">
          <HeaderBar
            onOpenLeft={() => setLeftOpen(true)}
            onOpenRight={() => setRightOpen(true)}
            origin={origin}
            setOrigin={setOrigin}
          />

          <div className="flex-1 grid grid-cols-1 lg:grid-cols-[240px_1fr_380px]">
            {/* Left sidebar / drawer */}
            <aside className="hidden lg:block border-r overflow-y-auto">
              <SelectedList />
            </aside>

            {/* Map */}
            <main className="relative">
              <MapView route={routeCoords} />
            </main>

            {/* Right sidebar */}
            <aside className="hidden lg:block border-l overflow-y-auto p-4 bg-gray-50">
              <TravelPlanPanel onRouteReady={setRouteCoords} origin={origin} originCoords={origin ? countryCenters[origin] : null} />
            </aside>
          </div>

          {/* Drawers for mobile */}
          <Drawer open={leftOpen} onClose={() => setLeftOpen(false)} side="left">
            <div className="p-4">
              <h2 className="text-base font-semibold mb-2">{t('Selected Works')}</h2>
              <SelectedList />
            </div>
          </Drawer>
          <Drawer open={rightOpen} onClose={() => setRightOpen(false)} side="right">
            <div className="p-4">
              <TravelPlanPanel onRouteReady={setRouteCoords} origin={origin} originCoords={origin ? countryCenters[origin] : null} />
            </div>
          </Drawer>
        </div>
      </SelectionProvider>
    </Suspense>
  );
}

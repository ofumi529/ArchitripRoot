import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useMemo } from 'react';
import { works } from '../data/works';
import { useSelection } from '../context/SelectionContext';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// fix icon urls
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView() {
  const { selected, toggleSelection } = useSelection();
  const center = useMemo<L.LatLngExpression>(() => [20, 0], []);

  return (
    <MapContainer center={center} zoom={2} scrollWheelZoom={true} className="h-full w-full z-0">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {works.map((work) => (
        <Marker
          key={work.id}
          position={[work.location.lat, work.location.lng]}
          eventHandlers={{
            click: () => toggleSelection(work),
          }}
        >
          <Popup>
            <div className="text-sm">
              <strong>{work.name}</strong>
              <br />
              {work.architect} ({work.year})
              <br />
              {work.location.city}, {work.location.country}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}, TileLayer, Marker, Popup } from 'react-leaflet';
import { useSelection } from '../context/SelectionContext';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { works } from '../data/works';
import { useMemo } from 'react';

// Fix default marker icon path issues in Leaflet + Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function MapView() {
  const { selected, toggleSelection } = useSelection();
  const center: [number, number] = useMemo(() => [20, 0], []);

  return (
    <MapContainer center={center} zoom={2} scrollWheelZoom={true} className="h-full w-full z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {works.map((work) => {
        const isSelected = selected.some((w) => w.id === work.id);
        return (
                <br />
                {work.location.city}, {work.location.country}
              </div>
            </Popup>
          </Marker>
        );
      })}
              {work.architect} ({work.year})
              <br />
              {work.location.city}, {work.location.country}
            </div>
          </Popup>
        </Marker>
      );
      })
    </MapContainer>
  );
}

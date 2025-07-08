import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import { useMemo } from 'react';
import { works } from '../data/works';
import { useSelection } from '../context/SelectionContext';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker icon paths when bundling via Vite
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Props {
  route: [number, number][];
}

export default function CleanMapView({ route }: Props) {
  const { toggleSelection } = useSelection();
  const center = useMemo<LatLngExpression>(() => [20, 0], []);

  return (
    <MapContainer id="planner-map" center={center} zoom={2} scrollWheelZoom={true} className="h-full w-full z-0">
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {works.map((work) => (
        <Marker
          key={work.id}
          position={[work.location.lat, work.location.lng]}
          eventHandlers={{ click: () => toggleSelection(work) }}
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
      {route.length > 1 && <Polyline positions={route} color="red" />}
    </MapContainer>
  );
}

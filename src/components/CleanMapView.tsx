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

// Color palette for architects
const palette = [
  '#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000',
];
const colorMap: Record<string, string> = {};
function getColor(key: string): string {
  if (!colorMap[key]) {
    const idx = Object.keys(colorMap).length % palette.length;
    colorMap[key] = palette[idx];
  }
  return colorMap[key];
}
function createIcon(color: string): L.DivIcon {
  return L.divIcon({
    className: 'architect-marker',
    html: `<div style="background:${color}; width:20px; height:20px; border-radius:50% 50% 50% 0; transform: rotate(-45deg); border:2px solid #fff; box-shadow:0 0 2px rgba(0,0,0,.3);"></div>`,
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [0, -20],
  });
}

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
          icon={createIcon(getColor(work.architect))}
          eventHandlers={{ click: () => toggleSelection(work) }}
        >
          <Popup>
            <div className="text-sm flex flex-col items-center">
              {work.imageUrl && (
                <img src={work.imageUrl} alt={work.name} className="w-32 h-20 object-cover mb-1 grayscale" />
              )}
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

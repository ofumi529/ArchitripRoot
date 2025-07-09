import { ArchitecturalWork } from '../types/models';

// Haversine distance in km
export function haversine(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Simple nearest-neighbor TSP approximation
export function planRoute(selected: ArchitecturalWork[], origin: [number, number]): ArchitecturalWork[] {
  if (selected.length === 0) return [];
  if (selected.length === 1) return selected;
  const remaining = [...selected];
  const route: ArchitecturalWork[] = [];
  // start from origin (not removed from remaining list because origin is not in it)
  // pick nearest to origin as first
  let nearestIdx = 0;
  let nearestDist = Number.POSITIVE_INFINITY;
  remaining.forEach((w, idx) => {
    const d = haversine(origin[0], origin[1], w.location.lat, w.location.lng);
    if (d < nearestDist) {
      nearestDist = d;
      nearestIdx = idx;
    }
  });
  let current = remaining.splice(nearestIdx, 1)[0];
  route.push(current);

  while (remaining.length) {
    let nearestIdx = 0;
    let nearestDist = Number.POSITIVE_INFINITY;
    remaining.forEach((w, idx) => {
      const d = haversine(
        current.location.lat,
        current.location.lng,
        w.location.lat,
        w.location.lng
      );
      if (d < nearestDist) {
        nearestDist = d;
        nearestIdx = idx;
      }
    });
    current = remaining.splice(nearestIdx, 1)[0];
    route.push(current);
  }
  return route;
}

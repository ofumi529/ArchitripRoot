export type TransportMode = 'flight' | 'train' | 'bus' | 'car';

const speedKmPerH: Record<TransportMode, number> = {
  flight: 800,
  train: 200,
  bus: 80,
  car: 100,
};

const costPerKm: Record<TransportMode, number> = {
  flight: 0.15,
  train: 0.09,
  bus: 0.05,
  car: 0.07,
};

export function estimateDuration(distanceKm: number, mode: TransportMode): number {
  return distanceKm / speedKmPerH[mode]; // hours
}

export function estimateCost(distanceKm: number, mode: TransportMode): number {
  return distanceKm * costPerKm[mode]; // USD
}

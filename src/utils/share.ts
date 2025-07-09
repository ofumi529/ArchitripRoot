import { TransportMode } from './transport';

export interface ShareState {
  origin: string;
  selectedIds: string[]; // ArchitecturalWork ids
  segments: { mode: TransportMode }[];
}

export function generateShareUrl(state: ShareState): string {
  const payload = btoa(JSON.stringify(state));
  const url = new URL(window.location.href);
  url.searchParams.set('plan', payload);
  return url.toString();
}

import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TransportMode, estimateCost, estimateDuration } from './transport';

interface SegmentSummary {
  label: string;
  distanceKm: number;
  mode: TransportMode;
}

interface PdfPlanData {
  title: string;
  origin: string;
  segments: SegmentSummary[];
  totalDistance: number;
  mapDataUrl?: string; // base64 png
}

export function exportPlanToPdf(data: PdfPlanData) {
  const doc = new jsPDF('p', 'mm', 'a4');
  let y = 15;

  if (data.mapDataUrl) {
    // add map image full width with aspect ratio ~16:9
    const imgWidth = 180;
    const imgHeight = 100;
    doc.addImage(data.mapDataUrl, 'PNG', 15, y, imgWidth, imgHeight);
    y += imgHeight + 5;
  }

  doc.setFontSize(14);
  doc.text(data.title, 105, y, { align: 'center' });
  y += 8;
  doc.setFontSize(10);
  doc.text(`Origin: ${data.origin}`, 15, y);
  y += 5;
  doc.text(`Total Distance: ${data.totalDistance} km`, 15, y);
  const totalTime = data.segments.reduce((acc, s) => acc + estimateDuration(s.distanceKm, s.mode), 0);
  const totalCost = data.segments.reduce((acc, s) => acc + estimateCost(s.distanceKm, s.mode), 0);
  y += 5;
  doc.text(`Total Time: ${Math.round(totalTime)} h`, 15, y);
  y += 5;
  doc.text(`Total Cost: $${Math.round(totalCost)}`, 15, y);
  y += 8;

  // build table rows for autoTable
  const rows = data.segments.map((s) => {
    const t = Math.round(estimateDuration(s.distanceKm, s.mode));
    const c = Math.round(estimateCost(s.distanceKm, s.mode));
    return [s.label, s.mode, s.distanceKm, t, c];
  });

  autoTable(doc, {
    head: [['Leg', 'Mode', 'Dist (km)', 'Time (h)', 'Cost ($)']],
    body: rows,
    startY: y,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [230, 230, 230] },
    columnStyles: {
      0: { cellWidth: 60 },
      1: { cellWidth: 20, halign: 'center' },
      2: { cellWidth: 25, halign: 'right' },
      3: { cellWidth: 25, halign: 'right' },
      4: { cellWidth: 25, halign: 'right' },
    },
  });

  doc.save('travel-plan.pdf');
}

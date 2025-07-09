interface Props {
  current: 'origin' | 'select' | 'plan';
}

const steps: { id: 'origin' | 'select' | 'plan'; label: string }[] = [
  { id: 'origin', label: '出発地' },
  { id: 'select', label: '作品を選ぶ' },
  { id: 'plan', label: 'ルート生成' },
];

export default function StepProgress({ current }: Props) {
  const index = steps.findIndex((s) => s.id === current);
  return (
    <ol className="flex justify-center bg-slate-900 text-stone-200 text-xs tracking-wide select-none shadow-inner font-display">
      {steps.map((step, i) => {
        const done = i < index;
        const active = i === index;
        return (
          <li
            key={step.id}
            className={`flex-1 text-center px-3 py-2 border-r border-stone-700 last:border-none ${done ? 'bg-amber-700/30' : ''} ${active ? 'bg-amber-700 text-white font-semibold' : ''}`}
          >
            {done ? '✔ ' : ''}
            {step.label}
          </li>
        );
      })}
    </ol>
  );
}

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
    <ol className="flex justify-center bg-stone-900 text-stone-100 text-xs tracking-wide select-none shadow-inner">
      {steps.map((step, i) => {
        const done = i < index;
        const active = i === index;
        return (
          <li
            key={step.id}
            className={`flex-1 text-center px-3 py-2 border-r border-stone-700 last:border-none ${done ? 'bg-amber-700/40' : ''} ${active ? 'bg-amber-600 text-white font-semibold' : ''}`}
          >
            {done ? '✔ ' : ''}
            {step.label}
          </li>
        );
      })}
    </ol>
  );
}

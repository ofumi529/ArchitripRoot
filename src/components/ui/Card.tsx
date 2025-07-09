interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Card({ title, children, className = '' }: Props) {
  return (
    <div className={`bg-white shadow rounded p-4 ${className}`}>
      {title && <h3 className="font-semibold mb-2 text-sm">{title}</h3>}
      {children}
    </div>
  );
}

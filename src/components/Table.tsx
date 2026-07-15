interface TableProps {
  title: string;
  children: React.ReactNode;
}

function Table({
  title,
  children,
}: TableProps) {
  return (
    <div
      className="
        mb-8
        overflow-hidden
        rounded-xl
        border
        border-slate-300
        bg-white
        shadow-md
      "
    >
      <div
        className="
          bg-gradient-to-r
          from-slate-800
          to-slate-700
          px-6
          py-4
          text-lg
          font-bold
          text-white
        "
      >
        {title}
      </div>

      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

export default Table;
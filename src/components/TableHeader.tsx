interface TableHeaderProps {
  children: React.ReactNode;
}

function TableHeader({ children }: TableHeaderProps) {
  return (
    <th
      className="
        border
        border-slate-300
        bg-slate-800
        px-5
        py-3
        text-left
        text-sm
        font-semibold
        text-white
      "
    >
      {children}
    </th>
  );
}

export default TableHeader;
interface TableCellProps {
  children: React.ReactNode;
}

function TableCell({ children }: TableCellProps) {
  return (
    <td
      className="
        border
        border-slate-300
        px-5
        py-3
        text-sm
        text-slate-700
      "
    >
      {children}
    </td>
  );
}

export default TableCell;
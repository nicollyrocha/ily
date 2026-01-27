export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="bg-[#C48B9F] text-white px-4 py-2 rounded hover:bg-[#b37085] transition shadow-md cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

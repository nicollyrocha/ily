import { FadeIn } from "./FadeIn";

export const Card = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <FadeIn>
      <div
        className={`bg-[#E6C7CE] border border-[#C48B9F] p-4 rounded shadow-md xl:w-96 h-64 flex items-center justify-center ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    </FadeIn>
  );
};

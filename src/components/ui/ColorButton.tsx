type Props = {
  text: string;
  onClick: (...args: unknown[]) => void;
  size?: "small" | "big";
};
export default function ColorButton({ text, onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.2rem] ${size === "big" ? "p-[0.3rem]" : "p-[0.15rem]"}`}
    >
      <button
        onClick={onClick}
        className={`bg-white rounded-sm text-base p-[0.3rem] hover:opacity-95 transition-opacity 
          ${size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"}`}
      >
        {text}
      </button>
    </div>
  );
}

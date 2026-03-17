import clsx from "clsx";
import type { ReactNode } from "react";

type ModeButtonProps = {
  children: ReactNode;
  className?: string;
};

export function ModeButton({ children, className }: ModeButtonProps) {
  return (
    <div
      className={clsx(
        "h-14 rounded bg-sky-600 px-4 py-2 text-base text-white hover:bg-sky-500 active:bg-sky-700",
        className,
      )}
    >
      {children}
    </div>
  );
}

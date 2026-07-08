import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlassTable({ children }: Props) {
  return (
    <div className="overflow-x-auto rounded-[28px] border border-[oklch(88%_0.04_247)] bg-[oklch(99%_0.006_250/0.9)] shadow-[0_18px_48px_oklch(38%_0.12_252/10%)] backdrop-blur-xl">
      <table className="w-full min-w-[720px]">{children}</table>
    </div>
  );
}

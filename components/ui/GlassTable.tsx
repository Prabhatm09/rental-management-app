import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function GlassTable({ children }: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
      <table className="w-full">{children}</table>
    </div>
  );
}
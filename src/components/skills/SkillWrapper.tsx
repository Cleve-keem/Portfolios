import { ReactNode } from "react";

export default function SkillWrapper({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export function SkillLabel({ children }: { children: string }) {
  return <h3 className="font-medium mb-4">{children}</h3>;
}

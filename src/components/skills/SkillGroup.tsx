import { ReactNode, ComponentPropsWithoutRef } from "react";

interface SkillGroupProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export function SkillGroup({ children, className, ...props }: SkillGroupProps) {
  return (
    <div className={`mb-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function SkillLabel({ children }: { children?: string }) {
  return <h3 className="font-medium mb-4">{children}</h3>;
}

export function SkillContent({
  children,
  className,
  ...props
}: SkillGroupProps) {
  return (
    <div
      className={`p-4 border border-border-muted rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

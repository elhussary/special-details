import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  gradient?: boolean;
  id?: string;
}

export const Section = ({ children, className, gradient = false, id }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-20 px-4 md:px-8 lg:px-16",
        gradient && "gradient-section",
        className
      )}
    >
      {children}
    </section>
  );
};
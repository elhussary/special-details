import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "backdrop-blur-md bg-card/30 border border-border/20 rounded-3xl p-8 shadow-card hover:shadow-elegant transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
};
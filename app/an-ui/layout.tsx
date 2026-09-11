import type { Metadata } from "next";

import "@/design-system/styles/globals.css";
import { MotionProvider } from "@/design-system/components/motion/motion-provider";

export const metadata: Metadata = {
  title: "an-ui/shadcn — design system",
  description: "shadcn-baseret designsystem i ink/paper/lime-paletten.",
};

export default function DesignSystemLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="ds min-h-svh bg-background text-foreground">
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}

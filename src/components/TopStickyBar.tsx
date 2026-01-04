import React, { useEffect, useState } from "react";
import { motion, type Easing } from "framer-motion";
import { cn } from "@/lib/utils";

interface TopStickyBarProps {
  show?: boolean;
  showOnScroll?: boolean;
  scrollThreshold?: number;
  children: React.ReactNode;
  className?: string;
  duration?: number;
  ease?: Easing | Easing[] | string;
  initialY?: number;
  visibleY?: number;
  hiddenY?: number;
  /**
   * When true the sticky bar will ignore other visibility checks and remain visible.
   * Useful for testing.
   */
  forceShow?: boolean;
  /**
   * Optional static controls placed on the right side of the bar (not part of the marquee)
   */
  controls?: React.ReactNode;
}

export default function TopStickyBar({
  show: externalShow = true,
  showOnScroll = false,
  scrollThreshold = 200,
  children,
  className,
  duration = 0.1,
  ease = "easeInOut",
  initialY = -50,
  visibleY = 0,
  hiddenY = -50,
  forceShow = false,
  controls,
}: TopStickyBarProps) {
  const [internalShow, setInternalShow] = useState<boolean>(externalShow);

  // scroll-based visibility (unchanged)
  useEffect(() => {
    if (!showOnScroll) {
      setInternalShow(externalShow);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setInternalShow(true);
      } else {
        setInternalShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showOnScroll, scrollThreshold, externalShow]);

  // Final visibility: either controlled by scroll, the explicit `show` prop, or forceShow.
  const finalShow = (showOnScroll ? internalShow : externalShow) || forceShow;

  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      animate={{ y: finalShow ? visibleY : hiddenY, opacity: finalShow ? 1 : 0 }}
      transition={{ duration, ease }}
      className={cn(
        "fixed top-0 left-0 w-full z-[60] py-2 text-sm text-center shadow-md relative",
        className
      )}
    >
      <div className="overflow-hidden pr-0 sm:pr-20">
        {/* marquee animation: move the inner content from 100% -> -100% and loop */}
        <motion.div
          className="inline-block whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 12 }}
        >
          <span className="px-4">{children}</span>
          <span className="px-4">{children}</span>
        </motion.div>
      </div>

      {controls && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2">
          {controls}
        </div>
      )}
    </motion.div>
  );
}

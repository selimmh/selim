"use client";

import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { useRef, useState } from "react";

const cardStyle =
  "flex flex-col px-4 py-4 relative hover:highlight sm:hover:!bg-transparent rounded-xl transition-colors duration-300";

interface TabsProps {
  tabs: Project[];
  className?: string;
}

export default function Tabs({ tabs, className }: TabsProps): JSX.Element {
  const [highlightedTab, setHighlightedTab] = useState<HTMLElement | null>(
    null
  );
  const [isHoveredFromNull, setIsHoveredFromNull] = useState(true);
  const [transform, setTransform] = useState("translate(0, 0");

  const parentRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  function handleMouseOver(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    const node = event.target as HTMLElement;
    const parent = parentRef.current!;

    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(node);

    const tabBoundingBox = node.getBoundingClientRect();
    const parentBoundingBox = parent.getBoundingClientRect();
    const highlightOffset = tabBoundingBox.top - parentBoundingBox.top;

    // exit early if event triggered by children
    if (node.className === cardStyle) {
      setTransform(`translate(0, ${highlightOffset}px)`);
    }
  }

  return (
    <div className={className}>
      <div
        ref={parentRef}
        className="relative"
        onMouseLeave={() => setHighlightedTab(null)}
      >
        {/* Highlighter */}
        <div
          ref={highlightRef}
          className={cn(
            "absolute hidden h-[96px] w-full sm:block",
            "duration-200",
            isHoveredFromNull ? "transition-none" : "transition-transform "
          )}
          style={{ transform }}
        >
          <div
            className={cn(
              "h-full w-full rounded-xl highlight",
              highlightedTab ? "opacity-100" : "opacity-0",
              "transition-opacity duration-300"
            )}
          />
        </div>
        {tabs.map((item, i) => (
          <a
            key={i}
            href={item.live}
            className={cardStyle}
            onMouseOver={handleMouseOver}
            target={item.disabled ? "" : "_blank"}
          >
            <h3 className="text-xl">
              {item.title}{" "}
              <span className="opacity-50 text-sm">
                {item.disabled ? "[soon]" : ""}
              </span>
            </h3>
            <p className="mt-2 text-md opacity-50">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

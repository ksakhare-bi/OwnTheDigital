"use client";

import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => {
  return (
    <div
      className={`scroll-stack-card relative w-full origin-top ${itemClassName}`.trim()}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
    >
      {children}
    </div>
  );
};

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  itemDistance = 100,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const cardsRef = useRef<HTMLElement[]>([]);
  const cardPositionsRef = useRef<number[]>([]);

  const rafRef = useRef<number | null>(null);
  const tickingRef = useRef(false);
  const completedRef = useRef(false);

  /**
   * Convert percentage values such as "15%"
   * into pixels.
   */
  const parsePosition = useCallback(
    (value: string | number, height: number) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * height;
      }

      return Number(value);
    },
    [],
  );

  /**
   * Get the current scroll position.
   */
  const getScrollTop = useCallback(() => {
    if (useWindowScroll) {
      return window.scrollY;
    }

    return scrollerRef.current?.scrollTop ?? 0;
  }, [useWindowScroll]);

  /**
   * Get the viewport/container height.
   */
  const getContainerHeight = useCallback(() => {
    if (useWindowScroll) {
      return window.innerHeight;
    }

    return scrollerRef.current?.clientHeight ?? 0;
  }, [useWindowScroll]);

  const measureCards = useCallback(() => {
    const cards = cardsRef.current;

    if (!cards.length) {
      return;
    }

    cards.forEach((card) => {
      card.style.position = "static";
      card.style.transform = "none";
      card.style.marginBottom = "0px";
      card.style.paddingBottom = "0px";
      card.style.marginTop = "0px";
    });

    const intrinsicHeights = cards.map((card) => card.offsetHeight);

    // Define stackPositionPx inside measureCards
    const containerHeight = getContainerHeight() || window.innerHeight;
    const stackPositionPx = parsePosition(stackPosition, containerHeight);

    // Calculate the push thresholds for each card using their actual heights
    const pushValues = intrinsicHeights.map((h, i) => h + stackPositionPx + i * itemStackDistance);
    const maxPush = Math.max(...(pushValues.length ? pushValues : [0]));
    const C = maxPush + itemDistance;

    // Apply the perfectly calculated dynamic padding/margin to align sticky bottoms
    cards.forEach((card, i) => {
      const paddingBottom = C - pushValues[i];
      const marginTop = i === 0 ? 0 : itemDistance - (C - pushValues[i - 1]);

      card.style.paddingBottom = `${paddingBottom}px`;
      card.style.marginTop = `${marginTop}px`;
    });

    const scrollTop = getScrollTop();

    cardPositionsRef.current = cards.map((card) => {
      if (useWindowScroll) {
        return card.getBoundingClientRect().top + scrollTop;
      }

      return card.offsetTop;
    });

    // Restore sticky
    cards.forEach((card) => {
      card.style.position = "sticky";
    });
  }, [getContainerHeight, getScrollTop, itemDistance, itemStackDistance, parsePosition, stackPosition, useWindowScroll]);

  /**
   * Update all card transforms.
   */
  const updateCards = useCallback(() => {
    tickingRef.current = false;

    const cards = cardsRef.current;

    if (!cards.length) {
      return;
    }

    const scrollTop = getScrollTop();
    const containerHeight = getContainerHeight();

    if (!containerHeight) {
      return;
    }

    const stackPositionPx = parsePosition(
      stackPosition,
      containerHeight,
    );

    const positions = cardPositionsRef.current;

    if (positions.length !== cards.length) {
      measureCards();
    }

    const currentPositions = cardPositionsRef.current;

    /**
     * Find the end of the stack.
     */
    const endElement = useWindowScroll
      ? (document.querySelector(
        ".scroll-stack-end",
      ) as HTMLElement | null)
      : (scrollerRef.current?.querySelector(
        ".scroll-stack-end",
      ) as HTMLElement | null);

    const endTop = endElement
      ? useWindowScroll
        ? endElement.getBoundingClientRect().top + scrollTop
        : endElement.offsetTop
      : 0;

    const pinEnd = endTop - containerHeight / 2;

    cards.forEach((card, index) => {
      // Apply native sticky pinning dynamically
      card.style.top = `${stackPositionPx + itemStackDistance * index}px`;

      const cardTop = currentPositions[index];

      if (cardTop == null) {
        return;
      }

      /**
       * When the card starts stacking.
       */
      const pinStart =
        cardTop -
        stackPositionPx -
        itemStackDistance * index;

      /**
       * Calculate how deep this card is in the stack (coveredDepth).
       * 0 = on top. 1 = covered by 1 card. 2 = covered by 2 cards, etc.
       * This increases continuously as subsequent cards scroll up and pin.
       */
      let coveredDepth = 0;
      const totalCards = cards.length;
      for (let j = index + 1; j < totalCards; j++) {
        const pinStart_j = currentPositions[j] - stackPositionPx - itemStackDistance * j;
        const pinStart_prev = currentPositions[j-1] - stackPositionPx - itemStackDistance * (j-1);
        
        const progress = Math.max(0, Math.min(1, (scrollTop - pinStart_prev) / Math.max(1, pinStart_j - pinStart_prev)));
        coveredDepth += progress;
      }

      /**
       * Scale down background cards to hide their straight edges behind the rounded corners of the front card.
       * We use a fixed 4% scale reduction per depth level to perfectly nest the cards.
       */
      const scale = 1 - coveredDepth * 0.04;
      const rotation = rotationAmount ? index * rotationAmount * Math.min(1, coveredDepth) : 0;
      const transform = `scale(${scale.toFixed(4)}) rotate(${rotation.toFixed(2)}deg)`;
      
      const innerCard = card.querySelector(".scroll-stack-card-inner") as HTMLElement | null;
      if (innerCard) {
        innerCard.style.transform = transform;
      }

      /**
       * Fade content opacity as it goes deeper into the background.
       * We expose this as a CSS variable so the inner content can fade 
       * while the card's background and border remain fully visible!
       */
      let contentOpacity = 1;
      if (coveredDepth > 0.1) {
        contentOpacity = 1 - (coveredDepth - 0.1) * 1.2;
        contentOpacity = Math.max(0, Math.min(1, contentOpacity));
      }
      card.style.setProperty("--stack-content-opacity", contentOpacity.toFixed(3));
      card.style.opacity = "1"; // Keep card itself solid

      /**
       * Optional blur for depth effect.
       */
      if (blurAmount > 0) {
        card.style.filter = `blur(${(coveredDepth * blurAmount).toFixed(2)}px)`;
      } else {
        card.style.filter = "none";
      }

      /**
       * Keep stacked cards ordered correctly.
       */
      card.style.zIndex = String(index);

      /**
       * Detect when the final card enters
       * the stack area.
       */
      if (index === cards.length - 1) {
        const isInView =
          scrollTop >= pinStart &&
          scrollTop <= pinEnd;

        if (
          isInView &&
          !completedRef.current
        ) {
          completedRef.current = true;
          onStackComplete?.();
        }

        if (!isInView) {
          completedRef.current = false;
        }
      }
    });
  }, [
    getScrollTop,
    getContainerHeight,
    parsePosition,
    stackPosition,
    itemStackDistance,
    rotationAmount,
    blurAmount,
    measureCards,
    useWindowScroll,
    onStackComplete,
  ]);

  /**
   * Schedule a single animation frame.
   *
   * Multiple scroll events during the same frame
   * will only cause one update.
   */
  const requestUpdate = useCallback(() => {
    if (tickingRef.current) {
      return;
    }

    tickingRef.current = true;

    rafRef.current =
      requestAnimationFrame(updateCards);
  }, [updateCards]);

  useLayoutEffect(() => {
    const container = scrollerRef.current;

    if (!useWindowScroll && !container) {
      return;
    }

    /**
     * Get cards.
     */
    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll(
          ".scroll-stack-card",
        )
        : container?.querySelectorAll(
          ".scroll-stack-card",
        ) ?? [],
    ) as HTMLElement[];

    cardsRef.current = cards;

    /**
     * Initial card setup.
     */
    cards.forEach((card) => {
      // Dynamic padding/margin for simultaneous release is handled in measureCards!
      card.style.position = "sticky";
      card.style.willChange = "transform";

      card.style.transformOrigin =
        "top center";

      card.style.backfaceVisibility =
        "hidden";

      card.style.webkitBackfaceVisibility =
        "hidden";

      card.style.transform =
        "translate3d(0, 0, 0)";
    });

    /**
     * Calculate initial positions.
     */
    measureCards();

    /**
     * Render initial state.
     */
    updateCards();

    /**
     * Listen to scroll.
     */
    const scrollTarget = useWindowScroll
      ? window
      : container;

    scrollTarget?.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    /**
     * Observe card size changes.
     *
     * This is particularly important because
     * your accordion can change card height.
     */
    const resizeObserver =
      new ResizeObserver(() => {
        measureCards();
        requestUpdate();
      });

    if (container) {
      resizeObserver.observe(container);
    }

    cards.forEach((card) => {
      resizeObserver.observe(card);
    });

    /**
     * Handle browser resize.
     */
    window.addEventListener(
      "resize",
      requestUpdate,
      {
        passive: true,
      },
    );

    return () => {
      scrollTarget?.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      resizeObserver.disconnect();

      if (rafRef.current !== null) {
        cancelAnimationFrame(
          rafRef.current,
        );
      }

      cards.forEach((card) => {
        card.style.transform = "";
        card.style.filter = "";
        card.style.willChange = "";
        card.style.marginBottom = "";
        card.style.paddingBottom = "";
        card.style.marginTop = "";
        card.style.zIndex = "";
      });

      cardsRef.current = [];
      cardPositionsRef.current = [];
      completedRef.current = false;
      tickingRef.current = false;
      rafRef.current = null;
    };
  }, [
    useWindowScroll,
    itemDistance,
    measureCards,
    requestUpdate,
    updateCards,
  ]);

  return (
    <div
      ref={scrollerRef}
      className={`relative w-full ${useWindowScroll
        ? "overflow-visible"
        : "h-full overflow-y-auto overflow-x-visible"
        } ${className}`.trim()}
      style={{
        overscrollBehavior: "contain",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <div className="scroll-stack-inner w-full">
        {children}

        {/* Spacer so the final card can release cleanly */}
        <div className="scroll-stack-end h-px w-full" />
      </div>
    </div>
  );
};

export default ScrollStack;
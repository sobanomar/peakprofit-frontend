import React, { useEffect, useRef, forwardRef } from "react";
import { gsap } from "gsap";

const LiquidGlassButton = forwardRef(
  (
    {
      children,
      width = 300,
      height = 56,
      className = "",
      style = {},
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const internalRef = useRef(null);
    const buttonRef = ref || internalRef;

    const displacerRef = useRef(null);
    const blurRef = useRef(null);

    // Base64 encoded displacement map (turbulence pattern)
    const DISPLACEMENT_MAP_URI =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9ImRpc3BsYWNlbWVudE1hcCI+PGZlVHVyYnVsZW5jZSB0eXBlPSJ0dXJidWxlbmNlIiBiYXNlRnJlcXVlbmN5PSIwLjAzIiBudW1PY3RhdmVzPSIzIiByZXN1bHQ9InR1cmJ1bGVuY2UiLz48ZmVDb2xvck1hdHJpeCBpbj0idHVyYnVsZW5jZSIgdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgcmVzdWx0PSJncmF5c2NhbGUiLz48L2ZpbHRlcj48L3N2Zz4=";

    const SPECULAR_LIGHTING_URI =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxmaWx0ZXIgaWQ9InNwZWN1bGFyIj48ZmVTcGVjdWxhckxpZ2h0aW5nIHN1cmZhY2VTY2FsZT0iNSIgc3BlY3VsYXJDb25zdGFudD0iMSIgc3BlY3VsYXJFeHBvbmVudD0iMjAiIGxpZ2h0aW5nLWNvbG9yPSIjZmZmZmZmIj48ZmVQb2ludExpZ2h0IHg9IjE1MCIgeT0iNTAiIHo9IjEwMCIvPjwvZmVTcGVjdWxhckxpZ2h0aW5nPjwvZmlsdGVyPjwvc3ZnPg==";

    const ANIMATION_CONFIG = {
      initial: { scale: 1, displacement: 55, blur: 1 },
      hover: { scale: 1.08, displacement: 125, blur: 4 },
      click: { scaleDown: 0.92, scaleUp: 1.08 },
      duration: { hover: 0.25, clickDown: 0.08, clickUp: 0.25 },
      ease: {
        hover: "back.out(1.4)",
        hoverOut: "power2.out",
        clickDown: "power2.in",
        clickUp: "back.out(2)",
      },
    };

    useEffect(() => {
      const button = buttonRef.current;
      const displacer = displacerRef.current;
      const blur = blurRef.current;

      if (!button || !displacer || !blur || disabled) return;

      const effects = {
        displacement: ANIMATION_CONFIG.initial.displacement,
        blur: ANIMATION_CONFIG.initial.blur,
      };

      const updateSVGAttributes = () => {
        displacer.setAttribute("scale", effects.displacement);
        blur.setAttribute("stdDeviation", effects.blur);
      };

      const handleMouseEnter = () => {
        gsap.killTweensOf([effects, button]);
        gsap.to(effects, {
          displacement: ANIMATION_CONFIG.hover.displacement,
          blur: ANIMATION_CONFIG.hover.blur,
          duration: ANIMATION_CONFIG.duration.hover,
          ease: ANIMATION_CONFIG.ease.hover,
          onUpdate: updateSVGAttributes,
        });
        gsap.to(button, {
          scale: ANIMATION_CONFIG.hover.scale,
          duration: ANIMATION_CONFIG.duration.hover,
          ease: ANIMATION_CONFIG.ease.hover,
        });
      };

      const handleMouseLeave = () => {
        gsap.killTweensOf([effects, button]);
        gsap.to(effects, {
          displacement: ANIMATION_CONFIG.initial.displacement,
          blur: ANIMATION_CONFIG.initial.blur,
          duration: ANIMATION_CONFIG.duration.hover,
          ease: ANIMATION_CONFIG.ease.hoverOut,
          onUpdate: updateSVGAttributes,
        });
        gsap.to(button, {
          scale: ANIMATION_CONFIG.initial.scale,
          duration: ANIMATION_CONFIG.duration.hover,
          ease: ANIMATION_CONFIG.ease.hoverOut,
        });
      };

      const handleClick = () => {
        gsap.killTweensOf(button);
        const currentScale = gsap.getProperty(button, "scale");
        gsap
          .timeline()
          .to(button, {
            scale: currentScale * ANIMATION_CONFIG.click.scaleDown,
            duration: ANIMATION_CONFIG.duration.clickDown,
            ease: ANIMATION_CONFIG.ease.clickDown,
          })
          .to(button, {
            scale: ANIMATION_CONFIG.click.scaleUp,
            duration: ANIMATION_CONFIG.duration.clickUp,
            ease: ANIMATION_CONFIG.ease.clickUp,
          });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("click", handleClick);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("click", handleClick);
        gsap.killTweensOf([button, effects]);
      };
    }, [disabled]);

    const filterId = useRef(
      `liquid-glass-filter-${Math.random().toString(36).substr(2, 9)}`,
    ).current;

    return (
      <>
        {/* <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur
                ref={blurRef}
                in="SourceGraphic"
                stdDeviation="1"
              />
              <feColorMatrix in="blur" type="saturate" values="1.2" />
              <feImage
                xlinkHref={DISPLACEMENT_MAP_URI}
                result="displacementMap"
              />
              <feDisplacementMap
                ref={displacerRef}
                in="SourceGraphic"
                in2="displacementMap"
                scale="55"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feImage xlinkHref={SPECULAR_LIGHTING_URI} result="lighting" />
              <feComposite
                in="SourceGraphic"
                in2="lighting"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="0.3"
                k4="0"
              />
            </filter>
          </defs>
        </svg> */}

        <button
          ref={buttonRef}
          className={`${className}`}
          disabled={disabled}
          style={{
            border: "none",
            borderRadius: "100px",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1)) 100%)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",

            boxShadow: `
  /* white highlights */
  inset -2px -2px 6px rgba(255, 255, 255, 0.3),
  inset 0 -2px 4px rgba(255, 255, 255, 0.2),
  
  /* black shadows */
  0 0 20px rgba(0, 0, 0, 0.1)
`,

            cursor: disabled ? "not-allowed" : "pointer",
            color: "#fff",
            fontWeight: "600",
            fontFamily: "system-ui, -apple-system, sans-serif",
            filter: `url(#${filterId})`,
            position: "relative",
            transition: "opacity 0.2s ease",
            opacity: disabled ? 0.5 : 1,
            outline: "none",
            userSelect: "none",
            WebkitUserSelect: "none",
            ...style,
          }}
          {...props}
        >
          {children}
        </button>
      </>
    );
  },
);

LiquidGlassButton.displayName = "LiquidGlassButton";

export default LiquidGlassButton;

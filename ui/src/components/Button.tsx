import type { ReactNode } from "react";
import { cx } from "../cx.js";

export interface ButtonProps {
  /** Button label. Rendered uppercase in Geist Mono by the stylesheet. */
  children: ReactNode;
  /**
   * Surface treatment. `light` is the standard call to action on an ink
   * ground; `accent` on paper; `ink` on the lime contact block; `outline`
   * is the quiet secondary anywhere.
   */
  variant?: "light" | "ink" | "accent" | "outline";
  /** Renders an anchor instead of a button when set. */
  href?: string;
  /** Anchor target — only meaningful together with `href`. */
  target?: string;
  /**
   * Trailing glyph, set apart from the label by a wide gap. The site uses
   * `↓` to point at the next section and `↗` for outbound links.
   */
  trailingIcon?: ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  "aria-label"?: string;
}

/**
 * The system's primary action. A wide, squared, uppercase mono block with no
 * border radius — every button lifts 2px and flips to the lime accent on
 * hover, whatever variant it started from.
 */
export function Button({
  children,
  variant = "light",
  href,
  target,
  trailingIcon,
  disabled = false,
  type = "button",
  onClick,
  className,
  ...rest
}: ButtonProps) {
  const classes = cx("an-button", `an-button--${variant}`, className);
  const label = (
    <>
      {children}
      {trailingIcon ? <span aria-hidden="true">{trailingIcon}</span> : null}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={disabled ? undefined : href}
        target={target}
        rel={target === "_blank" ? "noreferrer" : undefined}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {label}
      </a>
    );
  }

  return (
    <button className={classes} type={type} disabled={disabled} onClick={onClick} {...rest}>
      {label}
    </button>
  );
}

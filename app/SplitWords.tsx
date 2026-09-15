import type { CSSProperties, ReactNode } from "react";

type SplitWordsProps = {
  /** Words separated by spaces, "\n" for a line break, *word* for emphasis. */
  text: string;
  /** Index offset so several headlines can share one stagger sequence. */
  start?: number;
};

const EMPHASIS = /^(.*?)\*(.+?)\*(.*)$/;

/**
 * Splits a headline into per-word spans so each word can animate on its own.
 * Rendered on the server; only CSS reacts to the --i index.
 */
export function SplitWords({ text, start = 0 }: SplitWordsProps) {
  const nodes: ReactNode[] = [];
  let index = start;

  text.split("\n").forEach((line, lineIndex) => {
    if (lineIndex > 0) nodes.push(<br key={`br-${lineIndex}`} />);

    const words = line.split(/\s+/).filter(Boolean);
    words.forEach((raw, wordIndex) => {
      const match = EMPHASIS.exec(raw);
      const content = match ? (
        <>
          {match[1]}
          <em>{match[2]}</em>
          {match[3]}
        </>
      ) : (
        raw
      );

      nodes.push(
        <span className="w" style={{ "--i": index } as CSSProperties} key={`w-${index}`}>
          <span className="wi">{content}</span>
        </span>
      );
      if (wordIndex < words.length - 1) nodes.push(" ");
      index += 1;
    });
  });

  return <>{nodes}</>;
}

import React from "react";

const URL_REGEX = /https?:\/\/[^\s]+/g;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
const COMBINED_REGEX =
  /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

const FAQArticleTextParser = ({ text, className }) => {
  const parts = text.split(COMBINED_REGEX);

  return (
    <p className={`whitespace-pre-line ${className ?? ""}`}>
      {parts.map((part, i) => {
        if (URL_REGEX.test(part)) {
          URL_REGEX.lastIndex = 0; // reset regex state
          return (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#780dff] underline hover:opacity-80 transition-opacity"
            >
              {part}
            </a>
          );
        }

        if (EMAIL_REGEX.test(part)) {
          EMAIL_REGEX.lastIndex = 0; // reset regex state
          return (
            <a
              key={i}
              href={`mailto:${part}`}
              className="text-[#780dff] underline hover:opacity-80 transition-opacity"
            >
              {part}
            </a>
          );
        }

        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </p>
  );
};

export default FAQArticleTextParser;

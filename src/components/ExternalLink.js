import React from "react";

export default function ExternalLink({ href, className, children, ariaLabel }) {
  if (!href) return null;

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {children} <span aria-hidden="true">↗</span>
      <span className="srOnly"> (opens in a new tab)</span>
    </a>
  );
}

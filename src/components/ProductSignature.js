import React from "react";

export default function ProductSignature({ project, compact = false }) {
  const items = [
    ["Problem", project.signature.problem],
    ["Owned", project.signature.owned],
    ["Operating", project.signature.operating],
    ["Status", `${project.status} · ${project.launchYear}`],
  ];

  return (
    <dl className={`productSignature${compact ? " productSignatureCompact" : ""}`} aria-label={`${project.name} product signature`}>
      {items.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
    </dl>
  );
}

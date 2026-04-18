/**
 * Crisp, purpose-built SVG icons for the family-law practice areas. Rendered
 * inline so they are vector-sharp at any size. Use `className="w-14 h-14"`
 * to size them. Stroke color picks up `currentColor`.
 */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function DivorceIcon(props: React.SVGProps<SVGSVGElement>) {
  // Two linked rings with a break between them — classic divorce symbol
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="22" cy="32" r="12" {...stroke} />
      <path d="M42 32a12 12 0 0 1 12-12" {...stroke} />
      <path d="M42 32a12 12 0 0 0 12 12" {...stroke} />
      <path d="M32 12l6 8-6 8" {...stroke} />
      <path d="M38 20H30" {...stroke} />
    </svg>
  );
}

export function ChildSupportIcon(props: React.SVGProps<SVGSVGElement>) {
  // Balanced scale with a dollar sign
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M32 10v36" {...stroke} />
      <path d="M20 46h24" {...stroke} />
      <path d="M16 20h32" {...stroke} />
      <path d="M16 20l-6 12h12l-6-12z" {...stroke} />
      <path d="M48 20l-6 12h12l-6-12z" {...stroke} />
      <path d="M10 32a6 6 0 0 0 12 0" {...stroke} />
      <path d="M42 32a6 6 0 0 0 12 0" {...stroke} />
      <text
        x="32"
        y="30"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
        fontFamily="var(--font-fraunces), Georgia, serif"
      >
        $
      </text>
    </svg>
  );
}

export function PaternityIcon(props: React.SVGProps<SVGSVGElement>) {
  // Parent silhouette holding child's hand
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="22" cy="18" r="6" {...stroke} />
      <path d="M12 52V36a10 10 0 0 1 20 0v16" {...stroke} />
      <circle cx="46" cy="26" r="4" {...stroke} />
      <path d="M40 52V40a6 6 0 0 1 12 0v12" {...stroke} />
      <path d="M32 44l8 0" {...stroke} />
    </svg>
  );
}

export function ParentingPlanIcon(props: React.SVGProps<SVGSVGElement>) {
  // Two parents + child silhouettes (family group)
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="18" cy="18" r="5" {...stroke} />
      <circle cx="46" cy="18" r="5" {...stroke} />
      <circle cx="32" cy="32" r="4" {...stroke} />
      <path d="M10 48v-6a8 8 0 0 1 16 0v6" {...stroke} />
      <path d="M38 48v-6a8 8 0 0 1 16 0v6" {...stroke} />
      <path d="M25 54v-4a7 7 0 0 1 14 0v4" {...stroke} />
    </svg>
  );
}

export function PrenupIcon(props: React.SVGProps<SVGSVGElement>) {
  // Document with a signature line and a small ring accent
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M16 8h24l10 10v38H16z" {...stroke} />
      <path d="M40 8v10h10" {...stroke} />
      <path d="M24 28h16" {...stroke} />
      <path d="M24 36h16" {...stroke} />
      <path d="M24 44h10" {...stroke} />
      <circle cx="44" cy="46" r="4" {...stroke} />
    </svg>
  );
}

export function ModificationsIcon(props: React.SVGProps<SVGSVGElement>) {
  // Circular refresh arrows — modify existing orders
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path
        d="M50 24A20 20 0 1 0 52 40"
        {...stroke}
      />
      <path d="M50 12v12H38" {...stroke} />
      <circle cx="32" cy="32" r="6" {...stroke} />
    </svg>
  );
}

export function MediationIcon(props: React.SVGProps<SVGSVGElement>) {
  // Handshake — mediation/agreement
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <path d="M8 28l10-8h10l6 6" {...stroke} />
      <path d="M56 28l-10-8H36l-6 6" {...stroke} />
      <path d="M22 42l6 6 6-6" {...stroke} />
      <path d="M30 48l4 4 4-4" {...stroke} />
      <path d="M14 30l10 10" {...stroke} />
      <path d="M50 30L40 40" {...stroke} />
    </svg>
  );
}

export function UncontestedDivorceIcon(props: React.SVGProps<SVGSVGElement>) {
  // Two overlapping rings with a check — agreed-upon dissolution
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <circle cx="24" cy="32" r="10" {...stroke} />
      <circle cx="40" cy="32" r="10" {...stroke} />
      <path d="M28 32l4 4 6-8" {...stroke} strokeWidth={2} />
    </svg>
  );
}

export function CalculatorIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" {...props}>
      <rect x="14" y="8" width="36" height="48" rx="3" {...stroke} />
      <rect x="20" y="14" width="24" height="10" rx="1" {...stroke} />
      <circle cx="24" cy="32" r="2" fill="currentColor" />
      <circle cx="32" cy="32" r="2" fill="currentColor" />
      <circle cx="40" cy="32" r="2" fill="currentColor" />
      <circle cx="24" cy="40" r="2" fill="currentColor" />
      <circle cx="32" cy="40" r="2" fill="currentColor" />
      <circle cx="40" cy="40" r="2" fill="currentColor" />
      <rect x="22" y="46" width="20" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

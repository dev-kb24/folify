type FolifyLogoProps = {
  className?: string
  textClassName?: string
  iconClassName?: string
}

export default function FolifyLogo({ className = '', textClassName = '', iconClassName = '' }: FolifyLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className={`h-8 w-8 ${iconClassName}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="2" y="2" width="36" height="36" rx="11" fill="var(--color-brand)" />
        <path
          d="M14 12.5H26V16H18V19H24V22.5H18V28H14V12.5Z"
          fill="#FFFFFF"
        />
        <circle cx="28.5" cy="12" r="2" fill="#FFFFFF" />
      </svg>
      <span className={`text-lg font-semibold tracking-tight text-gray-900 ${textClassName}`}>Folify</span>
    </span>
  )
}

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function SolutionIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.15}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** Sistemas internos y paneles admin */
export function AdminPanelIcon(props: IconProps) {
  return (
    <SolutionIcon {...props}>
      <rect
        x="10"
        y="14"
        width="60"
        height="52"
        rx="10"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M10 26h60" />
      <circle cx="18.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="30.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <path d="M28 26v40" />
      <rect x="15" y="33" width="8" height="6" rx="2" fill="currentColor" fillOpacity="0.22" />
      <rect x="15" y="43" width="8" height="6" rx="2" />
      <rect x="15" y="53" width="8" height="6" rx="2" />
      <rect x="34" y="33" width="28" height="7" rx="2.5" />
      <rect x="34" y="44" width="28" height="7" rx="2.5" />
      <rect x="34" y="55" width="18" height="7" rx="2.5" />
    </SolutionIcon>
  );
}

/** CRM y gestión comercial */
export function CrmPipelineIcon(props: IconProps) {
  return (
    <SolutionIcon {...props}>
      <circle cx="30" cy="24" r="8.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M16.5 46c2.6-8.4 7.8-12.5 13.5-12.5S40.9 37.6 43.5 46" />
      <circle cx="52" cy="27" r="6.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M42.5 46c1.8-6 5.6-9 9.5-9s7.7 3 9.5 9" />
      <rect
        x="11"
        y="52"
        width="17"
        height="13"
        rx="3.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect x="31.5" y="52" width="17" height="13" rx="3.5" />
      <rect
        x="52"
        y="52"
        width="17"
        height="13"
        rx="3.5"
        fill="currentColor"
        fillOpacity="0.18"
      />
    </SolutionIcon>
  );
}

/** Plataformas digitales a medida */
export function CustomPlatformIcon(props: IconProps) {
  return (
    <SolutionIcon {...props}>
      <rect
        x="10"
        y="16"
        width="60"
        height="48"
        rx="10"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M10 28h60" />
      <circle cx="18.5" cy="22" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24.5" cy="22" r="1.7" fill="currentColor" stroke="none" />
      <rect x="16" y="36" width="22" height="20" rx="4" />
      <rect
        x="42"
        y="36"
        width="22"
        height="9"
        rx="3"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <rect x="42" y="48" width="10" height="8" rx="2.5" />
      <rect x="54" y="48" width="10" height="8" rx="2.5" />
    </SolutionIcon>
  );
}

/** Portales privados e intranets */
export function PrivatePortalIcon(props: IconProps) {
  return (
    <SolutionIcon {...props}>
      <path
        d="M40 12.5 62 21v16.5c0 15.2-10 23.7-22 27.5-12-3.8-22-12.3-22-27.5V21Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <rect x="32" y="38" width="16" height="13" rx="3" />
      <path d="M36 38v-5.2a4 4 0 0 1 8 0V38" />
    </SolutionIcon>
  );
}

/** Dashboards y reportes */
export function DashboardReportsIcon(props: IconProps) {
  return (
    <SolutionIcon {...props}>
      <rect
        x="10"
        y="14"
        width="60"
        height="52"
        rx="10"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M10 26h60" />
      <circle cx="18.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <rect x="16" y="46" width="8" height="14" rx="2" />
      <rect
        x="28"
        y="36"
        width="8"
        height="24"
        rx="2"
        fill="currentColor"
        fillOpacity="0.18"
      />
      <rect x="40" y="41" width="8" height="19" rx="2" />
      <path d="M53 52.5c2.8-6.4 5.6-10 8.6-10 3.2 0 4.8 5.2 8 5.2 1.8 0 3.6-2.2 5.4-6.4" />
      <circle cx="66.8" cy="41.3" r="2.05" fill="currentColor" stroke="none" />
    </SolutionIcon>
  );
}

/** Aplicaciones personalizadas */
export function CustomAppsIcon(props: IconProps) {
  return (
    <SolutionIcon {...props}>
      <rect
        x="22"
        y="10"
        width="36"
        height="60"
        rx="11"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M35 16h10" />
      <rect x="29" y="26" width="10" height="10" rx="2.5" />
      <rect
        x="41"
        y="26"
        width="10"
        height="10"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="29"
        y="40"
        width="10"
        height="10"
        rx="2.5"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect x="41" y="40" width="10" height="10" rx="2.5" />
      <path d="M46 42.6v4.8M43.6 45h4.8" />
      <path d="M36 62h8" />
    </SolutionIcon>
  );
}

export const softwareSolutionIcons = {
  admin: AdminPanelIcon,
  crm: CrmPipelineIcon,
  platform: CustomPlatformIcon,
  portal: PrivatePortalIcon,
  dashboard: DashboardReportsIcon,
  apps: CustomAppsIcon,
} as const;

export type SoftwareSolutionIconId = keyof typeof softwareSolutionIcons;

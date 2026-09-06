import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

export function OpenAiLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.182a5.985 5.985 0 0 0-3.958 2.855 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .511 4.91 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.989 5.989 0 0 0 3.997-2.853 6.056 6.056 0 0 0-.747-7.12zm-9.022 12.608a4.476 4.476 0 0 1-2.876-1.04l.142-.081 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.494zM3.701 17.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.758a.771.771 0 0 0 .781 0l5.843-3.368v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.499 4.499 0 0 1-6.04-2.646zM2.341 7.896a4.485 4.485 0 0 1 2.365-1.973V11.6a.766.766 0 0 0 .388.676l5.814 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786a4.504 4.504 0 0 1-1.646-6.117zm16.596 3.855-4.833-2.387 2.015-1.164a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.407-.667zm2.011-3.023-.142-.085-4.783-2.762a.783.783 0 0 0-.791 0L9.409 9.212V6.879a.086.086 0 0 1 .044-.072l4.83-2.787a4.494 4.494 0 0 1 6.68 4.66zM8.307 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.499 4.499 0 0 1 7.376-3.454l-.142.081-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"
      />
    </svg>
  );
}

/** Anthropic Claude asterisk mark */
export function ClaudeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="#D97757"
        d="M12.8 2.2h-1.6l-.6 7.05L5.6 5.9l-1.1 1.3 5.75 4.05-5.75 4.05 1.1 1.3 4.95-3.85.6 7.05h1.6l.6-7.05 4.95 3.85 1.1-1.3-5.75-4.05 5.75-4.05-1.1-1.3-4.95 3.85L12.8 2.2Z"
      />
    </svg>
  );
}

export function GeminiLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <defs>
        <linearGradient
          id="vixon-gemini-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#1BA1E3" />
          <stop offset="45%" stopColor="#8B6DEF" />
          <stop offset="75%" stopColor="#D96570" />
          <stop offset="100%" stopColor="#F2A93B" />
        </linearGradient>
      </defs>
      <path
        fill="url(#vixon-gemini-gradient)"
        d="M12 2c.35 4.8 2.7 7.15 7.5 7.5C14.7 9.85 12.35 12.2 12 17c-.35-4.8-2.7-7.15-7.5-7.5C9.3 9.15 11.65 6.8 12 2Zm7.5 13.2c.18 2.4 1.35 3.57 3.75 3.75-2.4.18-3.57 1.35-3.75 3.75-.18-2.4-1.35-3.57-3.75-3.75 2.4-.18 3.57-1.35 3.75-3.75ZM4.5 4.2c.12 1.6.9 2.38 2.5 2.5-1.6.12-2.38.9-2.5 2.5-.12-1.6-.9-2.38-2.5-2.5 1.6-.12 2.38-.9 2.5-2.5Z"
      />
    </svg>
  );
}

export function MicrosoftLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path fill="#F25022" d="M1.5 1.5h10v10h-10z" />
      <path fill="#7FBA00" d="M12.5 1.5h10v10h-10z" />
      <path fill="#00A4EF" d="M1.5 12.5h10v10h-10z" />
      <path fill="#FFB900" d="M12.5 12.5h10v10h-10z" />
    </svg>
  );
}

export function MakeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <circle cx="5.2" cy="12" r="3.1" fill="#6D00CC" />
      <circle cx="12" cy="5.2" r="3.1" fill="#A800FF" />
      <circle cx="18.8" cy="12" r="3.1" fill="#6D00CC" />
      <circle cx="12" cy="18.8" r="3.1" fill="#A800FF" />
    </svg>
  );
}

export function ZapierLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="#FF4A00"
        d="M11.2 2.4h1.6v5.2l3.7-3.7 1.1 1.1-3.7 3.7H19.1v1.6h-5.2l3.7 3.7-1.1 1.1-3.7-3.7v5.2h-1.6v-5.2l-3.7 3.7-1.1-1.1 3.7-3.7H4.9v-1.6h5.2L6.4 6.05l1.1-1.1 3.7 3.7V2.4Z"
      />
    </svg>
  );
}

export function N8nLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <circle cx="7" cy="12" r="2.6" fill="#EA4B71" />
      <circle cx="17" cy="12" r="2.6" fill="#EA4B71" />
      <circle cx="12" cy="5.5" r="2.6" fill="#EA4B71" />
      <circle cx="12" cy="18.5" r="2.6" fill="#EA4B71" />
      <path
        stroke="#EA4B71"
        strokeWidth="1.5"
        strokeLinecap="round"
        d="M12 8.1v7.8M9.4 12H7m7.6 0H17"
        fill="none"
      />
    </svg>
  );
}

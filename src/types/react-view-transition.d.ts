import type { CSSProperties, ReactNode } from "react";

declare module "react" {
  export type ViewTransitionClass =
    | string
    | {
        [transitionType: string]: string;
      };

  export type ViewTransitionProps = {
    name?: string;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    default?: ViewTransitionClass;
    enter?: ViewTransitionClass;
    exit?: ViewTransitionClass;
    share?: ViewTransitionClass;
    update?: ViewTransitionClass;
  };

  export function ViewTransition(props: ViewTransitionProps): React.ReactElement;
}

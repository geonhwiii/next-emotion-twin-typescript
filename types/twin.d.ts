import "twin.macro";
import { css as cssImport } from "@emotion/react";
import styledImport from "@emotion/styled";
import { CSSInterpolation } from "@emotion/serialize";

declare module "twin.macro" {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare module "react" {
  interface DOMAttributes<T> {
    tw?: string;
    css?: CSSInterpolation;
  }
}

import { useLayoutEffect, useState } from "react";
import { Breakpoints } from "../type/type.breakpoints";
/**
 *
 * @param small
 * @param big
 */
export function useBreakpoint<T>(small: T, big: T) {
  const [value, setValue] = useState(small);

  useLayoutEffect(() => {
    setValue(window.innerWidth < Breakpoints.md ? small : big);
  }, []);

  return value;
}

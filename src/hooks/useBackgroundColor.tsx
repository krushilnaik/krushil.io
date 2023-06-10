import { useContext } from "react";
import { BackgroundContext } from "@/contexts";

export function useBackgroundColor() {
  const { backgroundColor, setBackgroundColor } = useContext(BackgroundContext);

  return { backgroundColor, setBackgroundColor };
}

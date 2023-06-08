import { Asset } from "./Asset";
import { Color } from "./Color";

export interface Tech {
  id: string;
  title: string;
  borderColor: Color;
  icon: Asset;
}

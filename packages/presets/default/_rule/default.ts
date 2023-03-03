import { Rule } from "../../../utils/type";
import { border } from "./border";
import { cursor } from "./cursor";
import { display } from "./display";
import { flexbox } from "./flexbox";
import { font } from "./font";
import { opacity } from "./opacity";
import { overflow } from "./overflow";
import { position } from "./position";
import { sizing } from "./sizing";
import { spacing } from "./spacing";
export const rules: Rule[] = [
  border,
  cursor,
  display,
  flexbox,
  font,
  opacity,
  overflow,
  position,
  sizing,
  spacing,
].flat(1);

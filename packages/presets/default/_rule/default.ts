import { Rule } from "../../../utils/type";
import { border } from "./border";
import { display } from "./display";
import { flexbox } from "./flexbox";
import { font } from "./font";
import { position } from "./position";
import { sizing } from "./sizing";
import { spacing } from "./spacing";

export const rules: Rule[] = [border, display, flexbox, font, position, sizing, spacing].flat(1);

import { Rule } from "../../../utils/type";
import { border } from "./border";
import { font } from "./font";

export const rules: Rule[] = [border, font].flat(1);

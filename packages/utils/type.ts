export interface StylePreset {
  rules: Array<Array<RegExp | Function>>;
}

export interface Variant {
  match: Match;
  selector?: Selector;
  rewrite?: ReWrite;
}

export type CSSObject = Record<string, string | number | undefined>;
export type RuleHandler = [string, string | number | undefined][];
export type DynamicRule = [RegExp, Function];
export type StaticRule = [string, CSSObject];
export type Rule = DynamicRule | StaticRule;

export type Match = (s: string) => string;
export type Selector = (s: string) => string;
export type ReWrite = (s: string) => string;

export interface StylePreset {
  rules?: Rule[];
  variants?: Variant[];
}

export interface Variant {
  match: Match;
  selector?: Selector;
  rewrite?: ReWrite;
  wrapper?: Wrapper;
}

export type RuleHandler = [string, string | number | undefined][];
export type DynamicRule = [RegExp, Function];
export type StaticRule = [string | RegExp, RuleHandler];
export type Rule = DynamicRule | StaticRule;

export type Match = (s: string) => string;
export type Selector = (s: string) => string;
export type ReWrite = (s: string) => string;
export type Wrapper = (s: string) => string;

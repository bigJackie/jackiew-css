export interface StylePreset {
  rules: Array<Array<RegExp | Function>>;
}

export type CSSObject = Record<string, string | number | undefined>;
export type RuleHandler = [string, string | number | undefined][];
export type DynamicRule = [RegExp, Function];
export type StaticRule = [string, CSSObject];
export type Rule = DynamicRule | StaticRule;

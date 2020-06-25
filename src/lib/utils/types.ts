export interface YiqOptions {
  colors: {
    light: string;
    dark: string;
  };
  threshold: number;
}

export type YiqUserOptions = Partial<YiqOptions>;

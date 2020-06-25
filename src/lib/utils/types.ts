export interface YiqOptions {
  colors: {
    white: string;
    black: string;
  };
  threshold: number;
}

export type YiqUserOptions = Partial<YiqOptions>;

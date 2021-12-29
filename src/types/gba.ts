export interface GBASoftware {
  publisher: string;
  year: string;
  description: string;
  info: {
    serial?: string;
    release?: string;
    alt_title?: string;
    [key: string]: string | undefined;
  };
  cart: GBACart;
}

export interface GBACart {
  features: GBACartFeatures;
}

export interface GBACartFeatures {
  pcb?: string;
  slot?: string;
  [key: string]: string | undefined;
}

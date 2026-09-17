export interface WritingLink {
  title: string;
  meta: string;
  href: string;
  external?: boolean;
}

export const writingLinks: WritingLink[] = [
  {
    title: "LLM inference from first principles",
    meta: "running systems lab notebook",
    href: "/inference",
  },
  {
    title:
      "Predicting the thermodynamics in the chromosphere from the translation of SDO data into the IRIS² inversion results using a visual transformer model",
    meta: "Sainz Dalda, Upendran, Kim, et al. — 2026 paper",
    href: "https://arxiv.org/abs/2604.21184",
    external: true,
  },
  {
    title: "Predicting the Popularity of Reddit Posts with AI",
    meta: "Juno Kim — 2021 paper",
    href: "https://arxiv.org/abs/2106.07380",
    external: true,
  },
];


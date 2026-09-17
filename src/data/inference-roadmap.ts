export interface RoadmapStep {
  number: string;
  title: string;
  status: "complete" | "current" | "planned";
  slug?: string;
}

export const inferenceRoadmap: RoadmapStep[] = [
  { number: "00", title: "Orientation", status: "complete", slug: "becoming-cracked-at-ml-inference" },
  { number: "01", title: "Transformer internals", status: "current" },
  { number: "02", title: "Naive autoregressive inference", status: "planned" },
  { number: "03", title: "KV caching", status: "planned" },
  { number: "04", title: "FLOPs and memory", status: "planned" },
  { number: "05", title: "GPU architecture", status: "planned" },
  { number: "06", title: "Triton kernels", status: "planned" },
  { number: "07", title: "FlashAttention", status: "planned" },
  { number: "08", title: "Continuous batching", status: "planned" },
  { number: "09", title: "Paged KV cache", status: "planned" },
  { number: "10", title: "Profiling", status: "planned" },
  { number: "11", title: "Distributed inference", status: "planned" },
  { number: "12", title: "Tensor parallelism", status: "planned" },
];

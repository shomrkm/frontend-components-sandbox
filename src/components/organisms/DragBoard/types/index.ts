export type Base = {
  id: string;
  data: Record<string, unknown>;
};

export type User = {
  id: string;
  data: {
    name: string;
    rank: string;
    img: string;
  };
};

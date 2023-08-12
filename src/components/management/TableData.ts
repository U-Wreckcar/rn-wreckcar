export type MainTableType = {
  _id: number;
  createdAt: string;
  url: string;
  campaignId: string;
  source: string;
  medium: string;
  campaignName: string;
  term: string;
  content: string;
  memo: string;
  fullUrl: string;
  shortenUrl: string;
  clickCount: number;
};

export type CustomStyles = {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
    padding: number;
  };
};

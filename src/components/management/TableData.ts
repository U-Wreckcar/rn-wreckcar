
export type MainTableType = {
  _id: number;
  createdAt: string;
  url: string;
  // user_utm_source_id:any;
  campaignId: string;
  source: string;
  // user_utm_medium_id:any;
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

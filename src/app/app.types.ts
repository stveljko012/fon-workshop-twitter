export type Tweet = {
  id: string;
  hashtags: string[];
  content: string;
  userId: string;
  title: string;
};

export type AddTweetPayload = Omit<Tweet, 'id'>;

export type Post = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: 'post';
  _updatedAt: string;
  author: string;
  body: string[];
  image: { _type: 'image'; asset: { _ref: string; _type: string } };
  likes: number;
  publishedAt: string;
  title: string;
};

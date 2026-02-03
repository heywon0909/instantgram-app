import Stories from '../components/Stories';
import PostCard from '../components/PostCard';
import Info from '../components/Info';
// import { POSTS_QUERY } from '../service/sanity/api';
// import { client } from '../service/sanity/client';

export default async function Home() {
  // const posts = await client.fetch(POSTS_QUERY);
  // console.log('posts:', posts);

  return (
    <div className="flex">
      <div>
        <Stories />
        <section className="flex flex-col gap-4">
          {/* {posts.map(post => (
            <PostCard {...post} key={post._id} />
          ))} */}
        </section>
      </div>
      <Info />
    </div>
  );
}

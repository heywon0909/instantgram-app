import Stories from '../components/Stories';
import PostCard from '../components/PostCard';
import Info from '../components/Info';

export default function Home() {
  return (
    <div className="flex">
      <div>
        <Stories />
        <section className="flex flex-col gap-4">
          <PostCard />
          <PostCard />
        </section>
      </div>
      <Info />
    </div>
  );
}

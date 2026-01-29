export default function Info() {
  return (
    <section className="ml-4 flex flex-col gap-5">
      <div className="flex items-center gap-2">
        <button className="rounded-full bg-gray-200 w-14 h-14">
          {/* <Image src="/people.png" alt="Instagram Logo" className="rounded-full" width={40} height={30} /> */}
        </button>
        <span>
          <h1 className="font-bold">dream.coder.ellie</h1>
          <p className="text-gray-200">드림코딩</p>
        </span>
      </div>
      <div className="text-gray-400 mt-3">
        About • Help • Press • API • Jobs • Privacy • Terms • Locations • Language
      </div>
      <div className="font-medium mt-3">@Copyright INSTANTGRAM from METAL</div>
    </section>
  );
}

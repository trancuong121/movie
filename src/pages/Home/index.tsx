import Banner from "./Banner";
export default function Home() {
  return (
    <>
      <Banner />
      <div
        className="bg-slate-900 w-full flex"
        style={{ justifyContent: "center" }}
      >
        <div className="w-9/12 flex justify-between">
          <div className="pt-32 pb-10">
            <p className="text-yellow-300">ONLINE STREAMING</p>
            <p className="text-4xl font-extrabold">Upcoming Movies</p>
          </div>
          <div className="pt-32 pb-10">
            <button className="text-sm border-2 border-yellow-300 pt-3 pb-3 pr-8 pl-8 rounded-full bg-slate-900 mr-5">
              Movies
            </button>
            <button className="text-sm border-2 border-yellow-300 pt-3 pb-3 pr-8 pl-8 rounded-full bg-slate-900 mr-5">
              Action
            </button>
            <button className="text-sm border-2 border-yellow-300 pt-3 pb-3 pr-8 pl-8 rounded-full bg-slate-900 mr-5">
              Comedy
            </button>
            <button className="text-sm border-2 border-yellow-300 pt-3 pb-3 pr-8 pl-8 rounded-full bg-slate-900 mr-5">
              Horror
            </button>
          </div>
        </div>
      </div>
      <div>main</div>
    </>
  );
}

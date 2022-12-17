import banner from "./banner.png";
import { IconPlayerPlay, IconCalendar, IconClockHour3 } from "@tabler/icons";
export default function Banner() {
  return (
    <>
      <div className="w-full relative z-10">
        <img className="w-full" src={banner} />
        <div className="w-1/3 absolute top-40 left-60">
          <p className="text-3xl font-extrabold text-yellow-300 mb-5">Movflx</p>
          <p className="text-6xl font-black mb-5">
            Unlimited Movie, TVs Shows, & More.
          </p>
          <div className="flex">
            <div className=" bg-white w-14 text-center mr-2">
              <p className="text-slate-900 text-xs font-bold p-1 border-2 border-white">
                PG18
              </p>
            </div>
            <div className=" bg-slate-900 w-14 text-center mr-2">
              <p className="text-xs font-bold p-1 border-2 border-white">HD</p>
            </div>
            <p className="text-sm font-bold p-1 mr-2">Action , Comedy</p>
            <div className="flex">
              <IconCalendar className="text-yellow-300" />
              <p className="text-sm font-bold p-1 mr-2">2021</p>
              <IconClockHour3 className="text-yellow-300" />
              <p className="text-sm font-bold p-1 mr-2">120 min</p>
            </div>
          </div>
          <button className="text-xl flex bg-slate-900 p-5 rounded-full border-yellow-300 border-2 mt-10">
            <IconPlayerPlay className="mr-2" /> WATCH NOW
          </button>
        </div>
      </div>
    </>
  );
}

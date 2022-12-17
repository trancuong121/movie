import Banner from "./Banner";
import { getFilms } from "../../services/filmServices";
import { useQuery } from "react-query";
import { IconClockHour3, IconThumbUp } from "@tabler/icons";
export default function Home() {
  const { data } = useQuery("getFilms", () => getFilms());
  const dataFilms = data?.data;
  console.log(dataFilms);
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
      <div className="w-9/12 grid grid-cols-4 gap-10 bg-slate-900 mb-10">
        {dataFilms &&
          dataFilms.map((film: any) => (
            <div className="w-full">
              <img src={film.image} style={{ height: "29rem" }} />
              <div className="flex justify-between mt-5 mb-5">
                <p className="text-lg">{film.name}</p>
                <p className="text-lg text-yellow-300">{film.year}</p>
              </div>
              <div className="flex justify-between">
                <div className="text-yellow-300 border-2 w-10 text-center text-xs p-1">
                  {film.quality}
                </div>
                <div className="flex">
                  <IconClockHour3 className="text-yellow-300" />
                  <p className="mr-4">{film.time}</p>
                  <IconThumbUp className="text-yellow-300" />
                  <p>{film.vote}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

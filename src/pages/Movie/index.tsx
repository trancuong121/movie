import { useQuery } from "react-query";
import { useState } from "react";
import { getFilms } from "../../services/filmServices";
import { IconClockHour3, IconThumbUp } from "@tabler/icons";

export default function Movie() {
  const [category, setCategory] = useState<string | undefined>("");

  const { data } = useQuery([category], () => getFilms(category));
  const dataFilms = data?.data;

  return (
    <>
      <div className="w-full ">
        <img
          src="https://teaser-trailer.com/wp-content/uploads/Avengers-Infinity-War-Banner.jpg"
          className="w-full object-cover"
        />
      </div>
      <div className="w-9/12 flex justify-between">
        <div className="pt-32 pb-10">
          <p className="text-yellow-300 text-xs">ONLINE STREAMING</p>
          <p className="text-3xl font-extrabold">New Release Movies</p>
        </div>
        <div className="pt-36">
          <button
            className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300"
            onClick={() => setCategory("")}>
            All Items
          </button>
          <button
            onClick={() => setCategory("Action")}
            className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300">
            Action
          </button>
          <button
            className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300"
            onClick={() => setCategory("Comedy")}>
            Comedy
          </button>
          <button className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300">
            Horror
          </button>
          <button className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 focus:border-yellow-300">
            Movies
          </button>
        </div>
      </div>
      <div className="w-9/12 grid grid-cols-4 gap-10 bg-slate-900 mb-10">
        {dataFilms &&
          dataFilms.map((film: any) => (
            <div className="w-full">
              <img
                src={film.image}
                style={{ height: "480px" }}
                className="rounded-md"
              />
              <div className="flex justify-between mt-5 mb-5">
                <p className="text-sm">{film.name}</p>
                <p className="text-sm text-yellow-300">{film.year}</p>
              </div>
              <div className="flex justify-between">
                <div className="text-yellow-300 border-2 text-center text-xs p-1 w-10">
                  {film.quality}
                </div>
                <div className="flex" style={{ alignItems: "center" }}>
                  <IconClockHour3 className="text-yellow-300" />
                  <p className="text-sm mr-4">{film.time}</p>
                  <IconThumbUp className="text-yellow-300" />
                  <p className="text-sm">{film.vote}</p>
                </div>
              </div>
            </div>
          ))}
        {!dataFilms && (
          <div className="w-full">
            <p>...Loading</p>
          </div>
        )}
      </div>
    </>
  );
}

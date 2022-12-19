import Banner from "./Banner";
import { getFilms } from "../../services/filmServices";
import { useQuery } from "react-query";
import { IconClockHour3, IconThumbUp, IconDeviceTvOld } from "@tabler/icons";
import serviceImg from "./services_img.jpg";
import liveImg from "./live_img.png";

export default function Home() {
  const { data } = useQuery("getFilms", () => getFilms(""));
  const dataFilms = data?.data;
  console.log(dataFilms);
  return (
    <>
      <Banner />
      <div
        className="bg-slate-900 w-full flex"
        style={{ justifyContent: "center" }}>
        <div className="w-9/12 flex justify-between">
          <div className="pt-32 pb-10">
            <p className="text-yellow-300 text-xs">ONLINE STREAMING</p>
            <p className="text-3xl font-extrabold">Upcoming Movies</p>
          </div>
          <div className="pt-36">
            <button className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300">
              Movies
            </button>
            <button className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300">
              Action
            </button>
            <button className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 mr-2 focus:border-yellow-300">
              Comedy
            </button>
            <button className="text-xs border-2 border-slate-600 pt-2 pb-2 pr-4 pl-4 rounded-full bg-slate-900 focus:border-yellow-300">
              Horror
            </button>
          </div>
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
          <div className="w-full flex justify-center">
            <p>...Loading</p>
          </div>
        )}
      </div>
      <div className="bg-stone-800 p-20 w-full flex justify-center">
        <div className="w-9/12 flex justify-between">
          <img src={serviceImg} />
          <div className="ml-40 space-y-4">
            <p>OUR SERVICES</p>
            <p className="text-yellow-300 text-3xl font-extrabold">
              Download Your Shows Watch Offline.
            </p>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              tempor.There are many variations of passages of lorem Ipsum
              available, but the majority have suffered alteration in some
              injected humour.
            </p>
            <div>
              <div className="flex border-b-2 border-yellow-300 pb-8">
                <div className="p-4 border-yellow-300 border-2 mr-4 rounded-full h-fit">
                  <IconDeviceTvOld size={50} />
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold">Enjoy on Your TV.</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="flex pt-8">
                <div className="p-4 border-yellow-300 border-2 mr-4 rounded-full h-fit">
                  <IconDeviceTvOld size={50} />
                </div>
                <div className="space-y-3">
                  <p className="text-lg font-semibold">Watch Everywhere.</p>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed
                    do eiusmod tempor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 w-full flex justify-center">
        <div className="w-9/12 ">
          <div className=" text-center mt-16">
            <p className="text-xs text-yellow-300">ONLINE STREAMING</p>
            <p className="text-3xl font-extrabold">Top Rated Movies</p>
          </div>
          <div className="flex justify-center p-10">
            <button className="text-xs font-semibold p-2 pl-4 pr-4 mr-4 border-2 border-slate-600 rounded-md focus:border-yellow-300 focus:text-yellow-300">
              ALL ITEMS
            </button>
            <button className="text-xs font-semibold p-2 pl-4 pr-4 mr-4 border-2 border-slate-600 rounded-md focus:border-yellow-300 focus:text-yellow-300">
              ACTION
            </button>
            <button className="text-xs font-semibold p-2 pl-4 pr-4 mr-4 border-2 border-slate-600 rounded-md focus:border-yellow-300 focus:text-yellow-300">
              COMEDY
            </button>
            <button className="text-xs font-semibold p-2 pl-4 pr-4 mr-4 border-2 border-slate-600 rounded-md focus:border-yellow-300 focus:text-yellow-300">
              HORROR
            </button>
            <button className="text-xs font-semibold p-2 pl-4 pr-4 mr-4 border-2 border-slate-600 rounded-md focus:border-yellow-300 focus:text-yellow-300">
              MOVIES
            </button>
          </div>
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
      <div className="bg-white w-full text-slate-900 flex justify-center">
        <div className="w-8/12 mt-24 flex justify-between mb-24">
          <div className="w-1/2 space-y-4">
            <p className="text-yellow-300">ONLINE STREAMING</p>
            <p className="text-4xl font-black">
              Live Movie & TV Shows For Friends & Family
            </p>
            <p>
              Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod
              There are many variations of passages of lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <div className="flex">
              <p className="text-6xl font-black text-red-600 mr-10">HD 4K</p>
              <div>
                <p className="text-3xl font-black">20K+</p>
                <p className="font-black">Active Customer</p>
              </div>
            </div>
            <button className="bg-yellow-300 text-xl font-bold pt-3 pb-3 pr-5 pl-5 rounded-full">
              WATCH NOW
            </button>
          </div>
          <div className="w-1/2">
            <img src={liveImg} />
          </div>
        </div>
      </div>
    </>
  );
}

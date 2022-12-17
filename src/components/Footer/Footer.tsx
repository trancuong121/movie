import { Group, Button } from "@mantine/core";
import logo from "./logo.png";
import card from "./card_img.png";
import { IconBrandFacebook, IconBrandTwitter } from "@tabler/icons";
export default function Footer() {
  return (
    <>
      <div className="bg-yellow-400 w-full h-40 flex justify-center text-slate-900 z-30">
        <div
          className="w-9/12  flex justify-between"
          style={{ alignItems: "center" }}
        >
          <div className="flex justify-center w-1/2">
            <div>
              <p className="text-3xl font-extrabold">
                TRIAL START FIRST 30 DAYS.
              </p>
              <p>Enter your email to create or restart your membership.</p>
            </div>
          </div>
          <div className="w-1/2 relative flex justify-center">
            <input
              className="w-full p-5 rounded-lg"
              placeholder="Enter your email"
            ></input>
            <button className="absolute rounded-lg right-1 top-1 p-4 text-yellow-400 bg-slate-900 font-semibold">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 w-full flex">
        <div className="w-1/4 p-24">
          <img src={logo} width="100px" className="pb-4" />
          <p className="pb-2">
            Movflx Online the relase etras thats sheets continig passage.
          </p>
          <p className="pb-2">Address : PO Box W75 Street</p>
          <p className="pb-2">Phone : +24 1245 654 235</p>
          <p className="pb-2">Email : info@exemple.com</p>
        </div>
        <div className="w-1/4 p-24">
          <p className="text-xl font-semibold pb-4">Categories</p>
          <p className="pb-2">Action Movies</p>
          <p className="pb-2">Download</p>
          <p className="pb-2">Horror</p>
          <p className="pb-2">Movies</p>
          <p className="pb-2">Streaming</p>
        </div>
        <div className="w-1/4 p-24">
          <p className="text-xl font-semibold pb-4">Recent Post</p>
          <p className="pb-2">Post 1</p>
          <p className="pb-2">Post 2</p>
          <p className="pb-2">Post 3</p>
        </div>
        <div className="w-1/4 p-24">
          <p className="text-xl font-semibold pb-4">Follow Us</p>
          <Group position="left">
            <Button className="bg-blue-700">
              <IconBrandFacebook />
            </Button>
            <Button className="bg-blue-400">
              <IconBrandTwitter />
            </Button>
          </Group>
        </div>
      </div>
      <div className="w-full bg-slate-600 flex justify-center">
        <div
          className="w-9/12 h-20 flex justify-between"
          style={{ alignItems: "center" }}
        >
          <p className="text-xs">
            Copyright © 2022 All Rights Reserved By Movflx
          </p>
          <img src={card} />
        </div>
      </div>
    </>
  );
}

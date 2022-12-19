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
          style={{ alignItems: "center" }}>
          <div className="flex justify-center w-1/2">
            <div>
              <p className="text-2xl font-extrabold">
                TRIAL START FIRST 30 DAYS.
              </p>
              <p className="text-xs">
                Enter your email to create or restart your membership.
              </p>
            </div>
          </div>
          <div className="w-1/2 relative flex justify-center">
            <input
              className="w-full p-4 rounded-lg"
              placeholder="Enter your email"></input>
            <button className="absolute rounded-lg right-1 top-1 p-3 text-yellow-400 bg-slate-900 font-semibold">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 w-9/12 flex space-x-10 p-20">
        <div className="w-1/3">
          <img src={logo} width="150px" className="pb-4" />
          <p className="pb-2">
            Movflx Online the relase etras thats sheets continig passage.
          </p>
          <p className="pb-2 text-xs">Address : PO Box W75 Street</p>
          <p className="pb-2 text-xs">Phone : +24 1245 654 235</p>
          <p className="pb-2 text-xs">Email : info@exemple.com</p>
        </div>
        <div className="w-1/4">
          <p className="text-xl font-semibold pb-4">Categories</p>
          <p className="pb-2 text-xs">Action Movies</p>
          <p className="pb-2 text-xs">Download</p>
          <p className="pb-2 text-xs">Horror</p>
          <p className="pb-2 text-xs">Movies</p>
          <p className="pb-2 text-xs">Streaming</p>
        </div>
        <div className="w-1/4">
          <p className="text-xl font-semibold pb-4">Recent Post</p>
          <p className="pb-2 text-xs">Post 1</p>
          <p className="pb-2 text-xs">Post 2</p>
          <p className="pb-2 text-xs">Post 3</p>
        </div>
        <div className="w-1/4">
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
          className="w-9/12 h-16 flex justify-between"
          style={{ alignItems: "center" }}>
          <p className="text-xs">
            Copyright © 2022 All Rights Reserved By Movflx
          </p>
          <img src={card} />
        </div>
      </div>
    </>
  );
}

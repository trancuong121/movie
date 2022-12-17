import { Image } from "@mantine/core";
import logo from "./logo.png";
import MenuButton from "./MenuButton";
import { IconSearch } from "@tabler/icons";
export default function Navbar() {
  return (
    <>
      <div className="bg-slate-900 w-full flex justify-center static top-0">
        <div
          className=" w-9/12 h-24 flex p-2 justify-between"
          style={{ alignItems: "center" }}
        >
          <div className="w-36">
            <Image src={logo} />
          </div>
          <div>
            <MenuButton />
          </div>
          <div className="flex justify-center">
            <div className="p-3">
              <IconSearch color="white" />
            </div>
            <button className="pt-3 pb-3 pr-7 pl-7 border-2 border-yellow-300 ml-3 rounded-full">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

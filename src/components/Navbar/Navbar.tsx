import logo from "./logo.png";
import MenuButton from "./MenuButton";
import { IconSearch } from "@tabler/icons";
export default function Navbar() {
  return (
    <>
      <div className="bg-slate-900 w-full flex justify-center top-0 sticky z-50">
        <div
          className=" w-9/12 h-20 flex p-2 justify-between"
          style={{ alignItems: "center" }}>
          <div className="w-36">
            <img src={logo} />
          </div>
          <div>
            <MenuButton />
          </div>
          <div className="flex justify-center">
            <div className="p-3">
              <IconSearch color="white" />
            </div>
            <button className="text-xs pt-0 pb-0 pl-5 pr-5 border-2 border-yellow-300 ml-3 rounded-full">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

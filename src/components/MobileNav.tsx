import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Cart from "./Cart";
import WatchLIst from "./WatchList";


const MobileNav = async () => {

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2 ">
        <MenuIcon className="h-6 w-6 text-white " />
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-16 space-y-3 items-center text-white bg-black backdrop-blur-md bg-opacity-20">
        <Link className="text-white" href="/">
          Home
        </Link>
        <Link className="text-white" href="/Anime">
          Anime
        </Link>
        <Link className="text-white" href="/manga">
          Manga
        </Link>
        <Link className="text-white" href="/animetrending">
          Trending
        </Link>
        <WatchLIst ui="WatchList" />
        <Cart className="text-white  text-[28px]" />
        
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

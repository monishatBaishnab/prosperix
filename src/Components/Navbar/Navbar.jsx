import { FaBars } from "react-icons/fa6";
import NavList from "./NavList";
import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
 
    return (
        <div className="flex items-center justify-between container">
            <div>
                <a className="text-3xl font-semibold text-light-black-200" href="#">Prosperix</a>
            </div>
            <NavList open={open} setOpen={setOpen} />
            <div className="flex items-center gap-2">
                <button className="hidden sm:inline-block px-4 py-2 text-primary text-lg">Sign in</button>
                <button className="hidden sm:inline-block px-4 py-2 rounded-[4px] bg-primary border-none text-white">Get Started</button>
                <button onClick={() => setOpen(!open)} className="p-2 text-primary text-xl hover:bg-primary/10 rounded-[4px] transition md:hidden"><FaBars /></button>
            </div>
        </div>
    );
};

export default Navbar;
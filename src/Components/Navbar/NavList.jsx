import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types';

const NavList = ({ open, setOpen }) => {
    
    return (
        <div className={`absolute top-0 ${open ? 'left-0 visible opacity-100' : '-left-5 invisible opacity-0'} md:visible md:opacity-100 transition-all bottom-0 w-[280px] p-5 border-r border-r-primary/25 bg-primary/10 backdrop-blur-xl md:static md:border-none md:p-0 md:bg-transparent md:backdrop-blur-none`}>
            <div className="relative">
                <div className="flex gap-3 md:gap-5 flex-col md:flex-row md:items-center">
                    <a className="text-lg hover:text-primary transition-colors" href="#">Home</a>
                    <a className="text-lg hover:text-primary transition-colors" href="#">Service</a>
                    <a className="text-lg hover:text-primary transition-colors" href="#">Contact</a>
                    <a className="text-lg hover:text-primary transition-colors" href="#">Help</a>
                </div>
                <button onClick={() =>setOpen(false)} className="absolute right-0 top-0 text-2xl text-primary md:hidden"><IoClose /></button>
            </div>
        </div>
    );
};

NavList.propTypes= {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
}

export default NavList;
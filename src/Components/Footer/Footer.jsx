import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="bg-primary text-white">
            <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10">
                <div className="md:col-span-2 space-y-7">
                    <a className="text-3xl font-semibold text-white" href="#">Prosperix</a>
                    <p>Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter financial future.</p>
                    <div className="flex items-center gap-4">
                        <a className="flex items-center gap-1" href="#"><FiFacebook /> Facebook</a>
                        <a className="flex items-center gap-1" href="#"><FiTwitter /> Twitter</a>
                        <a className="flex items-center gap-1" href="#"><FiInstagram /> Instagram</a>
                    </div>
                </div>
                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2">
                    <div>
                        <h4 className="text-xl font-semibold mb-7">Our Services</h4>
                        <div className="space-y-2">
                            <a href="#" className="text-lg block">Insurance Planning</a>
                            <a href="#" className="text-lg block">Estate Planning</a>
                            <a href="#" className="text-lg block">Tax Optimization</a>
                            <a href="#" className="text-lg block">Debt Management</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold mb-7">Explore More</h4>
                        <div className="space-y-2">
                            <a href="#" className="text-lg block">About</a>
                            <a href="#" className="text-lg block">Blog</a>
                            <a href="#" className="text-lg block">Site Map</a>
                            <a href="#" className="text-lg block">Privacy</a>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h4 className="text-xl font-semibold mb-7">Contact Details</h4>
                    <div className="space-y-2">
                        <p className="text-lg block">contact@briofin.com</p>
                        <p className="text-lg block">+1 (555) 123-4567</p>
                    </div>
                </div>
            </div>
            <div className="container flex justify-between items-center py-5 border-t-2 border-t-white flex-wrap gap-3">
                <p>DSCODE 2023 © All rights reserved</p>
                <div className="flex items-center gap-7 flex-wrap">
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
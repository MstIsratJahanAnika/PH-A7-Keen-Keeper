import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook, FaXTwitter } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return (
        <div className="mt-[80px] bg-[#244D3F] text-white pt-[80px] pb-[30px]">
            <div className="text-center">
                <div className="space-y-6 mb-6">
                    <h2 className="text-6xl font-semibold"><span className="font-bold">Keen</span>Keeper</h2>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                <div className="space-y-5">
                    <p className="text-xl">Social Links</p>

                    <ul className="flex gap-3 justify-center items-center mt-2">
                        <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <a href=""><AiFillInstagram className="text-black text-2xl" /></a>
                        </li>

                        <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <a href=""><FaSquareFacebook className="text-black text-2xl" /></a>
                        </li>

                        <li className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
                            <a href=""><FaXTwitter className="text-black text-2xl" /></a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="px-5 mt-[40px]">
                <hr className="border-[#FAFAFA]/20" />
            </div>
            <div className="text-[#FAFAFA]/50 flex justify-between items-center mt-7.5 px-5">
                <p className="flex items-center gap-1"><MdCopyright />2026 KeenKeeper. All rights reserved.</p>

                <ul className="flex justify-between items-center gap-7">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
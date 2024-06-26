import Link from "next/link";
import Image from "next/image";
import logo1 from "../../../../public/assets/img/MIMOcolor.jpg";
import ResponsiveMenu from "../responsive-menu";

const MobileMenuTwo = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`menu__bar-popup two ${isOpen ? "show" : ""}`}>
            <div className="menu__bar-popup-top">
                <div className="logo">
                    <Link href="/home-two"><Image src={logo1} alt='logo' className="rounded-full" width="auto" priority /></Link>
                </div>
                <div className="close" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
            </div>
            <div className="responsive-menu mean-container">
                <div className="mean-bar">
                    <div className="mean-nav">
                        <ResponsiveMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileMenuTwo;
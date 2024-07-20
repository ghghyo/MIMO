import Link from 'next/link';
import logo2 from "../../../public/assets/img/MIMOcolor.jpg";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}><i className="fal fa-times"></i></div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                <Link href='/'>
                    <img className="rounded-full" src={logo2.src} alt="logo" />
                </Link>
                </div>
                <p>Welcome to MIMO Strategies, your premier partner in driving business success through innovative consulting services. </p>
                <div className="header__area-menubar-right-box-sidebar-popup-contact">
                    <h4 className="mb-30">Get In Touch</h4>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>Call Now</span>
                            <h6><a href="tel:+12024222255">+1202(422)2255</a></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>Quick Email</span>
                            <h6><a href="mailto:info@mimostrategies.com">info@mimostrategies.com</a></h6>
                        </div>
                    </div>
                    <div className="header__area-menubar-right-box-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-icon">
                            <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="header__area-menubar-right-box-sidebar-popup-contact-item-content">
                            <span>Office Address</span>
                            <h6><a href="#">Washington DC NW, 20001</a></h6>
                        </div>
                    </div>
                </div>
                <div className="header__area-menubar-right-box-sidebar-popup-social">
                    <Social />							
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;
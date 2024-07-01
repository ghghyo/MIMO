import servicesData from "@/components/data/services-data";
import Social from "@/components/data/social";
import Link from "next/link";
import logo from "../../../public/assets/img/MIMOcolor.jpg";

const FooterOne = () => {
    const servicesD = servicesData.slice(0, 4);
    return (
        <>
            <div className="footer__one">
                {/* <img className="footer__one-shape" src="assets/img/shape/footer-bg.png" alt="shape" /> */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-md-6 col-sm-7 xl-mb-30">
                            <div className="footer__one-widget">
                                <div className="footer__one-widget-about">
                                    <Link href="/home-two"><img className="rounded-full" src={logo.src} alt="logo" /></Link>
                                    <p>Welcome to MIMO Strategies, your premier partner in driving business success.</p>
                                    <p> Multiple problems in and Multiple solutions out</p>
                                    <div className="footer__one-widget-about-social">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-5 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Our Solution</h4>
                                <div className="footer__one-widget-solution">
                                    <ul>
                                        {servicesD.map((data, id) => (
                                            <li key={id}><Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}</Link></li>
                                        ))}                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6 sm-mb-30">
                            <div className="footer__one-widget border-one">
                                <h4>Head Office</h4>
                                <div className="footer__one-widget-location">
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="https://google.com/maps">Shaw Castle</Link>
                                        </div>
                                    </div>
                                    <h6>Office</h6>
                                    <div className="footer__one-widget-location-item">
                                        <div className="footer__one-widget-location-item-icon">
                                            <i className="far fa-map-marker-alt"></i>
                                        </div>
                                        <div className="footer__one-widget-location-item-info">
                                            <Link href="https://google.com/maps">Shaw Castle</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 col-sm-6">
                            <div className="footer__one-widget border-one tow">
                                <h4>Subscribe</h4>
                                <div className="footer__one-widget-subscribe">
                                    <p>Join over <span>68,000</span> people getting our emails</p>
                                    <form action="#">
                                        <input type="text" name="email" placeholder="Email Address" required />
                                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__one">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <p>Copyright © 2024  <Link href="/home-two">MIMO</Link> - All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>            
        </>
    );
};

export default FooterOne;

//<Link href={`/services/${data.id}`}><i className="far fa-chevron-double-right"></i>{data.title}</Link></li>
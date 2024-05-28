"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterTwo from "@/components/layout/footers/footer-two";
import Form from "./form";
import Social from "@/components/data/social";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ContactFour = () => {
    return (
        <>
            <SEO pageTitle="Contact Four" />
            <HeaderOne />
            <BreadCrumb title="Contact Four" innerTitle="Contact Four" />
            <div className="contact__two section-padding pb-0">
                <div className="container">
                    <div className="row contact__two-box">
                        <div className="col-xl-4 col-lg-5 lg-mb-30">
                            <div className="contact__two-left">
                                <h3>Contact Us</h3>
                                <p className="mb-30">On the other hand we moralized bite the HR charms of pleasure.</p>                       
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/call.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Tell With US</span>
                                        <p><a href="tel:+123-568-4758">+123-568-4758</a></p>
                                    </div>
                                </div>
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/email.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Quick Email</span>
                                        <p><a href="mailto:MIMO.com@gmail.com">MIMO.com@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact__two-left-item">
                                    <div className="contact__two-left-item-icon">
                                        <img src="/assets/img/icon/locations.png" alt="icon" />
                                    </div>
                                    <div className="contact__two-left-item-info">
                                        <span>Office Address</span>
                                        <p><a href="#">Birkbeck Court, Birkbeck Rd, London W3 6BQ, UK</a></p>
                                    </div>
                                </div>
                                <div className="contact__two-left-item-socialIcon">
                                    <h6>Follow  Us</h6>
                                    <Social />
                                </div>
                            </div>                    
                        </div>
                        <div className="col-xl-8 col-lg-7">
                            <div className="contact__two-right">
                                <h3>Get In Touch</h3> 
                                <p>On the other hand we denounce righteous indignation moralized bite the HR charms of pleasure.</p>                       
                                <div className="contact__two-right-form">
                                    <Form />
                                </div>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__two-map">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246856.3154163635!2d-77.15466112187083!3d38.889931185944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9c7b7733c07%3A0x1f6be5f8efb19864!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sus!4v1687890531865!5m2!1sen!2sus" loading="lazy"></iframe>            </div> 
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactFour;
"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header-one";
import BreadCrumb from "../common/breadcrumb";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";
import { InlineWidget } from 'react-calendly';

const ContactTwo = () => {
    return (
        <>
            <SEO pageTitle="Book Calendar" />
            <HeaderOne />
            <BreadCrumb title="Book Calendar" innerTitle="Book Calendar" />
            <div className="contact__four section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 lg-mb-30">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/locationss.png" alt="icon" />
                                </div>
                                <h4>Office Location</h4>
                                <span>You are welcome to visit our office</span>
                                Shaw City,<br/> Washington DC
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 md-mb-30">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/phone-call.png" alt="icon" />
                                </div>
                                <h4>Talk with us</h4>
                                <span>We love picking up the phone.</span>
                                <p><a href="tel:+1202(422)2255">+1202(422)2255</a></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="contact__four-info">
                                <div className="contact__four-info-icon">
                                    <img src="/assets/img/icon/emails.png" alt="icon" />
                                </div>
                                <h4>Quick Email</h4>
                                <span>Drop us an email and we will answer you asap.</span>
                                
                                <p><a href="mailto:info@mimostrategies.com">info@mimostrategies.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact__four section-padding" style={{ maxWidth: '100%', overflowX: 'hidden' }}>
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="contact__four-form t-center">
                    <div className="contact__four-form-title">    
                        <span className="subtitle-one">Get in Touch</span>
                        <h2>We are always Ready for your solution</h2>
                    </div>
                    <div className="calendly-embed" style={{ overflowY: 'auto' }}>
                        <InlineWidget url="https://calendly.com/niloo-niya/30min" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            <div className="contact__two-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246856.3154163635!2d-77.15466112187083!3d38.889931185944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9c7b7733c07%3A0x1f6be5f8efb19864!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2sus!4v1687890531865!5m2!1sen!2sus" loading="lazy"></iframe>
            </div> 
            <div className='all-footer'>
                <FooterOne />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ContactTwo;

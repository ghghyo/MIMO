import React from 'react';
import bgImage from "../../../public/assets/img/about/about-solution.jpg";
import image from "../../../public/assets/img/about/about-9.jpg";
import shape from "../../../public/assets/img/shape/about-solution.png";
import Count from '../common/count';
import Link from 'next/link';

const WhoWeAre = () => {
    return (
        <>
            <div className="company__two section-padding pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-7 lg-mb-30">
                            <div className="company__two-left">
                                <div className="company__two-left-title">
                                    <span className="subtitle-one">Who we are</span>
                                    <h2>Membership affiliations</h2>
                                    <p>We are a member of Smart City Council and WWLF Wireless Womens Leadership Forum, The Fourth Effect.</p>
                                </div>
                                <div className="company__two-left-skill">
    <div className="company__two-left-skill-item">
        <a href="https://www.smartcitiescouncil.com/members/dr-niloo-niya" target="_blank" rel="noopener noreferrer">
            <img src="https://images.squarespace-cdn.com/content/v1/65708bcbbcb88d2cba1c270d/b65a6621-7c56-4a11-909b-6b7751d971b4/TFE+Logo+White+on+Dark+Blue.jpg?format=1500w" alt="TFE Logo" style={{ width: '100px', height: 'auto' }} />
        </a>
        <h6>The Fourth Effect</h6>
    </div>
    <div className="company__two-left-skill-item">
        <a href="https://www.smartcitiescouncil.com/members/mimo-strategies-llc" target="_blank" rel="noopener noreferrer">
            <img src="https://media.licdn.com/dms/image/D4E12AQGn4NGR0Ku_Cw/article-cover_image-shrink_720_1280/0/1701273728862?e=2147483647&v=beta&t=9Ts6biU-5nZPQZNYOzJM_Uo7PaGeRAaZ-ddL8385_j4" alt="WWLF Logo" style={{ width: '100px', height: 'auto' }} />
        </a>
        <h6>WWLF</h6>
    </div>
</div>
                                <Link className="btn-two" href="/faq">Discover more<i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-5">
                            <div className="company__two-right dark__image t-right">
                                <img className="img__full" src={image.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="about__solution" > {/*style={{backgroundImage: `url(${bgImage.src})`}}*/}
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-8">
                            <div className="about__solution-left xl-t-center">
                                <h2>implement solutions & achieve goals.</h2>
                            </div>
                        </div>
                        
                        <div className="col-xl-4">
                            <div className="about__solution-right t-right xl-t-center">						
                                <Link className="btn-one" href="/contact">Book a free call<i className="far fa-chevron-double-right"></i></Link>
                                <img className="about__solution-right-shape left-right-animate" src={shape.src} alt="shape" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>        
        </>
    );
};

export default WhoWeAre;
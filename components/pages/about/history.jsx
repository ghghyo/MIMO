import React from 'react';
import image1 from "../../../public/assets/img/about/history-1.jpg";
import image2 from "../../../public/assets/img/about/history-2.jpg";
import image3 from "../../../public/assets/img/about/history-3.jpg";
import image4 from "../../../public/assets/img/about/history-4.jpg";
import image5 from "../../../public/assets/img/about/history-5.jpg";

const History = () => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">Our History</span>
                            <h2>Our Company History</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    {/*<img src={image1.src} alt="image" /> */}
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2018</span>
                                            <h5>Company Founded</h5>
                                        </div>
                                        <p>Niloo founded the company with a specific motto in mind: Do Good Anyway</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2019</span>
                                            <h5>First DC City Contract</h5>
                                        </div>
                                        <p>MIMO Strategies completes its first DC awarded City contract and showcases its promise for Smart City initiatives</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        {/*<img src={image1.src} alt="image" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        {/*<img src={image1.src} alt="image" /> */}
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2022</span>
                                            <h5>Improve Management</h5>
                                        </div>
                                        <p>MIMO Strategies improves management across the telecom industry for 7+ companies</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2023</span>
                                            <h5>Open Research Team</h5>
                                        </div>
                                        <p>MIMO strategies conducts research on the latest 5G technological advances and presents at renowned conference</p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        {/*<img src={image1.src} alt="image" /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                       {/*<img src={image1.src} alt="image" /> */}
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2024</span>
                                            <h5>Winning Award</h5>
                                        </div>
                                        <p>MIMO Strategies awarded for being a top company in the Telecom Industry </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
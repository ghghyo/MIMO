import Link from 'next/link';
import breadCrumbBg from "../../../public/assets/img/pages/page-banner.jpg";

const BreadCrumb = ({ title, innerTitle, innerInnerTitle }) => {
    const firstThreeWords = title?.split(' ').slice(0, 1);
    return (
        <div className="page__banner" style={{ backgroundImage: `url(${breadCrumbBg.src})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '450px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page__banner-content">
                            <span>{firstThreeWords}</span>
                            <ul>
                                <li><Link href="/home-two">Home</Link><span>|</span></li>
                                <li>{innerTitle}</li>
                            </ul>
                            <h1>{title} {innerInnerTitle && <p>{innerInnerTitle}</p>}</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;

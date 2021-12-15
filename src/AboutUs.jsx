import {React, Fragment} from 'react'

export function AboutUs() {
    return (
        <Fragment>
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            {/*<!-- Start Header Area -->*/}
            <header className="header navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                {/*<!-- Start Navbar -->*/}
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src={"./images/logo/logo.svg"} alt="Logo"/>
                                    </a>
                                    <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a href="index.html" aria-label="Toggle navigation">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="dd-menu active collapsed" href="javascript:void(0)"
                                                    data-bs-toggle="collapse" data-bs-target="#submenu-1-1"
                                                    aria-controls="navbarSupportedContent" aria-expanded="false"
                                                    aria-label="Toggle navigation">Pages</a>
                                                <ul className="sub-menu collapse" id="submenu-1-1">
                                                    <li className="nav-item active"><a href="about-us.html">About Us</a></li>
                                                    <li className="nav-item"><a href="gallery.html">Gallery</a></li>
                                                    <li className="nav-item"><a href="pricing.html">Pricing</a></li>
                                                    <li className="nav-item"><a href="sponsors.html">Sponsors</a></li>
                                                    <li className="nav-item"><a href="mail-success.html">Mail Success</a></li>
                                                    <li className="nav-item"><a href="404.html">404 Error</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="schedule.html" aria-label="Toggle navigation">Schedule</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="speakers.html" aria-label="Toggle navigation">Speakers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-2" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Blog</a>
                                                <ul className="sub-menu collapse" id="submenu-1-2">
                                                    <li className="nav-item"><a href="blog-grid.html">Blog Grid</a>
                                                    </li>
                                                    <li className="nav-item"><a href="blog-single.html">Blog Single</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <a href="contact.html" aria-label="Toggle navigation">Contact</a>
                                            </li>
                                        </ul>
                                    </div> {/*<!-- navbar collapse -->*/}
                                    <div className="button">
                                        <a href="pricing.html" className="btn">Get Tickets<i className="lni lni-ticket"></i></a>
                                    </div>
                                </nav>
                                {/*<!-- End Navbar -->*/}
                            </div>
                        </div>
                    </div> {/*<!-- row -->*/}
                </div> {/*<!-- container -->*/}
            </header>
            {/*<!-- End Header Area -->*/}

            {/*<!-- Start Breadcrumbs -->*/}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">About Us</h1>
                                <ul className="breadcrumb-nav">
                                    <li><a href="index.html">Home</a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- End Breadcrumbs -->*/}

            {/*<!-- Start Features Area -->*/}
            <section className="features section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Why join eventGrids?</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Why you should Join Event</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src={"./images/eatures/shape.svg"} alt="#"/>
                                <img className="shape2" src={"./images/features/shape2.svg"} alt="#"/>
                                <span className="serial">01</span>
                                <div className="service-icon">
                                    <i className="lni lni-microphone"></i>
                                </div>
                                <h3>Great Speakers</h3>
                                <p>How you transform your business as tech, consumer, habits industry dynamic change, Find out
                                    from.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src={"./images/features/shape.svg"} alt="#"/>
                                <img className="shape2" src={"./images/features/shape2.svg"} alt="#"/>
                                <span className="serial">02</span>
                                <div className="service-icon">
                                    <i className="lni lni-users"></i>
                                </div>
                                <h3>New People</h3>
                                <p>How you transform your business as tech, consumer, habits industry dynamic change, Find out
                                    from.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src={"./images/features/shape.svg"} alt="#"/>
                                <img className="shape2" src={"./images/features/shape2.svg"} alt="#"/>
                                <span className="serial">03</span>
                                <div className="service-icon">
                                    <i className="lni lni-bullhorn"></i>
                                </div>
                                <h3>Global Event</h3>
                                <p>How you transform your business as tech, consumer, habits industry dynamic change, Find out
                                    from.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src={"./images/features/shape.svg"} alt="#"/>
                                <img className="shape2" src={"./images/features/shape2.svg"} alt="#"/>
                                <span className="serial">04</span>
                                <div className="service-icon">
                                    <i className="lni lni-heart"></i>
                                </div>
                                <h3>Get Inspired</h3>
                                <p>How you transform your business as tech, consumer, habits industry dynamic change, Find out
                                    from.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src={"./images/features/shape.svg"} alt="#"/>
                                <img className="shape2" src={"./images/features/shape2.svg"} alt="#"/>
                                <span className="serial">05</span>
                                <div className="service-icon">
                                    <i className="lni lni-cup"></i>
                                </div>
                                <h3>Networking Session</h3>
                                <p>How you transform your business as tech, consumer, habits industry dynamic change, Find out
                                    from.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src={"./images/features/shape.svg"} alt="#"/>
                                <img className="shape2" src={"./images/features/shape2.svg"} alt="#"/>
                                <span className="serial">06</span>
                                <div className="service-icon">
                                    <i className="lni lni-happy"></i>
                                </div>
                                <h3>Meet New Faces</h3>
                                <p>How you transform your business as tech, consumer, habits industry dynamic change, Find out
                                    from.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- /End Features Area -->*/}

            {/*<!-- Start Call Action Area -->*/}
            <section className="call-action overlay style2">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-8 col-12">
                            <div className="inner-content">
                                <div className="text">
                                    <h5>Free Lite Version</h5>
                                    <h2>Currently you are using free LiteVersion of EventGrids</h2>
                                    <p>Please, purchase full version of the template
                                        to get all pages, features and commercial license.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-12">
                            <div className="button">
                                <a href="javascript:void(0)" className="btn">Buy Now <i className="lni lni-cart-full"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- End Call Action Area -->*/}

            {/*<!-- Start Footer Area -->*/}
            <footer className="footer"/>
                {/*<!-- Start Footer Top -->*/}
                <div className="footer-top">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer f-about">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src={"./images/logo/dark-logo.svg"} alt="#"/>
                                            </a>
                                        </div>
                                        <p>A business conference organize by EventGrids In. World’s most influential media,
                                            entertainment & technology.</p>
                                        <span className="social-title">
                                            Follow Us On:
                                        </span>
                                        <ul className="social">
                                            <li>
                                                <a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><i className="lni lni-twitter-filled"></i></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><i className="lni lni-instagram-filled"></i></a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)"><i className="lni lni-linkedin-original"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer f-link">
                                        <h3>Quick Links</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">Get Direction</a></li>
                                            <li><a href="javascript:void(0)">Sponsor</a></li>
                                            <li><a href="javascript:void(0)">What We Offer</a></li>
                                            <li><a href="javascript:void(0)">Ricent Projects</a></li>
                                            <li><a href="javascript:void(0)">Insights</a></li>
                                        </ul>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer f-link">
                                        <h3>Know More</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">About Us</a></li>
                                            <li><a href="javascript:void(0)">Our Pricing</a></li>
                                            <li><a href="javascript:void(0)">Faq</a></li>
                                            <li><a href="javascript:void(0)">Guides</a></li>
                                            <li><a href="javascript:void(0)">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer newsletter">
                                        <h3>Subscribe to our newsletter</h3>
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="name" placeholder="Your Name*" required="required" type="text"/>
                                            <input name="email" placeholder="Email address*" required="required" type="email"/>
                                            <div className="button">
                                                <button className="btn">Subscribe
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!--/ End Footer Top -->*/}
                {/*<!-- Start Copyright Area -->*/}
                <div className="copyright">
                    <div className="container">
                        <div className="inner-content">
                            <div className="row">
                                <div className="col-12">
                                    <p className="copyright-text">Designed and Developed by <a href="https://graygrids.com/"
                                            rel="nofollow" target="_blank">GrayGrids</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- End Copyright Area -->*/}
            <footer/>
            {/*<!--/ End Footer Area -->*/}

            {/*<!-- ========================= scroll-top ========================= -->*/}
            <a href="#" className="scroll-top">
                <i className="lni lni-chevron-up"></i>
            </a>

            {/*<!-- ========================= JS here ========================= -->*/}
        </Fragment>
    )
}

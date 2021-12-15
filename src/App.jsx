import { React, Fragment } from "react";


export function App(){

    return(
        <Fragment>
            <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/*<!-- /End Preloader -->*/}

            {/*<!-- Start Header Area -->*/}
            <header className="header navbar-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="nav-inner">
                                {/*<!-- Start Navbar -->*/}
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index.html">
                                        <img src={"./images/logo/logo.png"} alt="Logo"/>
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
                                                <a href="index.html" className="active" aria-label="Toggle navigation">Inicio</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="schedule.html" aria-label="Toggle navigation">Torneos</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="speakers.html" aria-label="Toggle navigation">En vivo</a>
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
                                            <li className="nav-item">
                                                <a className="dd-menu collapsed" href="javascript:void(0)" data-bs-toggle="collapse"
                                                    data-bs-target="#submenu-1-1" aria-controls="navbarSupportedContent"
                                                    aria-expanded="false" aria-label="Toggle navigation">Perfil</a>
                                                <ul className="sub-menu collapse" id="submenu-1-1">
                                                    <li className="nav-item"><a href="about-us.html">Equipo</a></li>
                                                    <li className="nav-item"><a href="gallery.html">Torneos Registrados</a></li>
                                                    <li className="nav-item"><a href="pricing.html">Torneos Ganados</a></li>
                                                    <li className="nav-item"><a href="sponsors.html">Galeria</a></li>
                                                    <li className="nav-item"><a href="mail-success.html">Sobre nosotros</a></li>
                                                    <li className="nav-item"><a href="404.html">Cerrar sesión</a></li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </div> {/*<!-- navbar collapse -->*/}
                                    <div className="button">
                                        <a href="Login.html" className="btn">Iniciar sesión<i className="lni lni-ticket"></i></a>
                                    </div>
                                </nav>
                                {/*<!-- End Navbar -->*/}
                            </div>
                        </div>
                    </div> {/*<!-- row -->*/}
                </div> {/*<!-- container -->*/}
            </header>
            {/*<!-- End Header Area -->*/}

            {/*<!-- Start Hero Area -->*/}
            <section className="hero-area">
                <div className="main__circle"></div>
                <div className="main__circle2"></div>
                <div className="main__circle3"></div>
                <div className="main__circle4"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                            <div className="hero-content">
                                <h5 className="wow zoomIn" data-wow-delay=".2s"><i className="lni lni-map-marker"></i> Santa Marta, Colombia</h5>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Conoce el mundo del Esgrima</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s"> Ven registrate junto con tu equipo, conoce a tus rivales y participa en torneos locales,
                                    nacionales y en el toreno mundial que esta por venir.</p>
                                <div className="button wow fadeInUp" data-wow-delay=".8s">
                                    <a href="Registrar.html" className="btn ">Registrarse</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- End Hero Area -->*/}

            {/*<!-- Start Count Down Area -->*/}
            <div className="count-down">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-head">
                                <div className="box-content">
                                    <div className="box">
                                        <h1 id="days">000</h1>
                                        <h2 id="daystxt">Dias</h2>
                                    </div>
                                    <div className="box">
                                        <h1 id="hours">00</h1>
                                        <h2 id="hourstxt">Horas</h2>
                                    </div>
                                    <div className="box">
                                        <h1 id="minutes">00</h1>
                                        <h2 id="minutestxt">Minutos</h2>
                                    </div>
                                    <div className="box">
                                        <h1 id="seconds">00</h1>
                                        <h2 id="secondstxt">Segundos</h2>
                                    </div>
                                    <h1>Para el toreno MUNDIAL de esgrima</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- End Count Down Area -->*/}

            {/*<!-- Start Features Area -->*/}
            <section className="features section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">¿Por qué practicar Esgrima?</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">¿Por qué participar en torneos?</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Porque es un deporte para generar cultura, tradicciones y crear nuevos hobbies.
                                    Conoce personas con tus mismos gustos, unete a ellos en torneos y se el mejor.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src="assets/images/features/shape.svg" alt="#"/>
                                <img className="shape2" src="assets/images/features/shape2.svg" alt="#"/>
                                <span className="serial">01</span>
                                <div className="service-icon">
                                    <i className="lni lni-microphone"></i>
                                </div>
                                <h3>Narradores de primera</h3>
                                <p>Contamos con oradores en cada competencia que poseen conocimiento sobre el esgrima.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src="assets/images/features/shape.svg" alt="#"/>
                                <img className="shape2" src="assets/images/features/shape2.svg" alt="#"/>
                                <span className="serial">02</span>
                                <div className="service-icon">
                                    <i className="lni lni-users"></i>
                                </div>
                                <h3>Comunidad</h3>
                                <p>Al ser un deporte poco conocido, nuestra comunidad va creciendo poco a poco y los tenemos presentes.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src="assets/images/features/shape.svg" alt="#"/>
                                <img className="shape2" src="assets/images/features/shape2.svg" alt="#"/>
                                <span className="serial">03</span>
                                <div className="service-icon">
                                    <i className="lni lni-bullhorn"></i>
                                </div>
                                <h3>Eventos</h3>
                                <p>Contamos actividades, ejercicios y participacion de la comunidad y el equipo de staff.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".2s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src="assets/images/features/shape.svg" alt="#"/>
                                <img className="shape2" src="assets/images/features/shape2.svg" alt="#"/>
                                <span className="serial">04</span>
                                <div className="service-icon">
                                    <i className="lni lni-heart"></i>
                                </div>
                                <h3>¿Qué nos inspiró?</h3>
                                <p>El amor a este deporte que se ha dejado muy atras por dar prioridad a otros
                                hobbies o trabajos. </p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src="assets/images/features/shape.svg" alt="#"/>
                                <img className="shape2" src="assets/images/features/shape2.svg" alt="#"/>
                                <span className="serial">05</span>
                                <div className="service-icon">
                                    <i className="lni lni-cup"></i>
                                </div>
                                <h3>Torneos</h3>
                                <p>Contamos con torneos de barrio, locales, regionales y proximamente el mundial.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            {/*<!-- Start Single Feature -->*/}
                            <div className="single-featuer">
                                <img className="shape" src="assets/images/features/shape.svg" alt="#"/>
                                <img className="shape2" src="assets/images/features/shape2.svg" alt="#"/>
                                <span className="serial">06</span>
                                <div className="service-icon">
                                    <i className="lni lni-happy"></i>
                                </div>
                                <h3>Conocenos</h3>
                                <p>Es posible con los premios de algunos de los torenos y con los eventos realizados.</p>
                            </div>
                            {/*<!-- End Single Feature -->*/}
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- /End Features Area -->*/}

            {/*<!-- Start Pricing Table Area -->*/}
            <section id="pricing" className="pricing-table section extra-page bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3 className="wow zoomIn" data-wow-delay=".2s">Inscripciones</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Precios y torneos</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">Hay variaciones de torneos adecuado a tu experiencia
                                    puedes elegir el nivel que creas correspondiente tanto para ti como para tu equipo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".4s">
                            {/*<!-- Single Table -->*/}
                            <div className="single-table">
                                {/*<!-- Table Head -->*/}
                                <div className="table-head">
                                    <h4 className="title">Local</h4>
                                    <p>Inscripcion</p>
                                    <div className="price">
                                        <h2 className="amount">$100.000</h2>
                                    </div> <br/>
                                    <h4 className="title">Monto a ganar</h4>
                                    
                                    <div className="price">
                                        <h2 className="amount">$1.000.000</h2>
                                    </div>
                                </div>
                                {/*<!-- End Table Head -->*/}
                                <div className="button">
                                    <a href="javascript:void(0)" className="btn">Inscribirse</a>
                                </div>
                                {/*<!-- Start Table Content -->*/}
                                <div className="table-content">
                                    {/*<!-- Table List -->*/}
                                    <ul className="table-list">
                                        <li>1 Conferencia con entrenadores</li>
                                        <li>1 Sesión de fotografias</li>
                                        <li>Desayunos y almuezos</li>
                                    </ul>
                                    {/*<!-- End Table List -->*/}
                                </div>
                                {/*<!-- End Table Content -->*/}
                            </div>
                            {/*<!-- End Single Table-->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".6s">
                            {/*<!-- Single Table -->*/}
                            <div className="single-table middle">
                                {/*<!-- Table Head -->*/}
                                <div className="table-head">
                                    <h4 className="title">Nacional</h4>
                                    <p>Inscripcion</p>
                                    <div className="price">
                                        <h2 className="amount">$1.000.000</h2>
                                    </div><br/>
                                    <h4 className="title">Monto a ganar</h4>
                                    
                                    <div className="price">
                                        <h2 className="amount">$10.000.000</h2>
                                    </div>
                                </div>
                                {/*<!-- End Table Head -->*/}
                                <div className="button">
                                    <a href="javascript:void(0)" className="btn btn-alt">Inscribirse</a>
                                </div>
                                {/*<!-- Start Table Content -->*/}
                                <div className="table-content">
                                    {/*<!-- Table List -->*/}
                                    <ul className="table-list">
                                        <li>3 conferencias con entrenadores</li>
                                        <li>5 sesiones de fotografias</li>
                                        <li>Desayuno, almuerzo y cena</li>
                                        <li>Hospedaje y Transporte</li> 
                                    </ul>
                                    {/*<!-- End Table List -->*/}
                                </div>
                                {/*<!-- End Table Content -->*/}
                            </div>
                            {/*<!-- End Single Table-->*/}
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 wow fadeInUp" data-wow-delay=".8s">
                            {/*<!-- Single Table -->*/}
                            <div className="single-table">
                                {/*<!-- Table Head -->*/}
                                <div className="table-head">
                                    <h4 className="title">Mundial</h4>
                                    <p>Inscripcion</p>
                                    <div className="price">
                                        <h2 className="amount">$20.000.000</h2>
                                    </div><br/>
                                    <h4 className="title">Monto a ganar</h4>
                                    
                                    <div className="price">
                                        <h2 className="amount">$50.000.000</h2>
                                    </div>
                                </div>
                                {/*<!-- End Table Head -->*/}
                                <div className="button">
                                    <a href="javascript:void(0)" className="btn">Inscribirse</a>
                                </div>
                                {/*<!-- Start Table Content -->*/}
                                <div className="table-content">
                                    {/*<!-- Table List -->*/}
                                    <ul className="table-list">
                                        <li>7 conferencias con entrenadores</li>
                                        <li>7 sesiones de fotografias</li>
                                        <li>Desayuno, almuerzo, cena y refrigerios</li>
                                        <li>Hospedaje y Transporte</li> 
                                        <li>Tour por el pais donde se haga el torneo</li>
                                    </ul>
                                    {/*<!-- End Table List -->*/}
                                </div>
                                {/*<!-- End Table Content -->*/}
                            </div>
                            {/*<!-- End Single Table-->*/}
                        </div>
                    </div>
                </div>
            </section>
            {/*<!--/ End Pricing Table Area -->*/}

            {/*<!-- Start Call Action Area -->*/}
            <section className="call-action overlay">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                            <div className="inner-content">
                                <div className="text">
                                    <h5 className="wow zoomIn" data-wow-delay=".2s">Torneo de barrios</h5>
                                    <h2 className="wow fadeInUp" data-wow-delay=".4s">Estos torneos son gratuitos y son con el fin que
                                        la persona conozca y aprenda sobre este deporte.
                                    </h2>
                                    <p className="wow fadeInUp" data-wow-delay=".6s">Para la realizacion de estos torneos de barrio contamos
                                        con tu donacion para llevarlo a más lugares donde desconozcan este deporte.
                                    </p>
                                </div>
                                <div className="button wow fadeInUp" data-wow-delay=".8s">
                                    <a href="javascript:void(0)" className="btn">Donar <i className="lni lni-cart-full"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*<!-- End Call Action Area -->*/}

            {/*<!-- Start Footer Area -->*/}
            <footer className="footer">
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
                                                <img src="assets/images/logo/logo2.png" alt="#" width="500"/>
                                            </a>
                                        </div>
                                        <p>Una organizacion de torneos y eventos de esgrima para que se lleve a practica por todos
                                            y para todos sin limites para nadie.
                                        </p>
                                        <span className="social-title">
                                            Siguenos:
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
                                        </ul>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer f-link">
                                        <h3>¿Quieres saber más sobre el esgrima?</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">¿Qué es?</a></li>
                                            <li><a href="javascript:void(0)">¿Para qué sirve?</a></li>
                                            <li><a href="javascript:void(0)">Beneficios</a></li>
                                            <li><a href="javascript:void(0)">Veteranos de esgrima</a></li>
                                        </ul>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                                <div className="col-lg-2 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer f-link">
                                        <h3>¿Quienes somos?</h3>
                                        <ul>
                                            <li><a href="javascript:void(0)">Sobre nosotros</a></li>
                                            <li><a href="javascript:void(0)">Nuestro trayecto</a></li>
                                            <li><a href="javascript:void(0)">Guias</a></li>
                                            <li><a href="javascript:void(0)">Contactanos</a></li>
                                        </ul>
                                    </div>
                                    {/*<!-- End Single Widget -->*/}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12">
                                    {/*<!-- Single Widget -->*/}
                                    <div className="single-footer newsletter">
                                        <h3>Recibe noticas sobre esgrima</h3>
                                        <form action="#" method="get" target="_blank" className="newsletter-form">
                                            <input name="name" placeholder="Nombre" required="required" type="text"/>
                                            <input name="email" placeholder="Correo electronico" required="required" type="email"/>
                                            <div className="button">
                                                <button className="btn">Subscrirte
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
            </footer>
            {/*<!--/ End Footer Area -->*/}

            {/*<!-- ========================= scroll-top ========================= -->*/}
            <a href="#" className="scroll-top">
                <i className="lni lni-chevron-up"></i>
            </a>

            {/*<!-- ========================= JS here ========================= -->*/}
           

            
        </Fragment>
    )
}

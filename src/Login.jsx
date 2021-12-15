import {React, Fragment} from 'react'

export function Login() {
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

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

            <div className="container">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div id="first">
                            <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1 style ={{color: "white"}}>Iniciar sesión</h1> <br/>
                                    </div>
                                    <div className="usuarios">
                                        <select>
                                        <option selected value="0"> Elige una opción </option>
                                                <optgroup label="Usuarios"> 
                                                    <option value="1">Administrador</option> 
                                                    <option value="2">Usuario Interno</option> 
                                                    <option value="3">Usuario Externo</option> 
                                            </optgroup> 
                                        </select>
                                        </div>
                                        
                                </div>
                                <form action="" method="post" name="login">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"></label>
                                        <input type="email" name="email" className="form-control" id="email"
                                            aria-describedby="emailHelp" placeholder="Correo"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"></label>
                                        <input type="password" name="password" id="password" className="form-control"
                                            aria-describedby="emailHelp" placeholder="Contraseña"/>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center"> Al iniciar sesión aceptas nuestros <a href="#">Terminos y condiciones</a></p>
                                    </div>
                                    <div className="col-md-12 text-center ">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Ingresar</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="login-or">
                                            <hr className="hr-or"/>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <p className="text-center">
                                {/*<!----            <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus"> ---->*/}
                                                <i/> Ingresar con tu cuenta de google
                                            <a/>
                                        </p>
                                    </div>
                                    <div className="form-group">
                                        <p className="text-center">¿No tienes cuenta? <a href="Registrar.html" id="signup">Registrate aqui</a></p>
                                    </div>
                                </form>

                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        

        

            

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
                                                <img src={"./images/logo/logo2.png"} alt="#"/>
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

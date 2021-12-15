import {React, Fragment} from 'react'

export function Dashboard() {
    return (
        <Fragment>
            <div clasName="animsition">
                <div clasName="page-wrapper">
                    {/*<!-- HEADER MOBILE-->*/}
                    <header clasName="header-mobile d-block d-lg-none">
                        <div clasName="header-mobile__bar">
                            <div clasName="container-fluid">
                                <div clasName="header-mobile-inner">
                                    <a clasName="logo" href="index.html">
                                        <img src="images/icon/logo.png" alt="CoolAdmin" />
                                    </a>
                                    <button clasName="hamburger hamburger--slider" type="button">
                                        <span clasName="hamburger-box">
                                            <span clasName="hamburger-inner"></span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <nav clasName="navbar-mobile">
                            <div clasName="container-fluid">
                                <ul clasName="navbar-mobile__list list-unstyled">
                                    <li>
                                        <a href="index.html">
                                            <i clasName="fas fa-tachometer-alt"></i>Inicio</a>
                                    </li>
                                    <li>
                                        <a href="usuarios.html">
                                            <i clasName="fas fa-users"></i>Usuarios</a>
                                    </li>

                                    <li clasName="active has-sub">
                                        <a clasName="js-arrow" href="#">
                                            <i clasName="fas fa-trophy"></i>Campeonatos <i clasName="fas fa-chevron-down"></i> </a>
                                        <ul clasName="list-unstyled navbar__sub-list js-sub-list">
                                            <li>
                                                <a href="campeonato.html">Consultar campeonato</a>
                                            </li>
                                            <li>
                                                <a href="crear-campeonato.html">Crear campeonato</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="equipo.html">
                                            <i clasName="fas fa-chess-rook"></i>Equipos</a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </header>
                    {/*<!-- END HEADER MOBILE-->*/}

                    {/*<!-- MENU SIDEBAR-->*/}
                    <aside clasName="menu-sidebar d-none d-lg-block">
                        <div clasName="logo">
                            <a href="#">
                                <img src="images/icon/logo.png" alt="Cool Admin" />
                            </a>
                        </div>
                        <div clasName="menu-sidebar__content js-scrollbar1">
                            <nav clasName="navbar-sidebar">
                                <ul clasName="list-unstyled navbar__list">

                                    <li>
                                        <a href="index.html">
                                            <i clasName="fas fa-tachometer-alt"></i>Inicio</a>
                                    </li>
                                    <li>
                                        <a href="usuarios.html">
                                            <i clasName="fas fa-users"></i>Usuarios</a>
                                    </li>

                                    <li clasName="active has-sub">
                                        <a clasName="js-arrow" href="#">
                                            <i clasName="fas fa-trophy"></i>Campeonatos <i clasName="fas fa-chevron-down"></i> </a>
                                        <ul clasName="list-unstyled navbar__sub-list js-sub-list">
                                            <li>
                                                <a href="campeonato.html">Consultar campeonato</a>
                                            </li>
                                            <li>
                                                <a href="crear-campeonato.html">Crear campeonato</a>
                                            </li>
                                        </ul>
                                    </li>


                                    <li>
                                        <a href="equipo.html">
                                            <i clasName="fas fa-chess-rook"></i>Equipos</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </aside>
                    {/*<!-- END MENU SIDEBAR-->*/}

                    {/*<!-- PAGE CONTAINER-->*/}
                    <div clasName="page-container">
                        {/*<!-- HEADER DESKTOP-->*/}
                        <header clasName="header-desktop">
                            <div clasName="section__content section__content--p30">
                                <div clasName="container-fluid">
                                    <div clasName="header-wrap">
                                        <form clasName="form-header" action="" method="POST">
                                            <input clasName="au-input au-input--xl" type="text" name="search"
                                                placeholder="Search for datas &amp; reports..." />
                                            <button clasName="au-btn--submit" type="submit">
                                                <i clasName="zmdi zmdi-search"></i>
                                            </button>
                                        </form>
                                        <div clasName="header-button">
                                            <div clasName="noti-wrap">
                                                <div clasName="noti__item js-item-menu">
                                                    <i clasName="zmdi zmdi-comment-more"></i>
                                                    <span clasName="quantity">1</span>
                                                    <div clasName="mess-dropdown js-dropdown">
                                                        <div clasName="mess__title">
                                                            <p>Usted tiene 2 mensajes nuevos</p>
                                                        </div>
                                                        <div clasName="mess__item">
                                                            <div clasName="image img-cir img-40">
                                                                <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                                            </div>
                                                            <div clasName="content">
                                                                <h6>Michelle Moreno</h6>
                                                                <p>Have sent a photo</p>
                                                                <span clasName="time">3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="mess__item">
                                                            <div clasName="image img-cir img-40">
                                                                <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                                            </div>
                                                            <div clasName="content">
                                                                <h6>Diane Myers</h6>
                                                                <p>You are now connected on message</p>
                                                                <span clasName="time">Yesterday</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="mess__footer">
                                                            <a href="#">View all messages</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div clasName="noti__item js-item-menu">
                                                    <i clasName="zmdi zmdi-email"></i>
                                                    <span clasName="quantity">1</span>
                                                    <div clasName="email-dropdown js-dropdown">
                                                        <div clasName="email__title">
                                                            <p>You have 3 New Emails</p>
                                                        </div>
                                                        <div clasName="email__item">
                                                            <div clasName="image img-cir img-40">
                                                                <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                                            </div>
                                                            <div clasName="content">
                                                                <p>Meeting about new dashboard...</p>
                                                                <span>Cynthia Harvey, 3 min ago</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="email__item">
                                                            <div clasName="image img-cir img-40">
                                                                <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                                            </div>
                                                            <div clasName="content">
                                                                <p>Meeting about new dashboard...</p>
                                                                <span>Cynthia Harvey, Yesterday</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="email__item">
                                                            <div clasName="image img-cir img-40">
                                                                <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                                            </div>
                                                            <div clasName="content">
                                                                <p>Meeting about new dashboard...</p>
                                                                <span>Cynthia Harvey, April 12,,2018</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="email__footer">
                                                            <a href="#">See all emails</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div clasName="noti__item js-item-menu">
                                                    <i clasName="zmdi zmdi-notifications"></i>
                                                    <span clasName="quantity">3</span>
                                                    <div clasName="notifi-dropdown js-dropdown">
                                                        <div clasName="notifi__title">
                                                            <p>You have 3 Notifications</p>
                                                        </div>
                                                        <div clasName="notifi__item">
                                                            <div clasName="bg-c1 img-cir img-40">
                                                                <i clasName="zmdi zmdi-email-open"></i>
                                                            </div>
                                                            <div clasName="content">
                                                                <p>You got a email notification</p>
                                                                <span clasName="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="notifi__item">
                                                            <div clasName="bg-c2 img-cir img-40">
                                                                <i clasName="zmdi zmdi-account-box"></i>
                                                            </div>
                                                            <div clasName="content">
                                                                <p>Your account has been blocked</p>
                                                                <span clasName="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="notifi__item">
                                                            <div clasName="bg-c3 img-cir img-40">
                                                                <i clasName="zmdi zmdi-file-text"></i>
                                                            </div>
                                                            <div clasName="content">
                                                                <p>You got a new file</p>
                                                                <span clasName="date">April 12, 2018 06:50</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="notifi__footer">
                                                            <a href="#">All notifications</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div clasName="account-wrap">
                                                <div clasName="account-item clearfix js-item-menu">
                                                    <div clasName="image">
                                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                    </div>
                                                    <div clasName="content">
                                                        <a clasName="js-acc-btn" href="#">john doe</a>
                                                    </div>
                                                    <div clasName="account-dropdown js-dropdown">
                                                        <div clasName="info clearfix">
                                                            <div clasName="image">
                                                                <a href="#">
                                                                    <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                                </a>
                                                            </div>
                                                            <div clasName="content">
                                                                <h5 clasName="name">
                                                                    <a href="#">john doe</a>
                                                                </h5>
                                                                <span clasName="email">johndoe@example.com</span>
                                                            </div>
                                                        </div>
                                                        <div clasName="account-dropdown__body">
                                                            <div clasName="account-dropdown__item">
                                                                <a href="#">
                                                                    <i clasName="zmdi zmdi-account"></i>Account</a>
                                                            </div>
                                                            <div clasName="account-dropdown__item">
                                                                <a href="#">
                                                                    <i clasName="zmdi zmdi-settings"></i>Setting</a>
                                                            </div>
                                                            <div clasName="account-dropdown__item">
                                                                <a href="#">
                                                                    <i clasName="zmdi zmdi-money-box"></i>Billing</a>
                                                            </div>
                                                        </div>
                                                        <div clasName="account-dropdown__footer">
                                                            <a href="#">
                                                                <i clasName="zmdi zmdi-power"></i>Logout</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        {/*<!-- HEADER DESKTOP-->*/}

                        {/*<!-- MAIN CONTENT-->*/}
                        <div clasName="main-content">
                            <div clasName="section__content section__content--p30">
                                <div clasName="container-fluid">
                                    <div clasName="row">
                                        <div clasName="col-md-12">
                                            <div clasName="overview-wrap">
                                                <h2 clasName="title-1">Información General</h2>

                                            </div>
                                        </div>
                                    </div>
                                    <div clasName="row m-t-25">

                                        {/*<!-- BREADCRUMB-->*/}
                                        <section clasName="au-breadcrumb m-t-25 m-l-20 m-b-20">
                                            <div clasName="section__content section__content--p30">
                                                <div clasName="container-fluid">
                                                    <div clasName="row">
                                                        <div clasName="col-md-12">
                                                            <div clasName="au-breadcrumb-content">
                                                                <div clasName="au-breadcrumb-left">
                                                                    <span clasName="au-breadcrumb-span">Tu estás aquí:</span>
                                                                    <ul clasName="list-unstyled list-inline au-breadcrumb__list">
                                                                        <li clasName="list-inline-item active">
                                                                            <a href="#">Home</a>
                                                                        </li>
                                                                        <li clasName="list-inline-item seprate">
                                                                            <span>/</span>
                                                                        </li>
                                                                        <li clasName="list-inline-item">Dashboard</li>
                                                                    </ul>
                                                                </div>
                                                                {/*<!-- <button clasName="au-btn au-btn-icon au-btn--green">
                                                                    <i clasName="zmdi zmdi-plus"></i>add item</button> -->*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                        {/*<!-- END BREADCRUMB-->*/}

                                        {/*<!-- STATISTIC-->*/}
                                        {/*<!-- <section clasName="statistic">
                                            <div clasName="section__content section__content--p30"> -->*/}
                                        <div clasName="container-fluid">
                                            <div clasName="row">
                                                <div clasName="col-md-6 col-lg-3">
                                                    <div clasName="statistic__item">
                                                        <h2 clasName="number">10,368</h2>
                                                        <span clasName="desc">Usuarios Registrados</span>
                                                        <div clasName="icon">
                                                            <i clasName="zmdi zmdi-account-o"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div clasName="col-md-6 col-lg-3">
                                                    <div clasName="statistic__item">
                                                        <h2 clasName="number">388,688</h2>
                                                        <span clasName="desc">Campeonatos Realizados</span>
                                                        <div clasName="icon">
                                                            <i clasName="zmdi zmdi-shopping-cart"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div clasName="col-md-6 col-lg-3">
                                                    <div clasName="statistic__item">
                                                        <h2 clasName="number">1,086</h2>
                                                        <span clasName="desc">Equipos Registrados</span>
                                                        <div clasName="icon">
                                                            <i clasName="zmdi zmdi-calendar-note"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div clasName="col-md-6 col-lg-3">
                                                    <div clasName="statistic__item">
                                                        <h2 clasName="number">$1,060,386</h2>
                                                        <span clasName="desc">Ganancias este mes</span>
                                                        <div clasName="icon">
                                                            <i clasName="zmdi zmdi-money"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<!-- </div>
                                        </section> -->*/}
                                        {/*<!-- END STATISTIC-->*/}
                                        <div clasName="row">
                                            <div clasName="col-md-12">
                                                {/*<!-- DATA TABLE -->*/}
                                                <h3 clasName="title-5 m-b-35">Campeonatos creados</h3>
                                                <div clasName="table-data__tool">
                                                    <div clasName="table-data__tool-left">
                                                        <div clasName="rs-select2--light rs-select2--md">
                                                            <select clasName="js-select2" name="property">
                                                                <option selected="selected">Todos los torneos</option>
                                                                <option value="">Por mayor premio</option>
                                                                <option value="">Por cantidad de equipos</option>
                                                            </select>
                                                            <div clasName="dropDownSelect2"></div>
                                                        </div>
                                                        {/*<!--- <div clasName="rs-select2--light rs-select2--sm">
                                                            <select clasName="js-select2" name="time">
                                                                <option selected="selected"></option>
                                                                <option value="">3 Days</option>
                                                                <option value="">1 Week</option>
                                                            </select>
                                                            <div clasName="dropDownSelect2"></div>
                                                        </div> --->*/}
                                                        <button clasName="au-btn-filter">
                                                            <i clasName="zmdi zmdi-filter-list"></i>filters</button>
                                                    </div>
                                                    <div clasName="table-data__tool-right">
                                                        <button clasName="au-btn au-btn-icon au-btn--green au-btn--small">
                                                            <i clasName="zmdi zmdi-plus"></i>Añadir nuevo campo</button>
                                                        <div clasName="rs-select2--dark rs-select2--sm rs-select2--dark2">
                                                            <select clasName="js-select2" name="type">
                                                                <option selected="selected">Opciones</option>
                                                                <option value="">Reportar</option>
                                                                <option value="">Eliminar</option>
                                                                <option value="">Detalles</option>
                                                            </select>
                                                            <div clasName="dropDownSelect2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div clasName="table-responsive table-responsive-data2">
                                                    <table clasName="table table-data2">
                                                        <thead>
                                                            <tr>
                                                                <th>
                                                                    <label clasName="au-checkbox">
                                                                        <input type="checkbox"/>
                                                                        <span clasName="au-checkmark"></span>
                                                                    </label>
                                                                </th>
                                                                <th>Nombre</th>
                                                                <th>Lugar</th>
                                                                <th>Fecha</th>
                                                                <th>Equipos</th>
                                                                <th>Proceso</th>
                                                                <th>Premio</th>
                                                                <th>Responsable</th>
                                                                <th></th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr clasName="tr-shadow">
                                                                <td>
                                                                    <label clasName="au-checkbox">
                                                                        <input type="checkbox"/>
                                                                        <span clasName="au-checkmark"></span>
                                                                    </label>
                                                                </td>
                                                                <td>Torneo 1</td>
                                                                <td>
                                                                    <span clasName="block-email">Cartagena</span>
                                                                </td>
                                                                <td clasName="desc">15/2/2022</td>
                                                                <td>8</td>
                                                                <td>
                                                                    <span clasName="status--process">Aceptando inscripciones</span>
                                                                </td>
                                                                <td>$1.000.000</td>
                                                                <td>Juan Pablo MI SKIN</td>

                                                                <td>
                                                                    <div clasName="table-data-feature">
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Inscribirse">
                                                                            <i clasName="zmdi zmdi-mail-send"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Editar">
                                                                            <i clasName="zmdi zmdi-edit"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Eliminar">
                                                                            <i clasName="zmdi zmdi-delete"></i>
                                                                        </button>
                                                                        <a href="table.html" clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Detalles">
                                                                            <i clasName="zmdi zmdi-more"></i>
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr clasName="spacer"></tr>
                                                            <tr clasName="tr-shadow">
                                                                <td>
                                                                    <label clasName="au-checkbox">
                                                                        <input type="checkbox"/>
                                                                        <span clasName="au-checkmark"></span>
                                                                    </label>
                                                                </td>
                                                                <td>Torneo 2</td>
                                                                <td>
                                                                    <span clasName="block-email">Barranquilla</span>
                                                                </td>
                                                                <td clasName="desc">05/5/2022</td>
                                                                <td>10</td>
                                                                <td>
                                                                    <span clasName="status--process">Aceptando inscripciones</span>
                                                                </td>
                                                                <td>$900.000</td>
                                                                <td>Juan Pablo MI SKIN</td>

                                                                <td>
                                                                    <div clasName="table-data-feature">
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Inscribirse">
                                                                            <i clasName="zmdi zmdi-mail-send"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Editar">
                                                                            <i clasName="zmdi zmdi-edit"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Eliminar">
                                                                            <i clasName="zmdi zmdi-delete"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Detalles">
                                                                            <i clasName="zmdi zmdi-more"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr clasName="spacer"></tr>
                                                            <tr clasName="tr-shadow">
                                                                <td>
                                                                    <label clasName="au-checkbox">
                                                                        <input type="checkbox"/>
                                                                        <span clasName="au-checkmark"></span>
                                                                    </label>
                                                                </td>
                                                                <td>Torneo 2</td>
                                                                <td>
                                                                    <span clasName="block-email">Medellin</span>
                                                                </td>
                                                                <td clasName="desc">05/11/2021</td>
                                                                <td>16</td>
                                                                <td>
                                                                    <span clasName="status--denied">Inscripciones cerradas</span>
                                                                </td>
                                                                <td>$600.000</td>
                                                                <td>Juan Pablo MI SKIN</td>

                                                                <td>
                                                                    <div clasName="table-data-feature">
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Inscribirse">
                                                                            <i clasName="zmdi zmdi-mail-send"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Editar">
                                                                            <i clasName="zmdi zmdi-edit"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Eliminar">
                                                                            <i clasName="zmdi zmdi-delete"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Detalles">
                                                                            <i clasName="zmdi zmdi-more"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr clasName="spacer"></tr>
                                                            <tr clasName="tr-shadow">
                                                                <td>
                                                                    <label clasName="au-checkbox">
                                                                        <input type="checkbox"/>
                                                                        <span clasName="au-checkmark"></span>
                                                                    </label>
                                                                </td>
                                                                <td>Torneo 4</td>
                                                                <td>
                                                                    <span clasName="block-email">Cali</span>
                                                                </td>
                                                                <td clasName="desc">05/12/2021</td>
                                                                <td>12</td>
                                                                <td>
                                                                    <span clasName="status--denied">Torneo temrinado</span>
                                                                </td>
                                                                <td>$500.000</td>
                                                                <td>Juan Pablo MI SKIN</td>

                                                                <td>
                                                                    <div clasName="table-data-feature">
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Inscribirse">
                                                                            <i clasName="zmdi zmdi-mail-send"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Editar">
                                                                            <i clasName="zmdi zmdi-edit"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Eliminar">
                                                                            <i clasName="zmdi zmdi-delete"></i>
                                                                        </button>
                                                                        <button clasName="item" data-toggle="tooltip"
                                                                            data-placement="top" title="Detalles">
                                                                            <i clasName="zmdi zmdi-more"></i>
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/*<!-- END DATA TABLE -->*/}
                                            </div>
                                        </div>

                                    </div>

                                    {/*<!-- END PAGE CONTAINER-->*/}
                                </div>
                                <div clasName="row m-t-20">
                                    <div clasName="col-lg-12">
                                        {/*<!-- USER DATA-->*/}
                                        <div clasName="user-data m-b-30">
                                            <h3 clasName="title-3 m-b-30">
                                                <i clasName="zmdi zmdi-account-calendar"></i>Usuarios
                                            </h3>
                                            <div clasName="filters m-b-45">
                                                <div clasName="rs-select2--dark rs-select2--md m-r-10 rs-select2--border">
                                                    <select clasName="js-select2" name="propiedad">
                                                        <option selected="selected">Todos</option>
                                                        <option value="">Usuarios Internos</option>
                                                        <option value="">Usuarios Externos</option>
                                                    </select>
                                                    <div clasName="dropDownSelect2"></div>
                                                </div>
                                                <div clasName="rs-select2--dark rs-select2--sm  rs-select2--border">
                                                    <select clasName="js-select2 au-select-dark" name="order">
                                                        <option selected="selected">Filtros</option>
                                                        <option value="">Registros Recientes</option>
                                                        <option value="">Registros Antiguios</option>
                                                    </select>
                                                    <div clasName="dropDownSelect2"></div>
                                                </div>
                                            </div>
                                            <div clasName="table-responsive table-data">
                                                <table clasName="table">
                                                    <thead>
                                                        <tr>
                                                            <td>
                                                                <label clasName="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span clasName="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>Nombre</td>
                                                            <td>Identificacion</td>
                                                            <td>Rol</td>
                                                            <td>Acciones</td>
                                                            {/*<!-- <td></td>< -->*/}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>

                                                            <td>
                                                                <label clasName="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span clasName="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div clasName="table-data__info">
                                                                    <h6>Juan Jiménez</h6>
                                                                    <span>
                                                                        <a href="#">IsabelaTeAmo@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div clasName="table-data__info">
                                                                    <h6>1.193.081.254</h6>
                                                                </div>

                                                            </td>
                                                            <td>
                                                                <span clasName="role admin">Administrador</span>
                                                            </td>


                                                            <td>
                                                                <div clasName="table-data-feature">

                                                                    <button clasName="item" data-toggle="tooltip" data-placement="top"
                                                                        title="Edit">
                                                                        <i clasName="zmdi zmdi-edit"></i>
                                                                    </button>
                                                                    <button clasName="item" data-toggle="tooltip" data-placement="top"
                                                                        title="Delete">
                                                                        <i clasName="zmdi zmdi-delete"></i>
                                                                    </button>
                                                                    <span clasName="more">
                                                                        <i clasName="zmdi zmdi-more"></i>
                                                                    </span>

                                                                </div>
                                                            </td>



                                                        </tr>


                                                        <tr>
                                                            <td>
                                                                <label clasName="au-checkbox">
                                                                    <input type="checkbox" checked="checked"/>
                                                                    <span clasName="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div clasName="table-data__info">
                                                                    <h6>lori lynch</h6>
                                                                    <span>
                                                                        <a href="#">johndoe@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>

                                                            <td>
                                                                <div clasName="table-data__info">
                                                                    <h6>1.193.081.254</h6>
                                                                </div>

                                                            </td>
                                                            <td>
                                                                <span clasName="role user">Usuario Externo</span>
                                                            </td>

                                                            <td>
                                                                <div clasName="table-data-feature">

                                                                    <button clasName="item" data-toggle="tooltip" data-placement="top"
                                                                        title="Edit">
                                                                        <i clasName="zmdi zmdi-edit"></i>
                                                                    </button>
                                                                    <button clasName="item" data-toggle="tooltip" data-placement="top"
                                                                        title="Delete">
                                                                        <i clasName="zmdi zmdi-delete"></i>
                                                                    </button>
                                                                    <span clasName="more">
                                                                        <i clasName="zmdi zmdi-more"></i>
                                                                    </span>

                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <label clasName="au-checkbox">
                                                                    <input type="checkbox"/>
                                                                    <span clasName="au-checkmark"></span>
                                                                </label>
                                                            </td>
                                                            <td>
                                                                <div clasName="table-data__info">
                                                                    <h6>lori lynch</h6>
                                                                    <span>
                                                                        <a href="#">johndoe@gmail.com</a>
                                                                    </span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div clasName="table-data__info">
                                                                    <h6>1.193.081.254</h6>
                                                                </div>

                                                            </td>
                                                            <td>
                                                                <span clasName="role user">Usuario Externo</span>
                                                            </td>


                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div clasName="user-data__footer">
                                                <a href="usuarios.html" clasName="au-btn au-btn-load">Ver más</a>
                                            </div>
                                        </div>
                                        {/*<!-- END USER DATA-->*/}
                                        {/*<!-- Jquery JS-->*/}
                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

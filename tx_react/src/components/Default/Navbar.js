import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div 
                id="kt_body" 
                className="header-fixed header-mobile-fixed" >
                <div 
                    id="kt_header_mobile" 
                    className="header-mobile bg-primary header-mobile-fixed" >
                    <a 
                        href="/">
                        <img 
                            alt="Logo" 
                            src="../../assets/logo-circle.png" 
                            className="max-h-30px" />
                        <span 
                            style={{color:'white'}}>
                            telMAX
                        </span>
                    </a>
		        <div 
                    className="d-flex align-items-center">
                    <button 
                        className="btn p-0 burger-icon burger-icon-left ml-4" 
                        id="kt_header_mobile_toggle">
                            <span></span>
                    </button>
                    <button 
                        className="btn p-0 ml-2" 
                        id="kt_header_mobile_topbar_toggle">
                        <span className="svg-icon svg-icon-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                                version="1.1">
                                <g 
                                    stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                    <path
                                d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                fill="#000000"
                                fillRule="nonzero"
                                opacity="0.3"></path>
                                <path
                                d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                fill="#000000"
                                fillRule="nonzero">
                                </path>
                                </g>
                            </svg>
                        </span>
                    </button>
		        </div>
	        </div>

	        <div 
                className="d-flex flex-column flex-root" >
		        <div 
                    className="d-flex flex-row flex-column-fluid page">
			        <div 
                        className="d-flex flex-column flex-row-fluid wrapper" 
                        id="kt_wrapper">
				        <div 
                            className="header flex-column header-fixed" 
                            id="kt_header">
					        <div 
                                className="header-top">
                                <div 
                                    className="container">
							        <div 
                                        className="d-none d-lg-flex align-items-center mr-3">
								        <a 
                                            href="/" 
                                            className="mr-20">
                                                <img 
                                                alt="Logo" 
                                                src="../../assets/logo-circle.png" 
                                                className="max-h-35px" />
									                <span 
                                                        style={{color:'white'}}>
                                                        telMAX
                                                    </span>
								        </a>
								        <ul 
                                            className="header-tabs nav align-self-end font-size-lg" 
                                            role="tablist">
									        <li 
                                                className="nav-item">
										        <a 
                                                    href="!#" 
                                                    className="nav-link py-4 px-6 active" 
                                                    style={{cursor:'pointer'}} 
                                                    data-toggle="tab" 
                                                    data-target="#kt_header_tab_1" 
                                                    role="tab">
                                                        Home
                                                </a>
									        </li>
									        <li 
                                                className="nav-item mr-3">
										        <a 
                                                    href="!#" 
                                                    className="nav-link py-4 px-6" 
                                                    style={{cursor:'pointer'}}  
                                                    data-toggle="tab" 
                                                    data-target="#kt_header_tab_2" 
                                                    role="tab">
                                                        CRM Leads
                                                </a>
									        </li>
									        <li 
                                                className="nav-item mr-3">
										        <a 
                                                    href="!#" 
                                                    className="nav-link py-4 px-6" 
                                                    style={{cursor:'pointer'}} 
                                                    data-toggle="tab" 
                                                    data-target="#kt_header_tab_3" 
                                                    role="tab">
                                                        Template
                                                </a>
									        </li>
								        </ul>
							        </div>
							        <div 
                                        className="topbar bg-primary">
								        <div 
                                            className="topbar-item mr-1">
									        <div 
                                                className="btn btn-icon btn-hover-transparent-white btn-clean btn-lg" 
                                                data-toggle="modal" 
                                                data-target="#kt_chat_modal">
                                            </div>
								        </div>
								        <div 
                                            className="topbar-item">
									        <a 
                                                href="!#">
										        <div 
                                                    className="btn btn-icon btn-hover-transparent-white w-lg-auto d-flex align-items-center btn-lg px-2" 
                                                    id="kt_quick_user_toggle">
											        <div 
                                                        className="d-flex flex-column text-right pr-lg-3">
												        <span 
                                                            className="text-white opacity-50 font-weight-bold font-size-sm d-none d-md-inline">
                                                                Fahim
                                                        </span>
												        <span 
                                                            className="text-white font-weight-bolder font-size-sm d-none d-md-inline">
                                                                Developer
                                                        </span>
											</div>
											<span className="symbol symbol-35">
												<span className="symbol-label font-size-h5 font-weight-bold text-white bg-white-o-30">F</span>
											</span>
										</div>
									</a>
								</div>
								<div className="topbar-item">
									<a href="!#">
										<div className="btn btn-icon btn-hover-transparent-white w-lg-auto d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
											<div className="d-flex flex-column text-right pr-lg-3">
												<span className="text-white opacity-50 font-weight-bold font-size-sm d-none d-md-inline">Fahim</span>
											</div>
											<span className="symbol symbol-35">
												<span className="symbol-label font-size-h5 font-weight-bold text-white bg-white-o-30">F</span>
											</span>
										</div>
									</a>
								</div>
								<div className="topbar-item mr-1">
									<div className="btn btn-icon btn-hover-transparent-white btn-clean btn-lg" data-toggle="modal" data-target="#kt_chat_modal">
										<a href="/logout">
											<i className="icon text-white flaticon-logout"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="header-bottom">
						<div className="container">
							<div className="header-navs header-navs-left" id="kt_header_navs">
								<ul className="header-tabs p-5 p-lg-0 d-flex d-lg-none nav nav-bold nav-tabs" role="tablist">
									<li className="nav-item mr-1">
										<a href="!#"  className="nav-link btn btn-clean active" data-toggle="tab" data-target="#kt_header_tab_1" role="tab">Home</a>
									</li>
									<li className="nav-item mr-2">
										<a href="!#" className="nav-link btn btn-clean py-4 px-6" data-toggle="tab" data-target="#kt_header_tab_2" role="tab">CRM Leads</a>
									</li>
								</ul>
								<div className="tab-content">
									<div className="tab-pane py-5 p-lg-0 show active" id="kt_header_tab_1">
										<div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
											<ul className="menu-nav">
												<li className="menu-item menu-item-active" >
													<a href="/" className="menu-link">
														<span className="menu-text">Dashboard</span>
													</a>
												</li>
												<li className="menu-item menu-item-submenu menu-item-rel" data-menu-toggle="click" >
													<a href="!#" className="menu-link menu-toggle">
														<span className="menu-text">Reports</span>
														<span className="menu-desc"></span>
														<i className="menu-arrow"></i>
													</a>
													<div className="menu-submenu menu-submenu-classNameic menu-submenu-left">
														<ul className="menu-subnav">
															<li className="menu-item menu-item-submenu" data-menu-toggle="hover">
																<a href="!#" className="menu-link menu-toggle">
																	<span className="menu-text">Item Under Reports</span>
																</a>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="tab-pane p-5 p-lg-0 justify-content-between" id="kt_header_tab_2">
										<div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
											<ul className="menu-nav">
												<li className="menu-item menu-item-active">
													<a href="!#" className="btn btn-outline-secondary mr-3 my-2 my-lg-0">All Leads</a>
												</li>
											</ul>
										</div>
										<div className="d-flex align-items-center">
											<a href="!#" className="btn btn-outline-secondary mr-3 my-2 my-lg-0">New Lead</a>
										</div>
									</div>
									<div className="tab-pane p-5 p-lg-0 justify-content-between" id="kt_header_tab_3">
										<div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
											<ul className="menu-nav">
												<li className="menu-item menu-item-active">
													<a href="!#" className="btn btn-outline-secondary mr-3 my-2 my-lg-0">New Template</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        </div>
    )
}

export default Navbar;
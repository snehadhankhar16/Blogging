import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
const[toggle,settoggle]=useState(false)
const[activeIndex,setActiveIndex]=useState(null);
const toggleAccordion = (index) => {
  if (activeIndex === index) {
    setActiveIndex(null); // Close the active one if clicked again
  } else {
    setActiveIndex(index); // Open the clicked accordion
  }
};
  return (
    <div>
        <div className="navbar-area header-one" id="navbar">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/">
                                <img className="logo-light" src="../assets/img/logo-white.png" alt="logo" />
                                <img className="logo-dark" src="../assets/img/logo-white.png" alt="logo" />
                            </Link>
                            <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
                                <span onClick={()=>settoggle(!toggle)}  className="burger-menu">
                                    <span className="top-bar" />
                                    <span className="middle-bar" />
                                    <span className="bottom-bar" />
                                </span>
                            </a>
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav mx-auto">
                                    <li className="nav-item">
                                        <Link to={'/Blogs'} className="nav-link active">Our Blogs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/AddBlog'} className="nav-link">Add Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/MyAccount'} className="nav-link">My Account</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={'/'} className="nav-link">
                                            Logout
                                        </Link>
                                    </li>
                                </ul>
                                <div className="others-option d-flex align-items-center"></div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className={toggle?"responsive-navbar offcanvas offcanvas-end show":"responsive-navbar offcanvas offcanvas-end"}  tabIndex={-1} id="navbarOffcanvas">
                    <div className="offcanvas-header">
                        <Link to="/" className="logo d-inline-block">
                            <img className="logo-light" src="../assets/img/logo.webp" alt="logo" />
                            <img className="logo-dark" src="../assets/img/logo-white.png" alt="logo" />
                        </Link>
                        <button type="button" onClick={()=>settoggle(!toggle)} className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
                            <i className="ri-close-line" />
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <div className="accordion" id="navbarAccordion">
                            <div className="accordion-item">
                                <Link to={'/Blogs'}><button className="accordion-button  active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Our Blogs</button></Link>
                            </div>
                            <div className="accordion-item">
                                <Link to={'/AddBlog'}><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Add Blog</button></Link>
                            </div>
                            <div className="accordion-item">
                                <Link to={'/MyAccount'}><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">My Account</button></Link>
                            </div>
                            <div className="accordion-item">
                                <Link to={'/'} className="accordion-link">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">Logout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AdminHeader
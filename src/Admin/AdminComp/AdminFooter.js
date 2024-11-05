import React from 'react'

const AdminFooter = () => {
  return (
    <div>
        <div className="container-fluid">
                    <div className="footer-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <p className="copyright-text">© <span>Insightful Pulse</span> made by <a href="https://codepulse.site/">Code Pulse IT Services</a></p>
                            </div>
                            <div className="col-lg-4 text-center" />
                            <div className="col-lg-4">
                                <div className="footer-right">
                                    <button className="subscribe-btn" data-bs-toggle="modal" data-bs-target="#newsletter-popup">Log
                                        out<i className="flaticon-right-arrow" /></button>
                                    <p>Get all the latest posts delivered straight to your inbox.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default AdminFooter
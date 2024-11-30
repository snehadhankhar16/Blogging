import React from 'react'
import { useNavigate } from 'react-router-dom'

const Authorcomp = ({users}) => {
    const navigate=useNavigate
    return (
        <div>
            <div className="container ptb-100">
            <div className="row justify-content-center">
                {
                    users && Object.keys(users)?.map((key,index)=>
                        <div onClick={()=>{localStorage.setItem("Authors",JSON.stringify(key)); navigate("/AuthorDetails")}} key={index} className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
                    <div className="team-card">
                        <div className="team-card-info">
                            <h3 style={{fontSize:"15x"}}>{users[key]?.Name}</h3>
                            <span style={{fontSize:"13px"}}>{users[key]?.Email}</span>
                        </div>
                        <div className="team-card-img">
                        <img loading='lazy' src={users[key]?.ProfileImage?.url?users[key]?.ProfileImage?.url:"assets/img/no person.jpg"} alt="Image" />
                        </div>
                    </div>
                </div>)
                }
            </div>
        </div>
        <div className="container pb-100">
            <div className="row gx-55 gx-5 align-items-center">
                <div className="col-lg-6">
                    <div className="skill-bg bg-f">
                        <a className="play-now" data-fslightbox href="https://www.youtube.com/watch?v=oDDbVC3Hekc">
                            <i className="flaticon-play-button" />
                            <span className="ripple" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="skill-content">
                        <span>Popular Skills</span>
                        <h2>We’re Best Experience Insurance Provider</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less nor
                            distribution of letters, as opposed to using ontent here content.</p>
                        <div className="progressbar-wrap">
                            <div className="progress-item">
                                <div className="progress-title">
                                    <p>News Network</p>
                                    <span className="percent">79%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={79} aria-valuemin={0} aria-valuemax={100} style={{ maxWidth: '79%' }}>
                                    </div>
                                    </div>
                            </div>
                            <div className="progress-item">
                                <div className="progress-title">
                                    <p>Quality Makes</p>
                                    <span className="percent">93%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100} style={{ maxWidth: '93%' }}>
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
export default Authorcomp
                      
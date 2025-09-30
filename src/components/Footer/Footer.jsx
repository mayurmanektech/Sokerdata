import { NavLink } from 'react-router-dom'
import logo from "../../assets/images/footer-logo.svg"
import MapIcon from "../../assets/images/icons/map.svg"
import MailIcon from "../../assets/images/icons/email.svg"
import PhoneIcon from "../../assets/images/icons/phone.svg"
import Youtube from "../../assets/images/icons/youtube.svg"
import X from "../../assets/images/icons/x.svg"
import Facebook from "../../assets/images/icons/facebook.svg"
import Instagram from "../../assets/images/icons/instagram.svg"

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row footer-row">
                    <div className="col-md-6 col-xl-3">
                        <img src={logo} alt="Soker Data" />
                        <p className='company-info'>Lorem ipsum dolor sit amet consectetur. Augue ultrices felis vitae curabitur congue. Viverra et amet tempus ac eleifends.</p>
                        <ul className="social-list">
                            <li>
                                <NavLink className="nav-link" to={"About"}>
                                    <img src={Youtube} alt="Youtube" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>
                                    <img src={X} alt="X" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>
                                    <img src={Facebook} alt="Facebook" />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>
                                    <img src={Instagram} alt="Instagram" />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <h2>Quicklinks</h2>
                        <ul>
                            <li>
                                <NavLink className="nav-link" to={"About"}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Publications And Podcast</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Data Collaborators</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Life Sciences</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Resrouces</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <h2>Quicklinks</h2>
                        <ul>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Partnerships</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Publications</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Data Insights</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Clinical Trials</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Genomic Profiles</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link" to={"About"}>Proteomic Profiles</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <h2>Quicklinks</h2>
                        <ul className='contact-list'>
                            <li>
                                <span className="icon">
                                    <img src={MapIcon} alt="Map Icon" />
                                </span>
                                <p>Sample Location <br/>Address 12345</p>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={MailIcon} alt="Email" />
                                </span>
                                <NavLink className="nav-link" to={"About"}>sample.email123@sample.com</NavLink>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={PhoneIcon} alt="Phone Icon" />
                                </span>
                                <NavLink className="nav-link" to={"About"}>011 - 222- 3333</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className='copyright-txt'>© 2024 SÖker Data | All Rights Reserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
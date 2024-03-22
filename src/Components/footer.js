
import React from 'react';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { PiTiktokLogoFill } from "react-icons/pi";
import '../index.css';
const Footer = () => <footer className="page-footer font-small blue pt-4 ">
    <div className="container-fluid text-center text-md-left ">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Amasu Express</h5>
                <p>Here is a place to reach your development goals.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">App Link</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">contact</a></li>
                    <li><a href="#!">About</a></li>
                    <li><a href="#!">ignoring</a></li>
                    <li><a href="#!">purchase</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Our Social Media</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><IoLogoWhatsapp /></a></li>
                    <li><a href="#!"><FaInstagramSquare /></a></li>
                    <li><a href="#!"><FaFacebook /></a></li>
                    <li><a href="#!"><PiTiktokLogoFill /></a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:
        <a href="https://mdbootstrap.com/"> Amasu.com</a>
    </div>

</footer>

export default Footer
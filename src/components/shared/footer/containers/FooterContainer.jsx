import React  from 'react';
import Footer from '../../footer/Index';
import { Icon } from '../icons/styles/Icons';

export function FooterContainer() {
    return(
        <>
            <Footer>
                <Footer.Wrapper>
                    <Footer.Row>
                        <Footer.Column>
                            <Footer.Title>About Us</Footer.Title>
                            <Footer.Link href="#">Story</Footer.Link>
                            <Footer.Link href="#">Clients</Footer.Link>
                            <Footer.Link href="#">Testimonials</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Services</Footer.Title>
                            <Footer.Link href="#">Marketing</Footer.Link>
                            <Footer.Link href="#">Consulting</Footer.Link>
                            <Footer.Link href="#">Development</Footer.Link>
                            <Footer.Link href="#">Desing</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Contact Us</Footer.Title>
                            <Footer.Link href="#">United States</Footer.Link>
                            <Footer.Link href="#">United Kingdom</Footer.Link>
                            <Footer.Link href="#">Australia</Footer.Link>
                            <Footer.Link href="#">New Zealand</Footer.Link>
                        </Footer.Column>
                        <Footer.Column>
                            <Footer.Title>Social</Footer.Title>
                            <Footer.Link href="#"><Icon className="fab fa-facebook" />Facebook</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-instagram" />instagram</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-youtube" />YouTube</Footer.Link>
                            <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                        </Footer.Column>
                    </Footer.Row>
                </Footer.Wrapper>
            </Footer>
            <div className="footer-copy">
                <p className="footer-copy-text">E-shoes - All right reserved - &#169;</p>
            </div>
        </>
    )
}
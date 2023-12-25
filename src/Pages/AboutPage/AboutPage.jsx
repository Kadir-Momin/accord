import React from "react"
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about-page-container">
            <div className="about-image">
                <img src="/Images/AboutPageImage.jpg" alt="about-page" className="about-page-image"/>
                <h1 className="about-heading">About ACCORD Fuelling Services</h1>
            </div>
            <div className="about-body">
                <h1>About Us</h1>
                <p>We are offering systems and solutions related to fuel transfer and fuel management 
                    applications. We are a team of experience individuals from oil and gas downstream domain 
                    with more than 35+ years of working experience in fuel retail industry.
                    Strong in-house development team is the backbone of our organization. We are flexible in 
                    adopting and incorporating new changes in our product and solutions to meet our customer’s
                    expectations. Experienced team of fuel retail domain experts helps in improving and 
                    upgrading our products and services with respect to change in statutory norms and 
                    industry requirement. We work towards providing products/services and solutions to 
                    meet end to end customer requirements. We strongly believe in providing quality product 
                    at right price and providing hassle free service support throughout the product life.</p>
            </div>
        </div>
        
    )
}

export default AboutPage
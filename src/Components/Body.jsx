import React from 'react'
import chatbot from '../assets/Image/chat.png'
import support from '../assets/Image/icons/support.svg'
import Alert from '../assets/Image/icons/Alerts.svg'
import Guidance from '../assets/Image/icons/Guidance.svg'
import Home from '../assets/Image/9.jpg'
import borrow from '../assets/Image/10.jpg'
import save from '../assets/Image/11.jpg'

import edu from '../assets/Image/icons/edu.svg'
import comment from '../assets/Image/icons/comment.svg'
import guide from '../assets/Image/icons/guide.svg'
import inov from '../assets/Image/icons/inov.svg'
import kids from '../assets/Image/icons/kids.svg'
import Program from '../assets/Image/icons/Program.svg'

const Body = () => {
    return (
        <div style={{ margin: "0px 5%" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div id='mainimg'>
                </div>
            </div>

            <div style={{ marginTop: "6%" }}>
                <h4 id="title1"><span id="under">We're</span> a Credit Union Catered to You.</h4>
                <h2 style={{ paddingTop: "20px", fontWeight: 300, marginLeft: "10px" }}>How can we help?</h2>
                <div id='cardsection' style={{ display: "flex", gap: 20, color: "white", paddingTop: "3%" }}>
                    <div id='cardMain'>
                        <img src={support} alt="support" id='icon' />
                        <h4>24/7 Customer Support</h4>
                        <h5>Robust 24/7 customer support system, including live chat, to assist customers with their inquiries, account-related issues, and general banking needs.</h5>
                    </div>
                    <div id='cardMain'>
                        <img src={Guidance} alt="support" id='icon' />
                        <h4>Personalized Financial Guidance</h4>
                        <h5>Personalized financial advice and guidance to customers based on their transaction history, spending patterns, and financial goals. </h5>
                    </div>
                    <div id='cardMain'>
                        <img src={Alert} alt="support" id='icon' />
                        <h4>Real-Time Transaction Alerts</h4>
                        <h5>Real-time notifications and alerts for every transaction, offering enhanced security and helping customers stay on top of their financial activities. </h5>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: "6%" }}>
                <h4 id="title1"><span id="under">Ben</span>efits & Offers</h4>
                <h2 style={{ paddingTop: "20px", fontWeight: 300, marginLeft: "10px" }}>Whether you’re in need of personal banking or business banking.</h2>
                <div id='cardsection' style={{ display: "flex", gap: 20, color: "black", paddingTop: "3%" }}>
                    <div id='cMain'>
                        <img src={Home} alt="support" id='cimg' />
                        <h4>DCU REALTY</h4>
                        <h5>Set a more accurate home price with a free market analysis</h5>
                    </div>
                    <div id='cMain'>
                        <img src={borrow} alt="support" id='cimg' />
                        <h4>HOME EQUITY LOANS</h4>
                        <h5>Your home's equity could provide the way</h5>
                    </div>
                    <div id='cMain'>
                        <img src={save} alt="support" id='cimg' />
                        <h4>SAVINGS ACCOUNT</h4>
                        <h5>Earn 3.56% APY - higher than the national average</h5>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", margin: "10% 0px" }}>
                <div style={{ background: "#166534", display: 'flex', justifyContent: "space-between", width: "90vw", borderRadius: "20px" }}>
                    <div id='content1'>
                        <h2 style={{ fontSize: "30px", fontWeight: 400 }}>
                            Chatbot Bank
                        </h2>
                        <h4 style={{ fontSize: "20px", fontWeight: 300, width: "80%" }}>
                            Intelligent Banking, Personalized Service: Where Chat Bots and Your Finances Connect.
                        </h4>
                    </div>
                    <img id="chatimg" src={chatbot} alt="chatbot" />
                </div>
            </div>
            <div >
                <h4 id="title1"><span id="under">What</span> makes Digital Federal Credit Union Different?</h4>
                <div id='cardsection' style={{ display: "flex", gap: 20, color: "white", paddingTop: "3%" }}>
                    <div id='cardMain2'>
                        <img src={comment} alt="support" id='icon' />
                        <h4>Your Opinion Counts</h4>
                        <h5>We invite you to share your feedback about Kore products and services.</h5>
                    </div>
                    <div id='cardMain2'>
                        <img src={edu} alt="support" id='icon' />
                        <h4>Financial Education</h4>
                        <h5>We’re a digital credit union that empowers our members of all ages to achieve their financial goals. </h5>
                    </div>
                    <div id='cardMain2'>
                        <img src={guide} alt="support" id='icon' />
                        <h4>BALANCESM Program</h4>
                        <h5>Helping you build a better financial future with free, trusted guidance; and resources.</h5>
                    </div>
                </div>
                <div id='cardsection' style={{ display: "flex", gap: 20, color: "white", paddingTop: "3%" }}>
                    <div id='cardMain2'>
                        <img src={inov} alt="support" id='icon' />
                        <h4>FinTech Innovation</h4>
                        <h5>Members benefit from the latest in FinTech innovation through our support of seed-stage startups.</h5>
                    </div>
                    <div id='cardMain2'>
                        <img src={kids} alt="support" id='icon' />
                        <h4>Kore for Kids</h4>
                        <h5>Our 501 (c)(3) non-profit charitable foundation to benefit children and families.</h5>
                    </div>
                    <div id='cardMain2'>
                        <img src={Program} alt="support" id='icon' />
                        <h4>EVERFI Program</h4>
                        <h5>Interactive modules on planning, saving, and borrowing to help you build your financial acumen.</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
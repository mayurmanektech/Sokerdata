import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Home/Banner'
import Footer from '../components/Footer/Footer'

const ThankYou = () => {
  return (
    <>
        <Header />
        <div className='internal-page thankyou-page'>
            <Banner>
                <div className='banner-content'>
                    <h1>Thank you for your interest in our research</h1>
                    <p className='big'>This is an anonymous survey. Your insights are invaluable to advancing the understanding of patient experience.</p>
                    <p>Should you wish to participate in further research, please provide your email address.</p>
                </div>
            </Banner>
        </div>
        <Footer />
    </>
  )
}

export default ThankYou

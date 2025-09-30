
import Banner from '../components/Home/Banner'
import ContentFrame from '../components/Home/ContentFrame'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import gray_bg from '../assets/images/gray-bg.webp'
import contentFrame1 from '../assets/images/content-frame1.webp'
import contentFrame2 from '../assets/images/content-frame2.webp'
import ourPromise from '../assets/images/our-promise.webp'
import ourPartner from '../assets/images/our-partner.webp'
import BgContent from '../components/Home/BgContent'
import FooterTopBlack from '../components/Home/FooterTopBlack'
import { NavLink } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
        <Header />
        <div className='homepage'>
        {/* Banner section */}
        <Banner>
        <div className='banner-content'>
            <h1>Welcome to the <span>SökerData Patient Portal</span></h1>
        </div>
        </Banner>
        {/* End Banner section */}

        {/* Service section */}
        <section className='home-service section_space bg-img' style={{backgroundImage: 'url('+gray_bg+')',}}>
        <div className='container'>
            <ContentFrame>
            <div className='content'>
                <h2>Real Voices, Real Impact: Transforming Healthcare with Real-World Evidence</h2>
                <p>
                At SökerData, your story has the power to change healthcare. We are collecting real-world data—firsthand experiences from patients like you—to better understand how treatments perform in everyday life. Real-world evidence includes information gathered outside of controlled clinical trials, reflecting diverse patient experiences with drugs, treatments, and healthcare processes. By participating, you are helping to create a more inclusive healthcare system, where every voice is heard, every background represented, and every life honored.
                </p>
            </div>
            <div className='frame'>
                <img src={ contentFrame1 } alt='Real Voices, Real Impact: Transforming Healthcare with Real-World Evidence'></img>
            </div>
            </ContentFrame>
            <ContentFrame direction='leftImage'>
            <div className='frame'>
                <img src={ contentFrame2 } alt='Why Your Experience Matters'></img>
            </div>
            <div className='content'>
                <h2>Why Your Experience Matters</h2>
                <p>
                Despite strides in medical research, a significant data gap exists. Women contribute only around 30% to existing real-world evidence datasets, while Black and ethnic minority patients represent just 13%. This lack of diverse representation limits our understanding of how treatments truly affect different groups. At SökerData, we are on a mission to bridge this gap, capturing the unique responses and experiences from underrepresented communities to help build a healthcare system that sees, hears, and supports everyone.
                </p>
                <p>
                Every drug interaction leaves a trace. Each treatment experience could vary based on genetic, lifestyle, and demographic factors, and these differences deserve to be seen and understood. By sharing your story, you are part of a movement to make healthcare smarter, safer, and more inclusive.
                </p>
            </div>
            </ContentFrame>
        </div>
        </section>
        {/* End Service section */}

        {/* Our promise section */}
        <section className='section_space our-promise bgContent' style={{backgroundImage: 'url('+ourPromise+')',}}>
        <div className='container'>
            <BgContent>
            <div className='promise-main'>
            <h2>Our Promise: A Commitment to Inclusive <br></br>Health Data</h2>
            <p>We imagine a world where health data represents everyone, ensuring that no community is left behind. Your contribution helps us build a healthcare system grounded in real, diverse experiences, and we are grateful for every story shared.</p>
            <p>This is about more than data—it’s about honoring the lives and unique experiences behind each number. Together, we are shaping a future where medical research truly benefits all.</p>
            </div>
            </BgContent>
        </div>
        </section>
        {/* End Our promise section */}

        {/* Our partner section */}
        <section className='our-partner section_space'>
        <div className='container'>
        <ContentFrame>
        <div className='content'>
                <h2>Our Partners in Research and Development</h2>
                <p>
                To ensure that your experiences create meaningful change, SökerData collaborates with trusted organizations and industry leaders, including:
                </p>
                <div className="list-container">
                    <ol className="styled-list">
                    <li>
                        <strong>Pharmaceutical and Biotech Companies</strong> – Helping shape treatments that are patient-centered and responsive to real-world data.
                    </li>
                    <li>
                        <strong>Research Institutions and Universities</strong> – Converting data insights into actionable healthcare innovations.
                    </li>
                    <li>
                        <strong>Patient Advocacy Groups</strong> – Amplifying patient voices to guide research priorities.
                    </li>
                    <li>
                        <strong>Public Health Agencies</strong> – Supporting policies that reflect the real needs of diverse communities.
                    </li>
                    </ol>
                </div>
                <p>
                These partnerships empower us to ensure that every experience is used responsibly and constructively for the benefit of future patients and advancements in healthcare.
                </p>
            </div>
            <div className='frame'>
                <img src={ ourPartner } alt='Our Partners in Research and Development'></img>
            </div>
        </ContentFrame>
        </div>
        </section>
        {/* End Our partner section */}

        {/* Help section */}
        <section className='help-section'>
        <div className='container'>
            <FooterTopBlack>
            <div className='help-main'>
            <div className='help-left'>
                <h2>Thank You for Sharing Your Story</h2>
                <p>If you need support or have questions, we're here to listen. Please reach out to us anytime at <NavLink to={"mailto:weareheretolisten@soker-data.com"}>weareheretolisten@soker-data.com</NavLink>.</p>
            </div>
            <div className='help-right'>
                <p>Together, we can create a healthcare system that truly cares for all.</p>
            </div>
            </div>
            </FooterTopBlack>
        </div>
        </section>
        {/* End Help section */}
        <Footer />
    </div>
  </>
  );
};

export default HomePage;

import hero_banner from '../../assets/images/hero-banner.webp'

const Banner = ({ children  }) => {
  return (
    <>
        <section className='banner-section' style={{backgroundImage: 'url('+hero_banner+')',}}>
            <div className='container'>
                {children}
            </div>
        </section> 
    </>
  )
}

export default Banner

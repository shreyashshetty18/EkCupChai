import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItworks'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Publish from '../components/Publish'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HowItWorks />
            <Features />
            <Testimonials />
            <CallToAction />
            <Publish />
            <Footer />
        </div>
    )
}

export default Home

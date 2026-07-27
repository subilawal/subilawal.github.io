import HeroSection from "./HeroSection";
import heroImage from "../assets/ResumePicture.png";

const Hero = () => {
    return (
        <section className="hero">
            <img src={heroImage} alt="Subi Lawal" className="hero-image" />
            <HeroSection />
        </section>
    );
}

export default Hero;
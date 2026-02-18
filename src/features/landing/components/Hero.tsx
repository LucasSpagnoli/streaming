import HeroLayout from "./heroLayout";
import heroMovies from "@/features/landing/api/HeroMovies";

const Hero = async () => {
    const movies = await heroMovies()
    return (<HeroLayout movies={movies} />);    
}

export default Hero
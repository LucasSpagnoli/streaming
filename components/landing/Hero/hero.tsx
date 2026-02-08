import getHeroMovie from '@/lib/tmdb'
import HeroClient from "@/components/landing/Hero/heroClient";

const Hero = async () => {
    const movie1 = await getHeroMovie({id: 155})
    const movie2 = await getHeroMovie({id: 10625})
    const movie3 = await getHeroMovie({id: 315635})
    const movies = [movie1, movie2, movie3]

    return (<HeroClient movies={movies} />);
};

export default Hero;
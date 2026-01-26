import Image from "next/image";

const Hero = () => {
    return (
        <section>
            <div className={"flex"}>
                <div className={"bg-red-600 divBgRed w-3/5 min-h-screen"}></div>
                <div className={"bg-black divBgBlack w-2/5 min-h-screen"}></div>

                <div className={"bg-amber-100 w-1/6 h-20"}>

                </div>
            </div>
        </section>
    )
}

export default Hero;
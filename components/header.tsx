import { CircleUser } from 'lucide-react'
import Link from "next/link";
import NavLink from "@/components/navLink";
import { Bricolage_Grotesque } from "next/font/google";

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    display: "swap",
});

const Header = () => {


    return (
        <nav className={"bg-black/85 w-full absolute flex items-center justify-between z-5 pr-3"}>
            <p aria-label="Logo" className={`p-5 ml-7 hidden sm:block text-red-600 ${bricolage.className}`}> F </p>
            <div className={"bg-dark border-darkGray"}>
                <ul className={"flex p-1.5"}>
                    <NavLink text={"Home"} link={"/"} />
                    <NavLink text={"My Area"} link={"/"} />
                    <NavLink text={"Movies"} link={"/"} />
                </ul>
            </div>

            <Link href={"/login"} className={"lg:mr-20"}><CircleUser className={"text-white"} /> </Link>
        </nav>
    )
}

export default Header
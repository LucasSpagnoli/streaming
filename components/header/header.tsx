import Image from "next/image";
import {CircleUser} from 'lucide-react'
import Link from "next/link";
import NavLink from "@/components/header/navLink";

const Header = () => {
    return (
        <nav className={"bg-black/85 w-full absolute flex items-center justify-between z-5 pr-3"}>
            <Image className={"p-5 ml-7 hidden sm:block"} src={"/logo.svg"} alt={"Favorite logo header image"} width={60} height={50}
                   priority={true}/>
            <div className={"bg-dark border-darkGray"}>
                <ul className={"flex p-1.5"}>
                    <NavLink text={"Home"} link={"/"} />
                    <NavLink text={"My Area"} link={"/"} />
                    <NavLink text={"Movies"} link={"/"} />
                </ul>
            </div>

            <Link href={"/login"} className={"lg:mr-20"}><CircleUser className={"text-white"}/> </Link>
        </nav>
    )
}

export default Header
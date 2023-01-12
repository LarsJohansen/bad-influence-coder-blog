import Image from "next/image";
import Logo from "../../public/images/badinfluencecoder_logo_fill.svg";
import Navigation from "./Navigation";


export default function Header() {
    return (
        <header>
            <Logo alt="badinfluencecoder logo"/>
            <div>badinfluence:coder</div>
            <nav>
                <Navigation />
            </nav>
        </header>
    )
}
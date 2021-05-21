import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./header.css";
import {HamburgerIcon, ReportIcon, LearnIcon, UserIcon, LanguageIcon} from "../svg/svg"

export function Menu() {
    const [size, setSize] = useState(() => {
        return window.innerWidth < 1100;
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth < 1100)
        {
            setSize(true);
        }
        else
        {
            setSize(false);
        }
    })

    function openHamburger() {
        const burgerMenu = document.getElementById("burgerMenu");
        const cheese = document.getElementById("cheese");
        console.log(burgerMenu.style.display);
        if (burgerMenu.style.display === "none")
        {
            burgerMenu.style.display = "block";
            cheese.style.transform = "rotate(90deg)";
        }
        else
        {
            burgerMenu.style.display = "none";
            cheese.style.transform = "rotate(0deg)";
        }
    }

    const burger = (
        <>
            <HamburgerIcon
                onClick={() => openHamburger()}
                fill={"#f2f2f2"}
                className={"header-hamburger"}>
            </HamburgerIcon>
            <div className={"header-hamburger-menu"} id={"burgerMenu"} style={{display: "none"}}>
                <Link to={"/report"}>
                    <div className={"header-item-hamburger"}>
                        <ReportIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>REPORT</h5>
                    </div>
                </Link>
                <Link to={"/learn"}>
                    <div className={"header-item-hamburger"}>
                        <LearnIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>LEARN</h5>
                    </div>
                </Link>
                <Link to={"/profile"}>
                    <div className={"header-item-hamburger"}>
                        <UserIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>USERS</h5>
                    </div>
                </Link>
                <Link to={"/language"}>
                    <div className={"header-item-hamburger"}>
                        <LanguageIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>LANGUAGE</h5>
                    </div>
                </Link>
            </div>
        </>
    )

    const normal = (
        <>
            <Link to={"/report"}>
                <li className="header_links">
                    <ReportIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h2 className="header_linkName center">REPORT</h2>
                    </div>
                </li>
            </Link>
            <Link to={"/learn"}>
                <li className="header_links">
                    <LearnIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h2 className="header_linkName center">LEARN</h2>
                    </div>
                </li>
            </Link>
            <Link to={"/profile"}>
                <li className="header_links">
                    <UserIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h2 className="header_linkName center">USERS</h2>
                    </div>
                </li>
            </Link>
            <Link to={"/language"}>
                <li className="header_links">
                    <LanguageIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h2 className="header_linkName center">LANGUAGE</h2>
                    </div>
                </li>
            </Link>
        </>
    )

    if (size)
    {
        return burger;
    }
    else
    {
        return normal;
    }
}

export const Header = () => {

    return (
        <div className="header_container">
            <h1 className="header_title">BR!GHT</h1>
            <ul className="header_urlContainer">
                <Menu/>
            </ul>
        </div>
    );
};

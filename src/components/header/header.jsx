import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./header.css";
import {HamburgerIcon, ReportIcon, LearnIcon, UserIcon, LanguageIcon} from "../svg/svg"
import {useLocation} from "react-router";
import Cookies from 'js-cookie'

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

    //oversetter alle sider
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
        })
    }
    

    function openHamburger() {
        const burgerMenu = document.getElementById("burgerMenu");
        const cheese = document.getElementById("cheese");
        const burgerContainer = document.getElementById("hamburger-container");
        console.log(burgerMenu.style.display);
        if (burgerMenu.style.display === "none")
        {
            burgerMenu.style.display = "block";
            cheese.style.transform = "rotate(90deg)";
            cheese.style.fill = "#ffffff";
            burgerContainer.style.background = "#174a5b";
        }
        else
        {
            burgerMenu.style.display = "none";
            cheese.style.transform = "rotate(0deg)";
            cheese.style.fill = "#434343";
            burgerContainer.style.background = "#ffffff";
        }
    }

    //caller på googletranslate for hver gang headern rendres, også timeout for å "vente" på google
    useEffect(() => {
        setTimeout(function(){ googleTranslateElementInit() }, 100);
        }, []);

    const burger = (
        <>
            <div id={"hamburger-container"} onClick={() => openHamburger()}>
                <HamburgerIcon
                    fill={"#f2f2f2"}
                    className={"header-hamburger"}>
                </HamburgerIcon>
            </div>
            <div className={"header-hamburger-menu"} id={"burgerMenu"} style={{display: "none"}}>
                <Link onClick={() => openHamburger()} to={"/report"} >
                    <div className={"header-item-hamburger"}>
                        <ReportIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>REPORT</h5>
                    </div>
                </Link>
                <Link onClick={() => openHamburger()} to={"/learn"}>
                    <div className={"header-item-hamburger"}>
                        <LearnIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>LEARN</h5>
                    </div>
                </Link>
                <Link onClick={() => openHamburger()} to={"/users"}>
                    <div className={"header-item-hamburger"}>
                        <UserIcon
                            className={"hamburger-svg"}
                        />
                        <h5 className={"center"}>USERS</h5>
                    </div>
                </Link>
            </div>
        </>
    );

    const normal = (
        <>
            <Link to={"/report"}>
                <li className="header_links">
                    <ReportIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h6 className="header_linkName center">REPORT</h6>
                    </div>
                </li>
            </Link>
            <Link to={"/learn"}>
                <li className="header_links">
                    <LearnIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h6 className="header_linkName center">LEARN</h6>
                    </div>
                </li>
            </Link>
            <Link to={"/users"}>
                <li className="header_links">
                    <UserIcon
                        className={"header_svg"}
                    />
                    <div className="header_links_text_container">
                        <h6 className="header_linkName center">USERS</h6>
                    </div>
                </li>
            </Link>
        </>
    );

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
    const location = useLocation();
    const loginPage = (location.pathname.startsWith("/login"));

    const header = (
            <div className="header_container">
                <div className={"header"}>
                    <Link to={"/mainmenu"}>
                        <h1 className="header_title notranslate">BR!GHT</h1>
                    </Link>
                    <ul className="header_urlContainer">
                        <Menu/>
                    </ul>
                </div>
            </div>
    );

    if (!loginPage)
    {
        return header;
    }
    else
    {
        return <></>;
    }
}

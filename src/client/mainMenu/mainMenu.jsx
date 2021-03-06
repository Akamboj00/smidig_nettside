import React, { useState, useEffect } from "react";
import "./mainMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, Image, Card, CardDeck, Row, CardGroup, Button, Container, Col} from "react-bootstrap";
import {BrowserRouter, Link} from "react-router-dom";
import {HamburgerIcon, ReportIcon, LearnIcon, UserIcon, LanguageIcon} from "../../components/svg/svg"
import {useHistory} from "react-router";
import image1 from "url:../../components/img/mainMenu/bright1.jpeg";
import image2 from "url:../../components/img/mainMenu/bright2.webp";
import image3 from "url:../../components/img/mainMenu/bright3.jpeg";
import image4 from "url:../../components/img/mainMenu/bright4.jpeg";
import image5 from "url:../../components/img/mainMenu/bright5.jpeg";
import image6 from "url:../../components/img/mainMenu/bright6.jpeg";
import image7 from "url:../../components/img/mainMenu/bright7.jpeg";
import image8 from "url:../../components/img/mainMenu/bright8.jpeg";
import image9 from "url:../../components/img/mainMenu/bright9.jpeg";
import { ReportDocumentationModal } from "./documentation/reportdocumentation";
import { LearnDocumentationModal } from "./documentation/learndocumentation"
import { UserDocumentationModal } from "./documentation/userdocumentation"

require("url:../../components/img/profileicon.png");
require("url:../../components/img/reporticon.png")
require("url:../../components/img/learnicon.png")
require("url:../../components/img/learnicon.png")

export function MainMenu() {
    const history = useHistory();
    const [authKey, setAuthKey] = useState(() => {
        let key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
        if (key === undefined) return history.push("/login");
        return key;
    });

    return (
        <>
            <div id="container_main">
                <div className={"wrap_container wrap_content wrap_image"}>
                    <img className="main_image" src="https://bright-products.com/wp-content/uploads/2018/11/header-photo-gradient-2-web-2000x900.jpg" alt="Card image"/>
                </div>
                <div className={"wrap_container wrap_content wrap_home"}>
                    <div className={"container_inner"}>
                        <div className="main_content">
                            <Container className="main_card_container">
                                <Row md={3}>
                                    <Col>
                                        <Card className="main_card">
                                            <Link
                                            style={{textDecoration: "none", color: "black"}}
                                            to={{pathname: "/reportdocumentation"}}>
                                                <div className="card_img_container">
                                                    <ReportIcon
                                                        className={"main_card_icon center"}
                                                    />
                                                </div>
                                                <Card.Body className="card_text">
                                                    <Card.Title>Report</Card.Title>
                                                    <Card.Text>
                                                        Component documentation
                                                    </Card.Text>
                                                </Card.Body>
                                            </Link>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card onClick={() => setLearnDocumentation(true)} className="main_card">
                                            <div className="card_img_container">
                                                <LearnIcon
                                                    className={"main_card_icon center"}
                                                />
                                            </div>
                                            <Card.Body className="card_text">
                                                <Card.Title>Learn</Card.Title>
                                                <Card.Text>
                                                    Component documentation
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card onClick={() => setUserDocumentation(true)} className="main_card">
                                            <div className="card_img_container">
                                                <UserIcon
                                                    className={"main_card_icon center"}
                                                />
                                            </div>
                                            <Card.Body className="card_text">
                                                <Card.Title>Users</Card.Title>
                                                <Card.Text>
                                                    Component documentation
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
                <div className={"container_padding"}/>
            </div>
        </>
    );
}

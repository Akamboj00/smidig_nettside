import React from "react";
import "./mainMenu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Image, Card, CardDeck, Row, CardGroup, Button, Container, Col } from "react-bootstrap";
import { BrowserRouter, Link } from "react-router-dom";
import {HamburgerIcon, ReportIcon, LearnIcon, UserIcon, LanguageIcon} from "../../components/svg/svg"
import image1 from "url:../../components/img/mainMenu/bright1.jpeg";
import image2 from "url:../../components/img/mainMenu/bright2.webp";
import image3 from "url:../../components/img/mainMenu/bright3.jpeg";
import image4 from "url:../../components/img/mainMenu/bright4.jpeg";
import image5 from "url:../../components/img/mainMenu/bright5.jpeg";
import image6 from "url:../../components/img/mainMenu/bright6.jpeg";
import image7 from "url:../../components/img/mainMenu/bright7.jpeg";
import image8 from "url:../../components/img/mainMenu/bright8.jpeg";
import image9 from "url:../../components/img/mainMenu/bright9.jpeg";
require("url:../../components/img/profileicon.png");
require("url:../../components/img/reporticon.png")
require("url:../../components/img/learnicon.png")
require("url:../../components/img/learnicon.png")

export function MainMenu() {
  return (
    <div className="main_container">
      <div className="main_content">
          <Card className="main_image_card">
            <Card.Img className="main_image" src="https://bright-products.com/wp-content/uploads/2018/11/header-photo-gradient-2-web-2000x900.jpg" variant="top" alt="Card image" />
          </Card>
            <Container className="main_card_container">
              <Row md={4}>
                <Col>
                <Card className="main_card">
                  <div className="card_img_container">
                  <ReportIcon
                            className={"main_card_icon center"}
                        />
                </div>
                  <Card.Body  className="card_text">
                    <Card.Title>Report</Card.Title>
                    <Card.Text>
                    Component documentation
                    </Card.Text>
                  </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="main_card">
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
                <Card className="main_card">
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
                <Col>
                <Card className="main_card">
                <div className="card_img_container">
                <LanguageIcon
                            className={"main_card_icon center"}
                        />
                </div>
                  <Card.Body className="card_text">
                    <Card.Title>Language</Card.Title>
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
  );
}

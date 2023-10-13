import React from "react";
import "./About.css";
import { Col, Container, Row } from "reactstrap";

function About() {
  return (
    <>
      <div className="about-hero">
        <div className="about-page">
          <Container>
            <div className="about-words">
              <p className="mb-0 text-xl font-semibold">A few words</p>
              <h1 className="text-8xl font-light">About us</h1>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="about-intro py-24">
          <p className="text-lg font-semibold">who we are</p>
          <p className="text-6xl font text-justify aboutcont">
            we are the India's largest specialist chocolate retailer with 50
            stores across the India.
          </p>
          <p className="text-lg font-semibold text-justify">
            we are the India's largest specialist fragrance retailer and we are
            trying to grow our buisness across the worldwide. Our vision is
            sprade our stroe across the worldwide that's why we regurely improve
            our product as well as our marketing stretergy.
          </p>
        </div>

        <div className="about-img "></div>

        <div className="about-intro py-24">
          <p className="text-lg font-semibold">Old friends</p>
          <p className="text-5xl font text-justify aboutcont">
            here with you for over 15 years
          </p>
          <p className="text-lg font-semibold text-justify">
            We also have a chocolate over 15 to 20 years old so you don't need
            to worry for give up your favourite chocolate because we care for
            you. Not only care but we also love to serve your favourite
            chocolates at discouted price. We give a special sale to our old
            customers so dont't forget to join our community.
          </p>
        </div>
      </Container>

      <div className="about-attachment mb-24"></div>

      <Container>
        <Row className="mb-24 justify-center items-center gap-5 p-10 mission">
          <Col className="flex-1  ">
            <p className="text-lg font-semibold text-center">
              we are visionaries
            </p>
            <p className="text-7xl font aboutcont text-center">Mission</p>
            <p className="text-justify">
              Our Mission is very clear. We are now India's best sellers but we
              want a world's best sellers that's why we continue improve our
              marketikg stretergy as well as Product. it's very challanging to
              give you latest chocolate that's why out technical team always in
              touch with brand and we always ready to serve you as quickly as
              possible.
            </p>
          </Col>
          <Col className="flex-1">
            <div className="about-mission"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;

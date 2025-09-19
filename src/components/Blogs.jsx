import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

// import multiple images
import bg1 from "../assets/bg.jpg";
import bg2 from "../assets/bg (6).jpg";
import bg3 from "../assets/bg (7).jpg";
import bg4 from "../assets/bg (4).jpg";
import bg5 from "../assets/bg (5).jpg";

const blogChartData = [
  { season: "Spring", growth: 40 },
  { season: "Summer", growth: 70 },
  { season: "Autumn", growth: 55 },
  { season: "Winter", growth: 30 }
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-5 blogs-section">
      <Container>
        <h2 className="section-title gradient-text text-center mb-4">
          Farming Knowledge
        </h2>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="blogs-hero glass-box p-4">
              <h4>Sowing Seeds Right</h4>
              <p>
                Prepare well-tilled soil, ensure proper drainage, use quality
                seeds and maintain irrigation. Follow seasonal best practices to
                improve yield.
              </p>
              <ul>
                <li>Choose quality seeds</li>
                <li>Maintain soil pH</li>
                <li>Use compost and mulch</li>
              </ul>
            </div>
          </Col>

          <Col md={6}>
            <Carousel fade interval={2500} className="rounded overflow-hidden">
              <Carousel.Item>
                <img src={bg1} alt="farming1" className="d-block w-100 carousel-img" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={bg2} alt="farming2" className="d-block w-100 carousel-img" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={bg3} alt="farming3" className="d-block w-100 carousel-img" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={bg4} alt="farming4" className="d-block w-100 carousel-img" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={bg5} alt="farming5" className="d-block w-100 carousel-img" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <div className="chart-wrap mt-5 glass-box p-3">
          <h5 className="mb-3">Seasonal growth (index)</h5>
          <BarChart
            width={680}
            height={300}
            data={blogChartData}
            className="mx-auto"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
            <XAxis dataKey="season" stroke="#cde" />
            <YAxis stroke="#cde" />
            <Tooltip />
            <Bar dataKey="growth" fill="#2dce89" />
          </BarChart>
        </div>
      </Container>
    </section>
  );
}

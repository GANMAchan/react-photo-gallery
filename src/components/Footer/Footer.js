import React from 'react';
import { Container, Row, Col } from 'reactstrap';

//フッターはstateを持たないためfunction componentを使う
const Footer = () => {

  //getYear関数に動的に現在の年を取得
  const getYear = () => {
    return new Date().getFullYear();
  }

  return(
    <footer id="Footer" className="pt-3 text-center">
      <Container>
        <Row>
          <Col>
            <p className="small">
              Photo Gallery created by men, Copyright &copy;{getYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

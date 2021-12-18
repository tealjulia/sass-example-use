import { Container, Col, Row } from "react-bootstrap";
import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <>
      <Container
        className={`${styles.menuContainer} ${styles.contentContainer} mx-auto col-10 col-md-6`}
      >
        <Row>
          <Col className="col-12 col-md-6">
            <p className={styles.menuSubheading}>Coffee Drinks</p>
            <ul className={styles.customList}>
              <li>Latte</li>
              <li>Mocha</li>
              <li>Americano</li>
              <li>Doppio con Panna</li>
              <li>Doppio Macchiato</li>
              <li>Pourover</li>
            </ul>
            <p className={styles.menuSubheading}>Non-Coffee Drinks</p>
            <ul className={styles.customList}>
              <li>Chai</li>
              <li>Yerba Mate</li>
              <li>Hot Chocolate</li>
              <li>Golden Milk</li>
            </ul>
          </Col>

          <Col className="col-12 col-md-6">
            <p className={styles.menuSubheading}>Food</p>
            <ul className={styles.customList}>
              <li>Croissant</li>
              <li>Pain au Chocolat</li>
              <li>Kouign Amann</li>
              <li>Doppio con Panna</li>
              <li>Doppio Macchiato</li>
              <li>Pourover</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

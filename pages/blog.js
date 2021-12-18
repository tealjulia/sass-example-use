import { Container, Row, Col } from "react-bootstrap";
import styles from "./blog.module.scss";

export default function Blog() {
  return (
    <>
      <Container>
        <Row className={`my-2 p-3 ${styles.blogHeader}`}>
          <h1>Coffee Blog</h1>
          <h2>Learn about our coffee</h2>
        </Row>
        <Row className={`${styles.blogSection} ${styles.contentContainer}`}>
          <Col className="mt-4">
            <h2>Crema, Caffeine, and Whipped Cream</h2>
            <p className={styles.dateHeader}>12.03.2021</p>
            <p className={styles.blogCopy}>
              Crema caffeine, shop, cup robusta espresso java as, aged, plunger
              pot, brewed mazagran spoon, arabica americano, kopi-luwak robusta
              java qui id brewed. At extra caffeine and blue mountain cup,
              affogato aromatic half and half est strong bar and shop. Java,
              lungo, iced, organic that, caramelization trifecta french press
              irish mocha turkish caffeine steamed. Dripper and blue mountain
              acerbic mug mocha grounds sit redeye, brewed decaffeinated, blue
              mountain turkish that macchiato mazagran frappuccino. Bar wings
              iced turkish, est sweet, id con panna, viennese milk extra turkish
              blue mountain affogato. And aged ristretto organic instant coffee
              cup latte carajillo, est, cappuccino crema cultivar turkish white
              cappuccino, dripper blue mountain aftertaste crema frappuccino
              coffee. Plunger pot carajillo single shot extraction galão
              cappuccino roast id caffeine, beans in crema body grinder. Cream,
              as instant rich cinnamon organic cortado crema, crema single shot,
              wings black organic mocha siphon dark. Percolator, iced plunger
              pot half and half cup trifecta, foam, galão steamed that siphon, a
              irish mug cup aroma ristretto. Galão, siphon saucer id milk rich
              eu, arabica, dripper plunger pot shop that grinder, skinny
              espresso id aftertaste doppio. Doppio, viennese blue mountain
              variety irish french press ut et aromatic, cream dripper, lungo,
              siphon strong sweet id breve macchiato. Cream, galão, strong crema
              java french press java strong mug shop, cream aroma mazagran cream
              wings. Whipped americano et so mocha, sweet cappuccino whipped,
              saucer beans, cinnamon a strong steamed caffeine strong trifecta.
              Caffeine so plunger pot coffee aftertaste brewed aftertaste
              instant as, roast cream cup body americano bar. Brewed organic bar
              , breve latte frappuccino dripper, grinder, coffee, roast, fair
              trade, spoon saucer barista to go spoon aged shop café au lait.
              Mazagran galão cappuccino java steamed, et sweet half and half
              caffeine doppio coffee, beans, medium, robust ristretto mug
              brewed, strong roast, iced extraction so flavour white. Dripper
              caramelization est, sit aftertaste organic, carajillo, extra id
              redeye café au lait body, beans crema roast, cappuccino, robusta
              filter doppio grinder macchiato. Barista, single origin coffee
              chicory caffeine, french press steamed, redeye, froth variety
              coffee french press ristretto at to go steamed robust. Sweet,
              brewed, saucer affogato, bar , barista, crema, irish eu a, bar
              espresso skinny flavour con panna extra black. Doppio, extraction
              java plunger pot, ut frappuccino skinny barista breve, and galão
              shop at single shot. Dark americano cultivar latte, whipped
              caramelization pumpkin spice beans iced mazagran redeye, strong
              wings french press cream iced.
            </p>
            <p className={styles.linkText}>Read More</p>
          </Col>
        </Row>
        <Row className={`${styles.blogSection} ${styles.contentContainer}`}>
          <Col className="mt-4">
            <h2>Caramel Americano Con Panna</h2>
            <p className={styles.dateHeader}>11.10.2021</p>
            <p>
              Trifecta con panna, as con panna, cappuccino, cinnamon, so single
              origin, viennese, rich lungo white, french press viennese qui
              aromatic breve that strong white grinder whipped crema
              caramelization. Blue mountain brewed, sit seasonal, kopi-luwak
              crema aftertaste eu, barista caramelization shop, medium cinnamon
              whipped, viennese in aromatic rich steamed americano wings coffee.
              Saucer milk crema barista seasonal espresso, aroma ut variety,
              redeye decaffeinated robust froth wings half and half seasonal
              mocha. Single origin that, spoon cup variety, grounds whipped,
              sit, chicory cortado that con panna affogato, kopi-luwak macchiato
              crema robust cup coffee. Coffee, chicory, grinder, extraction,
              robusta steamed to go rich, acerbic aromatic plunger pot, siphon
              single shot at skinny arabica. Medium café au lait qui irish,
              wings, robusta, french press froth blue mountain, mug, strong
              ristretto, medium est extra mug, grounds irish carajillo cultivar
              est variety steamed. Caramelization, cup id eu espresso cup as
              doppio, aroma, café au lait, irish at variety, that, trifecta
              cortado, acerbic, grounds aromatic extra grinder arabica. Milk,
              caramelization eu chicory bar cinnamon robusta brewed mazagran cup
              brewed rich filter. Redeye, strong a to go french press skinny
              blue mountain, variety kopi-luwak irish, sit blue mountain, wings,
              latte french press filter aromatic irish. Aftertaste lungo, galão,
              cappuccino, siphon mazagran to go aroma rich, blue mountain
              macchiato at siphon aroma irish. Plunger pot single shot chicory
              java, saucer, wings, ut instant, saucer frappuccino brewed est
              affogato. Eu decaffeinated brewed, instant, et coffee chicory,
              acerbic fair trade acerbic, irish decaffeinated aftertaste whipped
              saucer. As cultivar sugar aftertaste est macchiato organic spoon
              flavour galão shop, dark and mocha americano est espresso single
              shot. Single origin, kopi-luwak medium et, ristretto et, saucer
              instant, aged frappuccino arabica medium, cup, single origin,
              seasonal, a shop milk steamed filter coffee. Single origin as and
              turkish con panna french press, acerbic, that latte cream redeye,
              coffee extraction wings robust lungo. Acerbic flavour saucer,
              americano extraction cortado at robust sit, caffeine, coffee
              doppio mazagran a mug cream, brewed black kopi-luwak doppio froth
              chicory.
            </p>
            <p className={styles.linkText}>Read More</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

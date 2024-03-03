import Container from "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

export default function Listings() {
    return(
        <div>
            <h2>Choose your store in Chicago</h2>
            <Container fluid='sm' style={{marginTop: '40px', textAlign: 'center'}}>
                <Row style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/7/cf1e5d97-2c12-4adf-aafd-bdf944c6e654.png' alt='marianos logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Mariano's</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1833/2cb78fdb-c5cb-4078-9a8f-bd81c4a628de.png' alt='marianos delivery now logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Mariano's Delivery Now</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/10/3bbb2bb4-f942-415d-a696-f4d170acaa4c.png' alt='jewel-osco logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Jewel-Osco</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png' alt='costco logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Costco</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png' alt='ALDI logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/2527/be9e5a7a-d56a-43a0-98dd-2c4f69323481.png' alt='ALDI Express logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>ALDI Express</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/152/6786ead3-d45c-4614-a32d-35766143ada1.png' alt='binnys beverage depot logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Binny's Beverage Depot</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1396/bcfc9498-c043-4d90-b311-688c0df7bfc9.png' alt='woodmans food markets logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Woodman's Food Markets</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/60/7c3f91e9-a9cf-43cb-86fb-6d503b065af9.png' alt='tonys fresh market logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Tony's Fresh Market</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/2447/2b25041b-05f5-49de-b8c5-545d99584048.png' alt='Tonys To Go logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Tony's To Go</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1573/230283d3-fcec-402b-856f-ca0292afddd9.png' alt='walgreens logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Walgreens</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                    <Col className="d-flex align-items-center border border-dark-subtle rounded-4 shadow m-3">
                        <div>
                            <Image src='https://www.instacart.com/image-server/120x120/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/648/25d6c55a-67f5-4689-a8b2-9e349d80a04a.png' alt='target logo' style={{maxWidth: '4em'}} className="border border-secondary-subtle m-3" roundedCircle />
                        </div>
                        <div className="p-2">
                            <h5>Target</h5>
                            <p>Delivery * Pickup</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

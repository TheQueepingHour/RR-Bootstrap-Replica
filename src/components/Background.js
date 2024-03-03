// import Card from 'react-bootstrap/Card'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

export default function Background() {
    return(
        <div className='d-flex justify-content-between' style={{background: '#deedd6'}}>
            {/* <Card>
                <Card.Img src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg' alt='Instacart Produce BGImg' />
                <Card.ImgOverlay>
                    <Card.Title>Order groceries for delivery or pickup today</Card.Title>
                    <Card.Text>
                        Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card> */}
            <div>
                <DropdownButton id='dropdown-basic-button' title={<img src="https://www.instacart.com/assets/growth/landing/locations_page/us_flag-ba87db09d555f6ca56f88b49567659e9fcd51d5083d312e1040464ab996900c1.svg" alt='landing us flag' style={{maxWidth: '2em', maxHeight: '2em'}} />} variant='light' className='pt-5'>
                    <Dropdown.Item>US</Dropdown.Item>
                    <Dropdown.Item>CA</Dropdown.Item>
                </DropdownButton>
            </div>
            <div className='d-flex flex-column justify-content-evenly'>
                <h1>Order groceries for delivery or pickup today</h1>
                <p>Whatever you want from local stores, brought right to your door.</p>
            </div>
            <div>
                <img src='https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg' className='img-fluid flex-grow-1' alt='InstaCart BGImg' />
            </div>
        </div>
    )
}
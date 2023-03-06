import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';

export default function () {
        return (
            <Carousel 
                className="carousel" 
                autoPlay 
                infiniteLoop={true} 
                interval="1800"
                showStatus={false}
                >
                    <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/0fea5b45-fa6d-4538-b6da-db980d80edfd_large.jpg" />
                    <p className="legend">FASHION</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/2529172/pexels-photo-2529172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">PANTS</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/923210/pexels-photo-923210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">DRESSES</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/15113597/pexels-photo-15113597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">SHOES</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/14448670/pexels-photo-14448670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <p className="legend">TOPS</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/9775875/pexels-photo-9775875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">ACTIVEWEAR</p>
                    </div>

                    <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/8221268/pexels-photo-8221268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">COATS</p>
                    </div>
                    
                    <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/2229490/pexels-photo-2229490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">LOUNGE</p>
                    </div>

                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/7825429/pexels-photo-7825429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">SWIMWEAR</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.pexels.com/photos/4904453/pexels-photo-4904453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <p className="legend">ACCESSORIES</p>
                </div>
            </Carousel>
        );
};




///////////////////pants:
//"https://marketplace-images.asos.com/user/82ae25dc-2cb8-4960-b147-ad5c0cfc9dcd_large.jpg"


////jumpsuits
//https://marketplace-images.asos.com/user/5d58352c-8864-4d4c-b483-1e7019c4cc65_large.jpg
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';

export default function () {
        return (
            <Carousel 
                className="carousel" 
                autoPlay 
                infiniteLoop={true} 
                interval="2000"
                showStatus={false}
                >
                    <div className="carouselCard">
                    <img src="https://www.fubiz.net/wp-content/uploads/2016/12/ASOS.png" />
                    <p className="legend">FASHION</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/79c777c0-858a-44a0-8ec7-79c5b487b500_large.jpg" />
                    <p className="legend">PANTS</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/d01e1911-b33c-49e7-85d3-1486368452c0_large.jpg" />
                    <p className="legend">DRESSES</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/9aacc12c-e906-47ba-a2c5-6d6e09e7131e_large.jpg" />
                    <p className="legend">SHOES</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/9e6aeba7-5836-4f58-a64d-87cad31b4861_large.jpg"/>
                    <p className="legend">TOPS</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/69479111-3b98-49fb-aebe-a223269c1642_large.jpg" />
                    <p className="legend">ACTIVEWEAR</p>
                    </div>

                    <div className="carouselCard">
                    <img src="" />
                    <p className="legend">COATS</p>
                    </div>
                    
                    <div className="carouselCard">
                    <img src="" />
                    <p className="legend">LOUNGE</p>
                    </div>

                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/5f06ee28-3667-4fa9-9232-299698fb9a9e_large.jpg" />
                    <p className="legend">SWIMWEAR</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/a6b58d97-a956-4081-a847-1344add677c3_large.jpg" />
                    <p className="legend">ACCESSORIES</p>
                </div>
            </Carousel>
        );
};




///////////////////pants:
//"https://marketplace-images.asos.com/user/82ae25dc-2cb8-4960-b147-ad5c0cfc9dcd_large.jpg"


////jumpsuits
//https://marketplace-images.asos.com/user/5d58352c-8864-4d4c-b483-1e7019c4cc65_large.jpg
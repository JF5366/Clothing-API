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
                    <img src="https://marketplace-images.asos.com/user/a2131e01-ceef-46e5-8abe-e0fda73ba67a_large.jpg" />
                    <p className="legend">FASHION</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/8dc899e5-a0e1-4381-8a76-6617f359da4c_large.jpg" />
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
                    <img src="https://marketplace-images.asos.com/user/1ce10f66-f20d-4056-a88d-af028cd4a66f_large.jpg"/>
                    <p className="legend">TOPS</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/2dfa5f09-7395-431f-a475-8f3c13bfc14b_large.jpg" />
                    <p className="legend">ACTIVEWEAR</p>
                    </div>

                    <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/0fea5b45-fa6d-4538-b6da-db980d80edfd_large.jpg" />
                    <p className="legend">COATS</p>
                    </div>
                    
                    <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/3fbe2c8d-e8a7-40de-b1df-318a60da1863_large.jpg" />
                    <p className="legend">LOUNGE</p>
                    </div>

                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/5f06ee28-3667-4fa9-9232-299698fb9a9e_large.jpg" />
                    <p className="legend">SWIMWEAR</p>
                </div>
                <div className="carouselCard">
                    <img src="https://marketplace-images.asos.com/user/78747011-d110-4934-835b-9877e9b421a9_large.jpg" />
                    <p className="legend">ACCESSORIES</p>
                </div>
            </Carousel>
        );
};




///////////////////pants:
//"https://marketplace-images.asos.com/user/82ae25dc-2cb8-4960-b147-ad5c0cfc9dcd_large.jpg"


////jumpsuits
//https://marketplace-images.asos.com/user/5d58352c-8864-4d4c-b483-1e7019c4cc65_large.jpg
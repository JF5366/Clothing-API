import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel';

export default function () {
        return (
            <Carousel 
                className="carousel" 
                // autoPlay 
                infiniteLoop={true} 
                interval="2000"
                showStatus={false}
                >
                <div className="carouselCard">
                    <img src="https://images.asos-media.com/products/stradivarius-petite-wide-leg-relaxed-dad-pants-in-black/203912199-2?$n_320w$&wid=317&fit=constrain" />
                    
                    <p className="legend">PANTS</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.asos-media.com/products/asos-design-cotton-drop-waist-midi-skater-dress-in-black/204131856-1-black?$n_640w$&wid=513&fit=constrain" />
                    <p className="legend">DRESSES</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.asos-media.com/products/asos-design-mystic-chunky-mary-janes-in-off-white/203691968-1-offwhite?$n_640w$&wid=513&fit=constrain" />
                    <p className="legend">SHOES</p>
                </div>
                <div className="carouselCard">
                    <img src="https://images.asos-media.com/products/topshop-long-sleeve-casual-shirt-in-olive/203004675-1-khaki?$n_640w$&wid=513&fit=constrain" />
                    <p className="legend">TOPS</p>
                </div>
            </Carousel>
        );
};
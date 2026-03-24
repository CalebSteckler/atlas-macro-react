import {useState} from 'react';
import '../css/Slideshow.css';


const Slideshow = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(require.context('../images/slideshow', false, /\.(png|jpe?g|svg)$/));

    const nextSlide = () => {
        /*
        if(slideIndex === images.length - 1) {
            setSlideIndex(0);
        } else {
            setSlideIndex(slideIndex + 1);
        }*/

        setSlideIndex(slideIndex==images.length-1?0:slideIndex+1);
    };

    const prevSlide = () => {
        if (slideIndex === 0) {
            setSlideIndex(images.length - 1);
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

    return (
        <section className="slideshow">
            <img src={images[slideIndex]} id="slideshow-img"/>
            <a id="prev" onClick={prevSlide}>&#10094;</a>
            <a id="next" onClick={nextSlide}>&#10095;</a>
        </section>
    );
}

export default Slideshow;
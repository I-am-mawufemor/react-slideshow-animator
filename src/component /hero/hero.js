import './hero.css'
import { useEffect, useRef, useState } from "react";
import heroData from "./heroData"
const HeroSlideShow=({interval = 14000})=>{
    const[currentHeroSlideIndex, setCurrentHeroSlideIndex]=useState(0);
    const[animationClass, setAnimationClass]=useState("slide-in");
    const subtitleRef = useRef(null);

    useEffect(()=>{
        const heroSlideChangeInterval = setInterval(()=>{
            setAnimationClass("slide-out");
            setTimeout(()=>{
                setCurrentHeroSlideIndex((prevIndex) => (prevIndex + 1) % heroData.length);
                setAnimationClass("slide-in");
            },1000);
        }, interval);
        return()=> clearInterval(heroSlideChangeInterval);
    }, [interval]);
    useEffect(()=>{
        if(subtitleRef.current){
            const width = subtitleRef.current.scrollWidth;
            subtitleRef.current.style.width =`${width}px`
        }
    },[currentHeroSlideIndex]);

    const currentHeroSlid = heroData[currentHeroSlideIndex];
   const heroSlideshowStyle = {
    position : 'relative',
    backgroundImage: `url(${currentHeroSlid.coverImgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width:'100%',
   };
   const heroOverlayStyle = {
    content : '',
    position : 'absolute',
    top: 0,
    left : 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0, 0, 0.5)',
    zIndex: 1,
   };
   const heroContentStyle={
    position: 'relative',
    zIndex : 2,
    color: 'white',
    textAlign: 'center',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',

   };

    return(
        <div style={heroSlideshowStyle} className={animationClass}>
            <div style={heroOverlayStyle}></div>
            <div className="hero-content" style={heroContentStyle}>
                <h1 className="bannerHeadline">{currentHeroSlid.bannerHeader}</h1>
                <div className="line"></div>
                <div className="subtitle" ref={subtitleRef}>{currentHeroSlid.firstSubtitle} <span>{currentHeroSlid.subtitle}</span></div>
                <a href="/" className="explore-button"> Explore now</a>
            </div>
        </div>
    )
};
export default HeroSlideShow;
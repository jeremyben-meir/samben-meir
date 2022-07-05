import React, {useEffect, useState} from "react";
import * as HomeStyles from "../styles/HomeStyles";
import Popup from 'reactjs-popup';
import background from "../assets/background.jpg";
import twitter from "../assets/social/twitter.png";
import soundcloud from "../assets/social/soundcloud.png";
import instagram from "../assets/social/instagram.png";
import spotify from "../assets/social/spotify.png";
import ReactSoundCloud from 'react-soundcloud-embedded'

const Home = () => {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    return(
        <div style={HomeStyles.MainDiv}>
            <div style={HomeStyles.ScrollDiv}>
                <div style={HomeStyles.NavDiv}>
                    <Popup modal nested
                        trigger={ <div style={HomeStyles.SubNavDiv}> Contact </div>} 
                        >
                        <div style={HomeStyles.PopupStyle}>
                            <div>
                                <b>Phone</b> (917) 238-6997 <br/>
                            </div>
                            <div>
                                <b>Email</b> samdbenmeir@gmail.com
                            </div>
                        </div>
                    </Popup>
                    <div style={HomeStyles.TextDiv}>
                        <div style={HomeStyles.HeaderDiv}>
                            Sam Ben-Meir
                        </div>
                        <div style={HomeStyles.SubHeaderDiv}>
                            Singer, Songwriter, Instrumentalist
                        </div>
                    </div>
                    <div style={HomeStyles.SubNavDiv} onClick={()=>document.getElementById('scrollable').scrollIntoView({ behavior: 'smooth' })}>
                        Music
                    </div>
                </div>
                <div style={HomeStyles.ImgDiv(windowSize.innerWidth>800)}>
                    <div style={HomeStyles.SubImgDiv}>
                        <img src={background} style={HomeStyles.ImgStyle}/>
                    </div>
                    <div style={HomeStyles.SubImgDiv2}>
                        <div>
                            Sam Ben-Meir is a multi-faceted instrumentalist and composer. Originally from St. Louis, Missouri, Sam started playing the violin at 5 years of age. At 7 years, Sam and his family moved to New York where he continued to immerse himself in music, including learning to play the piano, double-bass and guitar. Sam later studied jazz at the University of Miami, and performed regularly at local venues.
                            <br/><br/>
                            In 2006, Sam returned to New York City to play restaurants and clubs while earning a PhD degree in Philosophy at the New School for Social Research. Throughout his career, Sam has worked with numerous noted and legendary musical talents. Sam currently lives on Manhattan’s Upper West Side where he passionately pursues his love of music as a singer, songwriter and composer.
                        </div>
                    </div>
                </div>
                <div style={HomeStyles.MusicDiv(windowSize.innerWidth>800)} id="scrollable">

                    <div style={HomeStyles.SubMusicDiv}>
                        <ReactSoundCloud height="250px" url={"https://soundcloud.com/samben-meir/sets/first-pass-drafts?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} />
                    </div>
                    <div style={HomeStyles.SubMusicDiv}>
                        <ReactSoundCloud height="250px" url={"https://soundcloud.com/samben-meir/sets/sweet-as-a-bird?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} />
                    </div>
                </div>
            </div>
            <div style={HomeStyles.BottomNav}>
                <img src={soundcloud} style={HomeStyles.SocialImg} onClick={() => window.open("https://soundcloud.com/samben-meir?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing")}/>
                <img src={spotify} style={HomeStyles.SocialImg} onClick={() => window.open("https://open.spotify.com/artist/38RZtz6gGzK5zni0BW60yN?si=HvZ_ua7uQfqnW9Jm-mXNsQ")}/>
                <img src={twitter} style={HomeStyles.SocialImg} onClick={() => window.open("http://twitter.com/sambenmeir")}/>
                <img src={instagram} style={HomeStyles.SocialImg} onClick={() => window.open("https://www.instagram.com/sam.benmeir/")}/>
            </div>
        </div>
    )
}

export default Home;
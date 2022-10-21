import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { arr } from '../Links'

export const RandomTmkocPlayer = () => {

    let [videoId, setVideoId] = useState("")
    let [links, setLinks] = useState([])
    let [id, setId] = useState(Math.floor(Math.random() * 40));
    let sameLink1 = "https://www.youtube.com"

    return (

        <div className='mainDiv'>
        
            <div className='videoPlayer'>

                <h2 className='heading'>Enjoy a Random Episode Of Evergreen <br /> ✨ Tarak Mehta ka Oolta Chashma ✨ </h2>
                <div className="player-wrapper">
                    <ReactPlayer style={{zIndex: "3"}}
                        playsInline={true}
                        className='react-player'
                        playing={true}
                        controls={true}
                        volume={0.75}
                        pip={true} url={sameLink1 + arr[id]}
                    />
                </div>
                <button className='button-85' onClick={() => { setId(Math.floor(Math.random() * 1200)); console.log(sameLink1 + arr[id], id) }}>
                    Not this one ? <br /> Click for Next Video
                </button>


            </div>

            <div className='footer'>
                <div className="madeBy">
                    <h3>Made by </h3>
                    <a href="https://github.com/SunmeetS/random-standup-comedy-player" target="blank">&nbsp; Sunmeet Singh</a>
                </div>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/sunmeetsinghhh" target="blank" className="linkedIn">&nbsp;  LinkedIn </a>
                    <a href="https://twitter.com/sunmeetsingh_" target="blank" className="twitter">&nbsp;  Twitter </a>
                    <a href="https://www.instagram.com/_sunmeetsingh_/" target="blank" className="instagram"> &nbsp; Instagram</a>
                </div>
            </div>
        </div>
    )
}
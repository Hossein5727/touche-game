import React from 'react'
import { Link } from 'react-router-dom'
import Video1 from '../videos/success.mp4'
import Audio1 from '../music/haji.mp3'

function Congratulation() {
    return (
        <>
            <video
                src={Video1}
                width="100%"
                style={{ maxWidth: '740px' }}
                loop
                muted
                autoPlay
            />
            <div>
                <audio
                    autoPlay={true}
                    controls
                    src={Audio1}
                />
            </div>
            <div>
                <Link to="/">
                    <button className="btn">Again</button>
                </Link>
            </div>
        </>
    )
}

export default Congratulation

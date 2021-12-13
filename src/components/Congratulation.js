import React from 'react'
import { Link } from 'react-router-dom'
import Video1 from '../videos/success.mp4'

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
                <Link to="/">
                    <button className="btn">Again</button>
                </Link>
            </div>
        </>
    )
}

export default Congratulation

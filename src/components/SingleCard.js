import React from 'react'

function SingleCard({ item, cover, handleChoice, filiped }) {

    const handleClick = () => {
        handleChoice(item)
    }

    return (
        <div className="container-cards">
            <div className={filiped ? "filiped" : ""}>
                <img
                    className="front cards"
                    src={item.src}
                    alt="img"
                />
                <img
                    className="back cards"
                    src={cover}
                    alt="cover"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export default SingleCard

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import '../App.css'
import img1 from '../img/helmet-1.png'
import img2 from '../img/potion-1.png'
import img3 from '../img/ring-1.png'
import img4 from '../img/scroll-1.png'
import img5 from '../img/shield-1.png'
import img6 from '../img/sword-1.png'
import cover from '../img/cover.png'
import SingleCard from './SingleCard'

const cardImages = [
    { 'src': img1, 'matched': false },
    { 'src': img2, 'matched': false },
    { 'src': img3, 'matched': false },
    { 'src': img4, 'matched': false },
    { 'src': img5, 'matched': false },
    { 'src': img6, 'matched': false },
]

function HomeGame() {

    const [card, setCard] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(false)
    const [isShowName, setIsShowName] = useState(false)
    const navigate = useNavigate()

    const shuffleCards = () => {
        const shuffle = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((item) => ({ ...item, id: Math.random() }))

        setCard(shuffle)
        setTurns(0)
    }

    let check = card.every(({ matched }) => matched == true)
    if (card.length) {
        console.log(check);
        if (check)
            navigate("/congratulation")
    }
    const handleChoice = (item) => {
        choiceOne ? setChoiceTwo(item) : setChoiceOne(item)
    }

    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prev => prev + 1)
        setDisabled(false)
    }

    // const handleNaivagate = (item, index) => {
    //     if (item.matched === true)
    // }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {

                setCard(prev => {
                    return prev.map(item => {
                        if (item.src === choiceOne.src) {
                            return { ...item, matched: true }
                        } else {
                            return item
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => {
                    resetTurn()
                }, 1000);
            }

        }

    }, [choiceOne, choiceTwo, card])

    useEffect(() => {
        setIsShowName(true)
        setInterval(() => {
            setIsShowName(false)
        }, 4000);
    }, [])

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>
            {isShowName && (
                <p className="writer">By Hossein Ghiasi</p>
            )}
            <div className="container-cards">
                {card && card.length > 0 && card.map((item) => (
                    <SingleCard
                        cover={cover}
                        item={item}
                        key={item.id}
                        handleChoice={handleChoice}
                        filiped={item === choiceOne || item === choiceTwo || item.matched}
                        disabled={disabled}
                    />
                ))}
            </div>
        </div>
    );
}

export default HomeGame
import './EmotionButton.css'

function EmotionButton(props) {
    const { setColor } = props

    return (
        <div className="EmotionButton">
            <button onClick={() => setColor('#FDE68A')}>😃</button>
            <button onClick={() => setColor('#6EE7b7')}>😐</button>
            <button onClick={() => setColor('#60A5FA')}>😢</button>
        </div>
    )
}

export default EmotionButton
import './EmotionButton.css'
import { changeColor } from './actions'

import { connect } from 'react-redux'

function EmotionButton(props) {
    const { changeColor } = props

    return (
        <div className="EmotionButton">
            <h4>How's the weather making you feel?</h4>
            <div>
                <button onClick={() => changeColor('linear-gradient(45deg, #fff126, #ffba26)')}>😃</button>
                <button onClick={() => changeColor('linear-gradient(45deg, #34e89e, #0f3443)')}>😐</button>
                <button onClick={() => changeColor('linear-gradient(45deg, #373b44, #4286f4)')}>😢</button>
            </div>
        </div>
    )
}


export default connect(null, { changeColor })(EmotionButton)
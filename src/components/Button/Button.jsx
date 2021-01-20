import React from 'react'
import './Button.css'

const Button = (props) => {
    return (
        <div className="Button">
         {props.buttonIs.map((button, idx) =>
            <button
                key={button}
                className={props.selectedButtonIdx === idx ? 'selected' : 'button'}
                onClick={() => props.handleButtonChange(idx)}
            >
                {props.selectedButtonIdx === idx ? `Button ${idx+1} is selected` : `Select Button ${idx + 1}`}
            </button>
         )}
        </div>
    )
}
 
export default Button;
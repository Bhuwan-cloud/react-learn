import React, {useState} from 'react'

export default function TextForm(props) {


    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter text Here new value ');
    return (
        <div>
            
            <h1>{props.heading} </h1>
            <form className="mb-3">
                <textarea ClassName="form-control my-4" value={text} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
            </form>
            <button className="btn btn-success" onClick={handleUpClick}>Convert to Upper Case  </button>
           
           
        </div>
    )
}

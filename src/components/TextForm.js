import React, {useState} from 'react'

export default function TextForm(props) {
      

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
        //  use state hook  
    const [text, setText] = useState('Enter text Here new value ');
    
    return (
        <>
        <div className="form-control">
            
            <h3>{props.heading} </h3>
            <form className="mb-3">
                <textarea ClassName="form-control my-4" value={text} onChange={handleOnChange} id="myBox" rows="10" ></textarea>
            </form>
            <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Upper Case  </button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case  </button>
           
           
        </div>

        <div className="container my-2">
            <h3> Your Text Summary</h3>
            <p>{text.split(" ").length-1} words  and  {text.length} chars </p>
            <pre>{0.008 *( text.split(" ").length-1)} Minutes Read</pre>
            <h4>Preview </h4>
            <p>{text}</p>
        </div>
        </>
    )
}

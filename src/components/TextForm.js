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

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    // const handleEmailExtract = () => {
    //     var regex = /<(.*)>/g;
    //     let  etext = regex.exec(text);
    //     console.log(etext);

    // }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }
        //  use state hook  
    const [text, setText] = useState(' ');
    
    return (
        <>
        <div className="form-control">
            
            <h3>{props.heading} </h3>
            <form>
                <div className="mb-3">
                    <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
            </form>
       
            <button className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case  </button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lower Case  </button>
            <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text  </button>
            {/* <button className="btn btn-warning mx-2 my-2" onClick={handleEmailExtract}> Extract Email  </button> */}
           
           
        </div>

        <div className="container my-2">
            <h3> Your Text Summary</h3>
            <p>{text.split(" ").length-1} words  and  {text.length} chars </p>
            <pre>{0.008 *( text.split(" ").length-1)} Minutes Read</pre>
            <h4>Preview </h4>
            <p className=" text-center">{text}</p>
        </div>
        </>
    )
}

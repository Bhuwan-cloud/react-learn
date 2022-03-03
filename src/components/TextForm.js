import React, { useState } from 'react'

export default function TextForm(props) {

     //  use state hook  
     const [text, setText] = useState(' ');

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Opps! text has been removed ", "warning")
    }

    const handleExtraSpaces = () => {
        let newstring = text.split(/[ ]+/);
        setText(newstring.join(" "))
        props.showAlert("Congratulations! now you have no more extra spaces ", "success")
    }

    // const handleEmailExtract = () => {
    //     var regex = /<(.*)>/g;
    //     let  etext = regex.exec(text);
    //     console.log(etext);

    // }

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard ", "success")
    }

    const handleFirstLetterCap = () => {

        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newStr = arr.join(" ");
        setText(newStr);

        props.showAlert("Now Your text has first letter capital for each words", "success")

    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }
   

    return (
        <>
            <div className="form-control" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >

                <h3 >{props.heading} </h3>
                <form>
                    <div className="mb-3">
                        <textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#003333' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                            value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                </form>

                <button className="btn btn-success mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case  </button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lower Case  </button>
                <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text  </button>
                {/* <button className="btn btn-warning mx-2 my-2" onClick={handleEmailExtract}> Extract Email  </button> */}
                <button className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy Text  </button>
                <button className="btn btn-success mx-2 my-2" onClick={handleExtraSpaces}> Remove Extra Spaces  </button>
                <button className="btn btn-success mx-2 my-2" onClick={handleFirstLetterCap}> First Letter Cap  </button>


            </div>

            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h3> Your Text Summary</h3>
                <p>{text.split(" ").length -1} words  and  {(text.length)} chars </p>
                <pre>{0.008 * (text.split(" ").length - 1)} Minutes Read</pre>
                <h4>Preview </h4>
                <p className=" text-center">{text.length>1?text: "Enter Your Text in Above Box To Preview"}</p>
            </div>
        </>
    )
}

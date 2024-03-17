import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  const [freqWord, setWord] = useState('');
  const [word1, word1Set] = useState('');
  const [word2, word2Set] = useState('');
  const primaryWordSet = (event) => {
    word1Set(event.target.value);
  }
  const secondaryWordSet = (event) => {
    word2Set(event.target.value);
  }
  const freqWordSet = (event) => {
    setWord(event.target.value);
  } 
  const handleOnChange = (event) => {
    setText(event.target.value);
  } 
  const handelUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handelLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const wordCount = (text)=>{
    if(text === ""){
      return 0;
    }
    else{
      var length = text.split(/\s+/);
      return length.length;
    }
  } 
  const readTime = (text)=>{
    if(text === ""){
      return 0;
    }
    else{
      var length = text.split("");
      return (length.length);
    }
  } 
  const clearAll = ()=>{
    setText("");
    props.showalert("Text area has bee cleared", "success");
  }
  const highlightWord = (paragraph, wordToHighlight) => {
        var words = paragraph.split(" ");
          var highlightedContent = words.map(function(word) {
            if (word.toLowerCase() === wordToHighlight.toLowerCase()) {
              return '<' + word + '>';
            }
            else {
              return word;
            }
          }).join(' ');
      setText(highlightedContent);
    }
  const findEmailAddress = () => {
    var emails = [];
    var j = 0, i = 0, z = 0;
    if(text === ""){
      props.showalert("no text was found", "danger");
    }
    else{
      var slices = text.split(" ");
      for(i = 0; i < slices.length; i++){
        for(z = 0; z < slices[i].length; z++){
          if(slices[i][z] === "@"){
            emails[j] = slices[i];
            j++;
          }
        }
      }
      for(i = 0; i < emails.length; i++){
        highlightWord(text, emails[i]);
      }
      props.showalert("Emails Highlighted Successfuly", "success");
    }
  }
  const wordFreq = () => {
    var words = text.split(" "); 
    var count = 0;
    var i = 0;
    for(i = 0; i < words.length; i++){
      if(words[i].toLowerCase() === freqWord.toLowerCase()){
        count++;
      }
    }
    // return count;
    const ansArea = document.getElementById("displayFreqBox");
    ansArea.innerText = count;
    props.showalert("Frequency Found", "success")
  }
  const replaceWord = () => {
    var words = text.split(" ");
    var replacedContent = words.map(function(word) {
      if (word.toLowerCase() === word1.toLowerCase()) {
        return word2;
      }
      else {
        return word;
      }
    }).join(' ');
    setText(replacedContent);
    console.log(text);
  }
  const copyText = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
    props.showalert("Text has been copied", "success")
  }
  const removeSpace = () => {
      setText(text.replace(/\s+/g, ' ').trim());
      props.showalert("All extra spaces have been removed", "success")
  }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          {/* <h3>{props.heading} - {text}</h3> */}
          <h3 className={`text-${props.mode === 'dark'?'light':'dark'}`}>{props.heading}</h3>
          <textarea
            value={text}
            className={`mainText form-control my-3 text-${props.mode === 'light'?'dark':'light'}`}
            style={{
              backgroundColor: props.mode === 'light'?'white':'grey'
            }}
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder={props.innerTxt}
            onChange={handleOnChange}
          ></textarea>
          <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-2  my-2`} onClick={handelUpClick}>Convert to uppercase</button>
          <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-2  my-2`} onClick={handelLoClick}>Convert to lowercase</button>
          <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-2  my-2`} onClick={clearAll}>Clear All</button>
          <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-2  my-2`} onClick={findEmailAddress}>Find Email Address</button>
          <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-2  my-2`} onClick={copyText}>Copy</button>
          <button className={`btn btn-${props.mode === 'light'?'primary':'dark'} mx-2  my-2`} onClick={removeSpace}>Remove Extra Space</button>
          <div className={`row2 text-${props.mode === 'light'?'dark':'light'}`} style={{backgroundColor: props.mode === 'light'?'white':'grey', padding: '10px'}}>
            <div className="frequencyBox">
              <textarea className="freqTxt" placeholder="Enter a word" onChange={freqWordSet}></textarea>
              <span className="dispfreq" id="displayFreqBox">Frequency</span>
              <button  className={`btn btn-${props.mode === 'light'?'primary':'dark'} my-2`} onClick={wordFreq}>Find Frequency</button>
            </div>
            <div className="replaceBox">
              <textarea placeholder="replace word" className="word1Box repBox" onChange={primaryWordSet}></textarea>
              <textarea placeholder="new word" className="word2Box repBox" onChange={secondaryWordSet}></textarea>
              <button  className={`btn btn-${props.mode === 'light'?'primary':'dark'} my-2`} onClick={replaceWord}>replace the word</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className={`text-${props.mode === 'dark'?'light':'dark'}`}>Your text summary</h2>
        <p className={`text-${props.mode === 'dark'?'light':'dark'}`}>{wordCount(text)} words and {text.length} characters are in ur text</p>
        <p className={`text-${props.mode === 'dark'?'light':'dark'}`}>TIme to read above text: {readTime(text)*0.08} seconds</p>
        <h2 className={`text-${props.mode === 'dark'?'light':'dark'}`}>Perview</h2>
        <p className={`text-${props.mode === 'dark'?'light':'dark'}`}>{text.length > 0?text:"Enter Some Text"}</p>
      </div>
    </>
  );
}

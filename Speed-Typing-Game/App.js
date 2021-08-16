import React,{useEffect, useState,useRef} from "react"
function App(){

    const [count,wordCount]=useState('')
    const [time,changeTime]=useState(60)
    const [changeState,changing]=useState(false)
    const [text,setText]=useState("")

    const textBoxRef = useRef(null)

    function handleChange(e){
        const val=e.target.value
        setText(val)
       const change= val.trim().split(" ")
      var Count= change.filter(m=>m!='').length
      wordCount(Count)
    }
    function StateChanging(){
        changing(true)
        setText("")
        wordCount('')
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    
    useEffect(() => {
        if(time>0&&changeState){
        setTimeout(()=>{changeTime(t=>t-1)},1000)
    }
    else if(time===0){
        changing(false)
        changeTime(5)
    }
    },[time,changeState])

    //use Effect 
    
    return(
        <div>
        <h1>see how fast u can type</h1>
        <textarea onChange={handleChange}
           ref={textBoxRef}
           disabled={!changeState}
           value={text}
        />
         <button onClick={StateChanging}
         disabled={changeState}
         >start!</button>
         <h3>wordCount:{count}</h3>
         <h3>time Remaining:{time}</h3>
        </div>
    )
}
export default App



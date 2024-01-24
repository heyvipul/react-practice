import { useEffect, useRef, useState } from "react"

const OtpInput = ({length = 4 ,onOtpSubmit=()=>{}}) => {

    const[otp,setOtp] = useState(new Array(length).fill(""));

    const inputRefs = useRef([])
    // console.log(inputRefs);

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus()
        }
    },[])


    function handleChange(index,e){
        const value = e.target.value;
        if(isNaN(value)) return;
        
        //allow only one input
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp)

        //submit trigger
        const combineOtp = newOtp.join("")
        if(combineOtp.length==length){
            onOtpSubmit(combineOtp);
        }

        //move to next input if current field is filled
        if(value && index < length-1 && inputRefs.current[index+1]){
            inputRefs.current[index+1].focus();
        }

    }
    //function for start and end postition of a text field
    function handleClick (index){
        inputRefs.current[index].setSelectionRange(1,1)

        //optional check if box/text field is empty 
        if(index>0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus();
        }
    }

    function handleKeyDown (index,e){
        if(e.key==="Backspace" && !otp[index] && 
        inputRefs.current[index-1]){
            inputRefs.current[index-1].focus();
        }
    }

  return (
    <div>
    {
        otp.map(function(ele,index){
            return <input key={index} type="text" value={ele}
                ref={(input)=>(inputRefs.current[index]=input)} 
                onChange={(e)=>handleChange(index,e)}
                onClick={()=> handleClick(index)}
                onKeyDown={(e)=>handleKeyDown(index,e)}
                className="otpInput"
            />
        })
    }
    </div>
  )
}

export default OtpInput
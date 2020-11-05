   
   
const setData=(data)=>{
        return(dispatch)=>{
            console.log(data);
            dispatch(
                {
                    type : "SETDATA",
                    data : data
                }

            )
        }
    }

const loadAPI=(data)=>{
    return(dispatch)=>{
        console.log("load api data :",data);
        dispatch(
            {
                type : "LOADAPI",
                data : data
            }

        )
    }
}


export { setData, loadAPI }
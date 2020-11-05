

const INITIAL_STATE = {

    users : [
        // {
        //     fName : "Shayan",
        //     lName : "Ali",
        //     email :"shayan@gmail.com"
        // },
        // {
        //     fName : "Ahmed",
        //     lName : "Ali",
        //     email :"ahmed@gmail.com"
        // }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "LOADAPI":
            console.log("action data",action.data)
            return ({
                ...state,
                users : [...state.users,action.data]            })
        case "SETDATA":
            console.log("action data",action.data)

            return ({
                ...state,
                users : [...state.users,action.data]
            })
        default:
            return state;    
    }    
}
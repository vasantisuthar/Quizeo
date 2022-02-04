const INITIAL_STATE = {
    sections: [
        {
            id:1,
            title:"avengers",
            imageUrl: "https://ibb.co/FwkNDg2",
            linkUrl:'movie/avengers'
        },
        {
            id:2,
            title:"moneyheist",
            imageUrl: "https://ibb.co/wgFMFTf",
            linkUrl:'movie/moneyheist'
        },
        {
            id:3,
            title:"friends",
            imageUrl: "https://ibb.co/1G4Mm26",
            linkUrl:'movie/friends'
        },
        {
            id:4,
            title:"squidgame",
            imageUrl: "https://ibb.co/FwkNDg2",
            linkUrl:'movie/squidgame'
        }
    ]
}


const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;
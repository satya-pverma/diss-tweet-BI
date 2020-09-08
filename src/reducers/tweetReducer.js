import { CREATE_TWEET, GET_TWEET, UPDATE_TWEET, DELETE_TWEET, DELETE_SELECTED_TWEET, SELECT_TWEET, CLEAR_TWEET } from "../constant/types";

const initialState = {
  tweets: [
    {
      "id": 1,
      "name": "Satya Prakash Verma",
      "tweet": "hello buddy, This is a tweet from the developer. I am satya prakash verma, A full stack developer and a enthusiastic coder.My this tweet will automatically gets disappeared at 4:25 PM Sept 2021.This tweet is live for whole 1 year.You can also create your own dissapearing tweet by clickingon create tweet button.There you can mention the date and time at which your tweet will be dissapeared",
      "date": "2021-09-08",
      "time": "16:25"
    }
  ]

}

export const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TWEET:
      return {
        ...state,
        tweets: [action.payload, ...state.tweets]
      };
    case GET_TWEET:
      let arr = state.tweets.filter(
        (tweet) => tweet.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        tweet: arr,
      };
    case UPDATE_TWEET:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet.id == action.payload.id ? action.payload : tweet
        ),
      };
    case DELETE_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter(
          (tweet) => tweet.id != action.payload
        ),
      };
    case DELETE_SELECTED_TWEET:
      return {
        ...state,
        tweets: [],
      };
    case SELECT_TWEET:
      return {
        ...state,
        selectedtweets: action.payload,
      };
    case CLEAR_TWEET:
      return {
        ...state,
        selectedtweets: [],
      };
    default:
      return state;
  }
}
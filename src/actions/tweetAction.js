import { CREATE_TWEET, DELETE_SELECTED_TWEET, CLEAR_TWEET, SELECT_TWEET, DELETE_TWEET, UPDATE_TWEET, GET_TWEET } from "../constant/types";

export const addTweet = (tweet) => {
  return {
    type: CREATE_TWEET,
    payload: tweet,
  };
};

// get a contact
export const getTweet = (id) => ({
  type: GET_TWEET,
  payload: id,
});

// update a contact
export const updateTweet = (tweet) => ({
  type: UPDATE_TWEET,
  payload: tweet,
});

// delete a contact
export const deleteTweet = (id) => ({
  type: DELETE_TWEET,
  payload: id,
});

// select all contact
export const selectAllTweet = (id) => ({
  type: SELECT_TWEET,
  payload: id,
});

// clear selected contacts
export const clearAllTweet = () => ({
  type: CLEAR_TWEET,
});

// delete selected contacts
export const deleteAllTweet = () => ({
  type: DELETE_SELECTED_TWEET,
});

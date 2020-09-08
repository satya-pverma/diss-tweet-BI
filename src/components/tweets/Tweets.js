import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tweet from "./Tweet";
import {
  selectAllTweet,
  clearAllTweet,

} from "../../actions/tweetAction";

const Tweets = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const tweets = useSelector((state) => state.tweet.tweets);
  const selectedTweets = useSelector(
    (state) => state.tweet.selectedTweets
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllTweet(tweets.map((tweet) => tweet.id)));
    } else {
      dispatch(clearAllTweet());
    }
  }, [selectAll]);

  return (
    <div>



      <table className="table ">
        <div class="row">
          <div class="col s12 m6">
            {tweets.map((tweet) => (
              <Tweet style={{ marginTop: "25px" }} tweet={tweet} key={tweet.id} selectAll={selectAll} />
            ))}


          </div>
        </div>
        <tbody>

        </tbody>
      </table>
    </div>

  );
};

export default Tweets;
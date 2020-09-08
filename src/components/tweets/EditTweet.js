import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTweet, updateTweet } from "../../actions/tweetAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditTweet = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const tweet = useSelector((state) => state.tweet.tweet);
  const [name, setName] = useState("");
  const [tweets, setTweet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (tweet != null) {
      setName(tweet.name);
      setTweet(tweet.tweets);
      setDate(tweet.date);
      setTime(tweet.time);
    }
    dispatch(getTweet(id));
  }, [tweet]);

  const onUpdateTweet = (e) => {
    e.preventDefault();

    const update_tweet = Object.assign(tweet, {
      name: name,
      tweets: tweets,
      date: date,
      time: time
    });

    dispatch(updateTweet(update_tweet));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Tweet</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateTweet(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tweet text"
              value={tweets}
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              placeholder=""
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control"
              placeholder=""
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update Tweet
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTweet;
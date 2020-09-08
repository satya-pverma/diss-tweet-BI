import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "../../actions/tweetAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import M from 'materialize-css'
const AddTweet = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [tweet, setTweet] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState('')

  const datepick = () => {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  }

  const createTweet = (e) => {
    e.preventDefault();
    const new_tweet = {
      id: shortid.generate(),
      name: name,
      tweet: tweet,
      date: date,
      time: time
    };


    // console.log(typeof (new_tweet))
    dispatch(addTweet(new_tweet));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Tweet</div>
      <div className="card-body">
        <form onSubmit={(e) => createTweet(e)}>
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
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="datepicker form-control"
              placeholder="date at tweet will dissapear"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              className="form-control"
              placeholder="Time at tweet will dissapear"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Tweet
          </button>
        </form>
      </div>
    </div>
  )
}
export default AddTweet;

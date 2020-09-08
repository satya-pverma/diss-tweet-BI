import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteTweet } from "../../actions/tweetAction";
import { useDispatch } from "react-redux";

const Tweet = ({ tweet: { name, tweet, date, time, id } }) => {

  const dispatch = useDispatch();

  //console.log(dates)
  const matchtime = () => {
    {

      var today = new Date();
      var hour = today.getHours();
      var min = today.getMinutes();
      //var s = today.getSeconds();
      if (today.getMonth() < 10) {
        var ms = today.getMonth() + 1
        var m = "0" + ms;
      }
      if (today.getDate() < 10) {
        var d = "0" + today.getDate()
      }
      var dates = today.getFullYear() + '-' + m + '-' + d;
      //console.log(dates)
      min = checkTime(min);

      // s = checkTime(s);
      var stime = hour + ":" + min;

      // console.log(stime)


      var t = setTimeout(matchtime, 500);
      if (time == stime && date == dates || date < dates) {
        dispatch(deleteTweet(id))
      }
      else if (dates >= date && time < stime) {
        dispatch(deleteTweet(id))
      }

    }
    function checkTime(i) {
      if (i < 10) { i = "0" + i };
      return i;
    }

  }



  return (

    <div className="row">

      {matchtime()}

      <div className="col s12 m6">
        <div className="card blue-grey darken-0">
          <Avatar className="mr-2 " name={name} size="45" round={true} /> {name}
          <div className="card-content white-text">
            <span className="card-title text-white">{name}</span>
            <p>{tweet}</p><br /><br />
            <div>expires at:<br /><p>{time}
            </p>{date}</div>
            <div className="actions float-right" >
              <Link to={`/tweets/edit/${id}`}>
                <span className="material-icons text-primary mr-2">edit</span>
              </Link>
              <span
                className="material-icons  text-danger " style={{ cursor: "pointer" }}
                onClick={() => dispatch(deleteTweet(id))}
              >
                remove_circle
        </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Tweet;
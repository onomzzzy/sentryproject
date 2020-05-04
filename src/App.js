import React, { useEffect, useReducer, useState } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from "./utility_components/error";
// import entire SDK
import * as S3 from "aws-sdk/clients/s3";
import Home from "./functional_componet/home";
import Footer from "./functional_componet/footer";

export const BlogContext = React.createContext();
const uri = "https://onome.s3.us-east-2.amazonaws.com/Nzegbuna";

function App() {
  //initial State
  const initialState = {
    focus: 0,
    search: false,
    searchWord: "Search Blog ...",
    blogPost: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "GET_BLOGPOSTs":
        state = {
          ...state,
          blogPost: action.posts,
        };
        console.log(`called get blog ${state.blogPost}`);
        return state;
      case "CHANGE_FOCUS":
        state = {
          ...state,
          focus: action.focus,
        };
        return state;

      case "CANCEL_SEARCH":
        state = {
          ...state,
          focus: 0,
          search: false,
          searchWord: "",
        };
        return state;

      case "SET_SEARCH":
        state = {
          ...state,
          focus: 1,
          search: true,
          searchWord: action.searchword,
        };
        console.log(
          `set serch called ${action.searchword} search ${state.search}`
        );
        return state;
      default:
        return initialState;
    }
  };

  const [bb, setBb] = useState("");

  useEffect(() => {
    document.getElementById("loader").style.display = "none";
    setBb("Live Home");
    console.log(`first BB ${bb}`);
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  /* useEffect(() => {
    //Get BlogPosts
    //getBlogfromServer();
    let result = getBlogPost("Nzegbuna");
    result.then((data) => {
      console.log(` data collection ${data}`);
    });
  }, []);*/

  //Get Post From Server
  /******* */
  async function getBlogPost(owner) {
    //Check if file exist
    //let blogs = [];
    //getBlogfromServer();
    //Key
    const bucket = new S3({
      accessKeyId: "AKIA3UZA6DLJHL3ABW6C",
      secretAccessKey: "A8isoIAep0K1qW+lChHwPNVeoymgq/+xygJNwknY",
      //region: 'YOUR-REGION'
    });
    //Key

    const params = {
      Bucket: "onome",
      Key: "" + owner,
    };

    try {
      const data = await bucket.getObject(params).promise();
      return JSON.parse(data.Body.toString());
    } catch (err) {
      if (err.code === "NoSuchKey") {
        console.log(`NoSuchKey`);
      } else if (err.code === "NetworkingError") {
        console.log(`NetworkingError`);
      } else {
        console.log(`Something went wrong.....`);
      }
    }
  }

  function getBlogfromServer() {
    axios
      .get(uri)
      .then((res) => {
        let blogPosts = res.data;
        dispatch({ type: "GET_BLOGPOSTS", posts: blogPosts });
        console.log(`posts ${state.blogPost}`);
      })
      .catch((err) => {
        console.log(`error ocurr ${err}`);
      });
  }

  //GetPost from Server Ends...

  return (
    <Router>
      <div>
        <BlogContext.Provider
          value={{ blogState: state, blogDispatch: dispatch }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="**" component={ErrorPage} />
          </Switch>
        </BlogContext.Provider>
      </div>

      <div className="footer">
        <div className="footer_margin">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;

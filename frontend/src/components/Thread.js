import React, { Component } from 'react';

// hard coded an array to create basic logic for thread component, this array would be replaced with array from database
const data = [
  {
    id: 1,
    title: "Regular Expressions for Regular Folk",
    author: "John Smith",
    contentURL: "https://refrf.shreyasminocha.me/",
    comments: ""
  },
  {
    id: 2,
    title: "NVIDIA Chief Scientist Releases Low-Cost, Open-Source Ventilator Design",
    author: "Brian Caulfield",
    contentURL: "https://blogs.nvidia.com/blog/2020/05/01/low-cost-open-source-ventilator-nvidia-chief-scientist/",
    comments: {
      userName: "Amanda",
      date: "May 2020",
      comment: "Hi I am Amanada and I am testing the comments"
    }
  },
  {
    id: 3,
    title: "Save Your Linux Machine From Certain Death",
    author: "Martin Heinz",
    contentURL: "https://medium.com/better-programming/save-your-linux-machine-from-certain-death-24ced335d969",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 4,
    title: "State Machine In Real Life",
    author: "Colin",
    contentURL: "https://www.solipsys.co.uk/new/StateMachineInRealLife.html",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 5,
    title: "Regular Expressions for Regular Folk",
    author: "John Smith",
    contentURL: "https://refrf.shreyasminocha.me/",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 6,
    title: "The Best Medium-Hard Data Analyst SQL Interview Questions",
    author: "Zachary Thomas",
    contentURL: "https://quip.com/2gwZArKuWk7W",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 7,
    title: "So I reverse engineered two dating apps...",
    author: " ",
    contentURL: "https://push32.com/post/dating-app-fail/",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 8,
    title: "Streams - a real-life approach ",
    author: "Isank",
    contentURL: "https://isank.dev/posts/java-streams-real-life-approach/",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 9,
    title: "Speculating on Animal Crossing Turnip Market",
    author: " ",
    contentURL: "https://insignificantbits.com/2020/05/02/turnips/",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  },
  {
    id: 10,
    title: "‘Breathable’ Electronics Pave the Way for More Functional Wearable Tech",
    author: "Yong Zhu (yzhu7@ncsu.edu) & Matt Shipman (matt_shipman@ncsu.edu)",
    contentURL: "https://news.ncsu.edu/2020/04/breathable-electronics/",
    comments: {
      userName: "",
      date: "",
      comment: ""
    }
  }
];

class Thread extends Component {
  render() {
    return (
      <div className="thread">
        <h3>Thread Component</h3>
        <ol>
          {data.map(article => {
            return (
              <li key={article.id}>
                <a href={article.contentURL}>{article.title}</a>
                <div className="comment-block">
                  <h6>{`${article.comments.userName} ${article.comments.date}`}</h6>
                  <p>{article.comments.comment}</p>
                </div>
                {/* <ul>
                  {article.comments.map(comment => {
                    return (
                      <li>
                        <h6>{article.comments.userName} - {article.comments.date}</h6>
                        <p>{article.comments.comment}</p>
                      </li>
                    )
                  })}
                </ul> */}
              </li>
            )
          })}
        </ol>
      </div>
    );
  }
}

export default Thread;



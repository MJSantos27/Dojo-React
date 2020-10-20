import React from "react";

function Article(props) {
  return (
    <section className="post d-flex my-5">
            <img
              src={props.imgArticle}
              alt={props.altArticle}
            />
            <div className="post-inner flex-grow-1">
              <div className="post-header d-flex">
                <div className="post-meta flex-grow-1">
                  <h2>{props.title}</h2>
                  <p>
                    By {props.author} under { }
                    <span className="badge badge-warning">JavaScript</span>
                    <span className="badge badge-info">React</span>
                  </p>
                </div>
                <img
                  className="post-avatar"
                  src={props.avatar}
                />
              </div>

              <p>
                {props.resumeArticle}
              </p>
            </div>
          </section>
  )
}

export default Article;
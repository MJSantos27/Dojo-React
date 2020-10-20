import React from "react";
import Article from "./Article";

const articles = [
  {
    imgArticle: "https://picsum.photos/id/1/240/180",
    altArticle: "Man pretending to work on a computer",
    title: "Lorem Ipsum",
    author: "Denise Lane",
    resumeArticle: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book.`,
    avatar: "https://randomuser.me/api/portraits/women/24.jpg"
  },

  {
    imgArticle: "https://picsum.photos/id/2/240/180",
    altArticle: "Man pretending to work on a computer",
    title: "Lorem Ipsum",
    author: "Rhonda Hicks",
    resumeArticle: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book.`,
    avatar: "https://randomuser.me/api/portraits/women/2.jpg"
  },

  {
    imgArticle: "https://picsum.photos/id/3/240/180",
    altArticle: "Man pretending to work on a computer",
    title: "Lorem Ipsum",
    author: "Clifton Foster",
    resumeArticle: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book.`,
    avatar: "https://randomuser.me/api/portraits/men/25.jpg"
  },

  {
    imgArticle: "https://picsum.photos/id/4/240/180",
    altArticle: "Man pretending to work on a computer",
    title: "Lorem Ipsum",
    author: "Stacy Soto",
    resumeArticle: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it to make a type specimen book.`,
    avatar: "https://randomuser.me/api/portraits/women/94.jpg"
  }

];

// function ArticleList(props)  -> props contient { articles: [{}, {}, {}] }
function ArticleList() {
  return (
    <div>
      {articles.map(article => (
        <Article {...article} />
        // <Article
        //   avatar={article.avatar}
        // />
      ))}
    </div>

  );

}

export default ArticleList;
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Article from './components/Article';
import ArticleList from './components/ArticleList';
import './custom.css';
import './bootstrap.min.css';

function App() {
  return (
    <div className="App">
      
      <Header />
      <Navbar />
      {/* <Article 
        imgArticle="https://picsum.photos/id/1/240/180"
        altArticle="Man pretending to work on a computer"
        title="Lorem Ipsum"
        author="Denise Lane"
        avatar="https://randomuser.me/api/portraits/women/24.jpg"
        resumeArticle="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book."/>
       */}
       <ArticleList />
    </div>
  );
}

export default App;
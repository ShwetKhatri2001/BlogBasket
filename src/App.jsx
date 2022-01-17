import React,{ useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Blog from './pages/Blog';
import Home from './pages/Home';
import './App.css';
import { BlogContext } from "./components/Home/BlogList/BlogItem"

const App = () => {

  const [detailedBlog, setDetailedBlog] = useState({});

  return (
    <div className='container'>
      <BlogContext.Provider value={{detailedBlog, setDetailedBlog}}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
      </BlogContext.Provider>
    </div>
  );
};

export default App;

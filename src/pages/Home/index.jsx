import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';

const Home = () => {

  const [allBlogs, setAllBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  useEffect( () => {

    const getBlogs = async () => {

      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setAllBlogs(res.data);
        setFilteredBlogs(res.data);
      }
      catch(err) {
        alert(err);
      }

    }
    getBlogs();

  },[])

  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {

    const filteredResults = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()) ||
      blog.body.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    console.log(filteredResults);
    setFilteredBlogs(filteredResults);
  };

  const handleClearSearch = () => {
    setFilteredBlogs(allBlogs);
    setSearchKey('');
  };

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />
      {!filteredBlogs.length ? <EmptyList /> : <BlogList blogs={filteredBlogs} />}
    </div>
  );
};

export default Home;

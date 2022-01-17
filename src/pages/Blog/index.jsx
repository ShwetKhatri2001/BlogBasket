import React, { useContext } from 'react';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { BlogContext } from "../../components/Home/BlogList/BlogItem"
import { Link } from 'react-router-dom';
import './styles.css';

const Blog = () => {
  
  const { detailedBlog , setDetailedBlog } = useContext(BlogContext);

  const {  title, body, subCategory,authorAvatar, authorName, createdAt, cover} = detailedBlog;

  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {detailedBlog ? (
        <div className='blog-wrap'>
          <header data-aos="fade-up" data-aos-offset="0">
            <p className='blog-date'>Published on {createdAt}</p>
            <h1>{title}</h1>
            <div className="blog-catauthor">
              <div className='blog-subCategory'>
                {subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
              <div className='blogitem-author'>
                <img src={authorAvatar} alt='avatar' />
                <div>
                  <h4>{authorName}</h4>
                </div>
              </div>
            </div>
          </header>
          <img src={cover} alt='cover' data-aos="fade-up" data-aos-offset="0"/>
          <p className='blog-desc'  data-aos="fade-up" data-aos-offset="0">{body}</p>
        </div>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

export default Blog;

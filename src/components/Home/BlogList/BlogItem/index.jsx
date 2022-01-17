import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Chip from '../../../common/Chip';
import { blogList } from '../../../../config/data';
import './styles.css';

const BlogContext = createContext();

const BlogItem = ({ blog }) => {

  const [ blogData, setBlogData ] = useState({});
  const { detailedBlog , setDetailedBlog } = useContext(BlogContext);

  useEffect(() => {

    const num = Math.floor( (blog.userId - 1) / 2);
    const moreData = blogList[num];

    setBlogData({ ...blog,...moreData})

  },[])

  const { id, userId, title, body, category, authorName, authorAvatar, createdAt, cover} = blogData;

  return (
    <div className='blogitem-wrap' data-aos="fade-up">
      <img className='blogitem-cover' src={cover} alt='cover' />
      <Chip label={category} />
      <h3>{title}</h3>
      <p className='blogitem-desc'>{body}</p>
      <footer>
        <div className='blogitem-author'>
          <img src={authorAvatar} alt='avatar' />
          <div>
            <h5>{authorName}</h5>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogitem-link' to={`/blog/${id}`} onClick={() => setDetailedBlog(blogData)}> 
          <h5>Read More ➝ </h5>
        </Link>
      </footer>
    </div>
  );
};

export default BlogItem;
export { BlogContext };

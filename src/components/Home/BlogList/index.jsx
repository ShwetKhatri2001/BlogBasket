import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import BlogItem from './BlogItem';
import { useMediaQuery } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import './styles.css';

const BlogList = ({ blogs }) => {

  const muitheme = useTheme();
  const isMobile = useMediaQuery(muitheme.breakpoints.down("sm"));
  const itemsPerPage = isMobile ? 6 : 12;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handlePageChange = (event, value) =>
  {
    setPage(value);
    window.scroll(0,0);
  };

  useEffect(() => {

    setTotalPages(Math.ceil(blogs.length / itemsPerPage));

  }, [blogs])

  const useStyles = makeStyles((theme) => ({
    paginator: {
      justifyContent: "center",
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
    },
  }));

  
  const classes = useStyles();

  return (
    <div>
      <div className='bloglist-wrap'>
        {blogs
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
      <div data-aos="fade-up" data-aos-offset="0">
        {blogs && blogs.length > 0 && (
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            defaultPage={1}
            color="primary"
            size={isMobile ? "small" : "large"}
            showFirstButton={!isMobile}
            showLastButton={!isMobile}
            classes={{ ul: classes.paginator }}
          />
        )}
      </div>
    </div>
  );
};

export default BlogList;

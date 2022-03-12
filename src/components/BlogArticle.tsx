import * as React from 'react';
import { useParams } from 'react-router-dom';
import BlogHeader from './BlogHeader';
import A1 from '../pages/blogs/blog-a1';
import A2 from '../pages/blogs/blog-a2';
import A3 from '../pages/blogs/blog-a3';
import A4 from '../pages/blogs/blog-a4';
import A5 from '../pages/blogs/blog-a5';
import A6 from '../pages/blogs/blog-a6';
import A7 from '../pages/blogs/blog-a7';

const getArticle = (
  articleId: string,
  component: JSX.Element,
  title: string,
  date: string,
) => (
  <>
    <BlogHeader title={title} date={date} articleId={articleId} />
    {component}
  </>
);

function BlogArticle() {
  const { articleId } = useParams();
  return (
    <div className="blog-entry">
      {articleId === 'a1' &&
        getArticle(
          articleId,
          <A1 key={articleId} />,
          'Creating This Website',
          'Sept 13, 2017',
        )}
      {articleId === 'a2' &&
        getArticle(
          articleId,
          <A2 key={articleId} />,
          'Creating This Website - More Technical',
          'Sept 14, 2017',
        )}
      {articleId === 'a3' &&
        getArticle(
          articleId,
          <A3 key={articleId} />,
          'Creating This Website - Finishing Phase 1',
          'Sept 17, 2017',
        )}
      {articleId === 'a4' &&
        getArticle(
          articleId,
          <A4 key={articleId} />,
          'What Does It Mean To Choose React?',
          'Sept 20, 2017',
        )}
      {articleId === 'a5' &&
        getArticle(
          articleId,
          <A5 key={articleId} />,
          'Setting Up Our Development Environment - Babel & Webpack',
          'Sept 20, 2017',
        )}
      {articleId === 'a6' &&
        getArticle(
          articleId,
          <A6 key={articleId} />,
          'Setting Up Our Development Environment - Enhanced',
          'Sept 30, 2017',
        )}
      {articleId === 'a7' &&
        getArticle(
          articleId,
          <A7 key={articleId} />,
          'Starting the Conversion to React',
          'Oct 06, 2017',
        )}
    </div>
  );
}

export default BlogArticle;

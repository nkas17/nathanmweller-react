import * as React from 'react';
import PropTypes from 'prop-types';
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

function BlogArticle({ match }: any) {
  return (
    <div className="blog-entry">
      {match.params.articleId === 'a1' &&
        getArticle(
          match.params.articleId,
          <A1 key={match.params.articleId} />,
          'Creating This Website',
          'Sept 13, 2017',
        )}
      {match.params.articleId === 'a2' &&
        getArticle(
          match.params.articleId,
          <A2 key={match.params.articleId} />,
          'Creating This Website - More Technical',
          'Sept 14, 2017',
        )}
      {match.params.articleId === 'a3' &&
        getArticle(
          match.params.articleId,
          <A3 key={match.params.articleId} />,
          'Creating This Website - Finishing Phase 1',
          'Sept 17, 2017',
        )}
      {match.params.articleId === 'a4' &&
        getArticle(
          match.params.articleId,
          <A4 key={match.params.articleId} />,
          'What Does It Mean To Choose React?',
          'Sept 20, 2017',
        )}
      {match.params.articleId === 'a5' &&
        getArticle(
          match.params.articleId,
          <A5 key={match.params.articleId} />,
          'Setting Up Our Development Environment - Babel & Webpack',
          'Sept 20, 2017',
        )}
      {match.params.articleId === 'a6' &&
        getArticle(
          match.params.articleId,
          <A6 key={match.params.articleId} />,
          'Setting Up Our Development Environment - Enhanced',
          'Sept 30, 2017',
        )}
      {match.params.articleId === 'a7' &&
        getArticle(
          match.params.articleId,
          <A7 key={match.params.articleId} />,
          'Starting the Conversion to React',
          'Oct 06, 2017',
        )}
    </div>
  );
}

BlogArticle.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogArticle;

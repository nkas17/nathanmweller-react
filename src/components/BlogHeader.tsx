import React from 'react';

export interface BlogHeaderProps {
  title: string;
  date: string;
  articleId: string;
}

function BlogHeader({ title, date, articleId }: BlogHeaderProps) {
  return (
    <header
      id={articleId}
      className="main__header article__header flex-wrapper"
    >
      <h3 className="header header_size_medium flex-item">{title}</h3>
      <h6 className="header header_size_small flex-item">
        {`${date} ~ nathanmweller`}
      </h6>
    </header>
  );
}

export default BlogHeader;

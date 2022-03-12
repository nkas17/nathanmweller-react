import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

interface Article {
  id: string;
  title: string;
}

interface Category {
  id: string;
  title: string;
  articles: Article[];
}

interface TableOfContentsProps {
  contents: {
    categories: Category[];
  };
  title: string;
}

/**
 * Idea here is to map over the contents and produce a table of contents
 * map over categories then map over each article
 *
 */
function TableOfContents({ contents, title }: TableOfContentsProps) {
  return (
    <div className="table-of-contents">
      <header className="main__header article__header">
        <h3 className="header header_size_medium">{title}</h3>
      </header>
      {contents.categories.map((category) => (
        <details key={category.id} className="details">
          <summary className="summary">{category.title}</summary>
          {category.articles.map((article) => (
            <p key={article.id} className="details__paragraph text_size_small">
              <Link className="link" to={`/blog/${article.id}#${article.id}`}>
                {article.title}
              </Link>
            </p>
          ))}
        </details>
      ))}
    </div>
  );
}

export default TableOfContents;

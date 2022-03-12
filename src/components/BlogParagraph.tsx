import * as React from 'react';

export interface BlogParagraphProps {
  children: React.VFC | string | any;
}
function BlogParagraph({ children }: BlogParagraphProps) {
  return <p className="article__paragraph">{children}</p>;
}

export default BlogParagraph;

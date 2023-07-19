function ArticleList(props) {
    const articles = props.posts.map((post) => (
      <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
    ));
  
    return <main>{articles}</main>;
  }

  export default ArticleList;
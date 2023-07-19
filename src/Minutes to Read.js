function Article(props) {
    const dateStr = props.date || "January 1, 1970";
    const timeToRead = Math.ceil(props.preview.split(' ').length / 200); // assuming an average reading speed of 200 words per minute
  
    let timeToReadStr = "";
    if (timeToRead < 30) {
      const numCups = Math.ceil(timeToRead / 5);
      timeToReadStr = `☕️`.repeat(numCups) + ` ${timeToRead} min read`;
    } else {
      const numBoxes = Math.ceil(timeToRead / 10);
      timeToReadStr = `🍱`.repeat(numBoxes) + ` ${timeToRead} min read`;
    }
  
    return (
      <article>
        <h3>{props.title}</h3>
        <small>{dateStr}</small>
        <p>{props.preview}</p>
        <small>{timeToReadStr}</small>
      </article>
    );
  }

  export default Minutes;
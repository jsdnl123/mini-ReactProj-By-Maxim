import classes from "./Post.module.css";
function Post({ body, author }) {
  return (
    <li className={classes.post}>
      <p className={classes.author}>{body}</p>
      <p className={classes.body}>{author}</p>
    </li>
  );
}
export default Post;

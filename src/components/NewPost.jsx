import { useState } from "react";
import classes from "./NewPost.module.css";
function NewPost({ onCancel, onAddPost }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function onChangeBodyHandler(event) {
    setText(event.target.value);
  }
  function onChangeAuthorHandler(event) {
    setAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: text,
      author: author,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea onChange={onChangeBodyHandler} id="body" required rows={3} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          onChange={onChangeAuthorHandler}
          type="text"
          id="name"
          required
        />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;

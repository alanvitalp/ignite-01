import styles from './Comment.module.css';

import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar,';
import { useState } from 'react';

export function Comment ({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(prev => prev + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/alanvitalp.png" hasBorder={false}/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time title="11 de maio às 08:13:30" dateTime="2022-05-11 08:13:30">
                Publicado há 2h
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
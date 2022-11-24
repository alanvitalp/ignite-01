import { Avatar } from './Avatar,'
import { Comment } from './Comment'
import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react'

export function Post ({ author, content, publishedAt }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')
 

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativetoNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e) {
    e.preventDefault()

    setComments([...comments, newComment])
    setNewComment('')
  }

  function handleNewCommentInvalid () {
    event.target.setCustomValidity('O comentário não pode estar vazio')
  }

  function handleNewCommentChange () {
    event.target.setCustomValidity('');
    setNewComment(event.target.value)
  }

  function deleteComment (commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    )

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativetoNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <p key={index}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={index}><a href="#">_{item.content}</a></p>
            }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe seu comentário"
          name="comment"
          value={newComment}
          onChange={() => handleNewCommentChange()}
          required
          onInvalid={() => handleNewCommentInvalid()}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment 
              key={index} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}
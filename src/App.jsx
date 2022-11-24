import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import './styles/global.css'

import styles from './styles/App.module.css'

const posts = [
  {
    id: 1,
    author: {
      name: 'Alan Vital',
      avatarUrl: 'https://github.com/alanvitalp.png',
      role: 'Web Developer @ Instituto Atlântico'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet' },
      { type: 'link', content: 'Lorem ipsum dolor sit amet' },
    ],
    publishedAt: new Date('2022-05-03 10:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet' },
      { type: 'link', content: 'Lorem ipsum dolor sit amet' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt}/>
          ))}
        </main>
      </div>
    </div>
  );
}

export default App

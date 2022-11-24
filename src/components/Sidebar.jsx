import styles from './Sidebar.module.css'

import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar,'


export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="teclado e café" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/alanvitalp.png" alt="Alan Vital" />
        <strong>Alan Vital</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
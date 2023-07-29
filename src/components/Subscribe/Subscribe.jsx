import React from 'react'
import s from './Subscribe.module.css'
import Form from '../Form/Form'

function Subscribe() {
  return (
    <div className={s.subscribeContainer}>
      <div className={s.subscribe}>
        <div className={s.info}>
          <h2 className={s.newsletter}>NEWSLETTER</h2>
          <p>Dołącz do newslettera i bądź na bieżąco ze wszystkimi <span>PROMOCJAMI I NOWOŚCIAMI</span> </p>
        </div>
        <Form/>
      </div>
    </div>
  )
}

export default Subscribe
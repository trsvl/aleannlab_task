import React, { FC } from 'react'
import { IJobDetail } from '../../../types/types.js'
import general_styles from './../JobDetail.module.scss'
import styles from './style.module.css'

interface AttachedProps {
  pictures: IJobDetail['pictures'];
}

const AttachedImages: FC<AttachedProps> = ({ pictures }) => {
  return (
    <div className={general_styles.images_block}>
      <h1 className={styles.attached_text}>Attached images</h1>
      <div className={general_styles.separator} />
      <div className={styles.images}>
        {pictures.map((picture: string, i: number) => {
          return (
            <img className={styles.image} key={i} src={picture} alt={`img${i}`} />
          )
        })}
      </div>
    </div>
  )
}
export default AttachedImages;
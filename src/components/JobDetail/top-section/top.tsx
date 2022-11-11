import React, { FC } from 'react'
import { IJobDetail } from '../../../types/types'
import Bookmark from '../../../utilities/Bookmark'
import BookmarkStar from '../../../utilities/BookmarkStar'
import Share from '../../../utilities/Share'
import general_styles from './../JobDetail.module.css'
import styles from './style.module.css'

interface TopProps {
  id: IJobDetail['id'];
}

const Top: FC<TopProps> = (id) => {
  return (
    <>
      <div className={styles.job_details}>
        <h1>Job Details</h1>
        <div className={styles.svg_desktop}>
          <div className='flex'>
            <Bookmark
              id={id}
            />
            <h5 className={styles.save_text}>Save to my list</h5>
          </div>
          <div className={styles.share_block}>
            <Share />
            <h5 className={styles.share_text}>Share</h5>
          </div>
        </div>
      </div>
      <div className={general_styles.separator} />
      <div className={styles.svg_mobile}>
        <div className='flex'>
          <BookmarkStar
            id={id}
          />
          <h5 className={styles.save_text}>Save to my list</h5>
        </div>
        <div className={styles.share_block}>
          <Share />
          <h5 className={styles.share_text}>Share</h5>
        </div>
      </div>
    </>
  )
}
export default Top;
import React, { FC, useState, useEffect } from 'react'
import { IJobDetail } from '../../../types/types'
import { Link } from 'react-router-dom'
import Location from '../../../images/location.svg'
import styles from './style.module.css'
import Stars from '../../../utilities/Stars'
import Bookmark from '../../../utilities/Bookmark'
import CalculateDate from '../../../utilities/CalculateDate'

interface ListProps {
  id: IJobDetail['id'];
  pictures: IJobDetail['pictures'];
  title: IJobDetail['title'];
  name: IJobDetail['name'];
  address: IJobDetail['address'];
  updatedAt: IJobDetail['updatedAt'];
  windowWidth: number;
}

const List: FC<ListProps> = ({
  id,
  pictures,
  title,
  name,
  address,
  updatedAt,
  windowWidth }) => {
  return (
    <>
      {windowWidth >= 639 ? (
        <div className={styles.wrapper}>
          <Link className='cursor-pointer flex' to={process.env.PUBLIC_URL + `/job-${id}`}>
            <div className='flex'>
              <img src={pictures[0]} className={styles.logo} alt='logo'></img>
              <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.name}>Departament name • {name}</p>
                <div className='flex'>
                  <img className={styles.location_logo} src={Location} alt='location'></img>
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className={styles.right_side}>
            <Bookmark id={id} windowWidth={windowWidth} />
            <Stars id={id} />
            <h3 className={styles.post_date}>{CalculateDate(updatedAt)}</h3>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className='flex w-full'>
            <div className='w-full'>
              <div className={styles.mobile_top}>
                <Stars id={id} />
                <h3 className={styles.post_date}>
                  {CalculateDate(updatedAt)}
                </h3>
              </div>
              <Link className='cursor-pointer flex' to={process.env.PUBLIC_URL + `/job-${id}`}>
                <img src={pictures[0]} className={styles.logo} alt='logo' />
                <div>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.name}>Departament name • {name}</p>

                  <div className='flex'>
                    <img className={styles.location_logo} src={Location} alt='location'></img>
                    <p>{address}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default List;


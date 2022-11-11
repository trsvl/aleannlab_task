import React, { FC } from 'react'
import { IJobDetail } from '../../../types/types.js'
import styles from './style.module.css'
import { ConvertedSalary } from '../../../utilities/Salary'
import CalculateDate from '../../../utilities/CalculateDate'
import { Description } from '../../../utilities/Description'

interface GeneralProps {
  description: IJobDetail['description'];
  salary: IJobDetail['salary'];
  title: IJobDetail['title'];
  updatedAt: IJobDetail['updatedAt'];
  windowWidth: number;
}

const General: FC<GeneralProps> = ({
  title,
  salary,
  updatedAt,
  description,
  windowWidth
}) => {
  return (
    <>
      {windowWidth >= 639 ? (
        <>
          <div className='flex justify-between'>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.price_block}>
              <h3 className={styles.price}>
                € {ConvertedSalary(salary)}
              </h3>
              <h5>Brutto, per year</h5>
            </div>
          </div>
          <h5 className={styles.date}>{CalculateDate(updatedAt)}</h5>
          <h5 className={styles.description}>{Description(description)}</h5>
        </>
      ) : (
        <>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <div className='flex justify-between items-center mb-[14px]'>
              <h5 className={styles.date}>{CalculateDate(updatedAt)}</h5>
              <div className={styles.price_block}>
                <h5>Brutto, per year</h5>
                <h3 className={styles.price}>
                  € {ConvertedSalary(salary)}
                </h3>
              </div>
            </div>
          </div>
          <h5 className={styles.description}>{Description(description)}</h5>
        </>
      )}
    </>
  )
}
export default General;
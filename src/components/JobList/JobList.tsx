import React, { FC } from 'react'
import { IJobDetail } from '../../types/types'
import PagesNavigation from './PagesNavigation.js'
import general_styles from './JobList.module.scss'
import List from './list/list'

interface JobListProps {
  items: IJobDetail[];
  windowWidth: number;
}

const JobList: FC<JobListProps> = ({ items, windowWidth }) => {
  return (
    <>
      <div className={general_styles.container}>
        {items.map((item) => {
          return (
            <List
              key={item.id}
              id={item.id}
              pictures={item.pictures}
              title={item.title}
              name={item.name}
              address={item.address}
              updatedAt={item.updatedAt}
              windowWidth={windowWidth}/>
          )
        })
        }
        <PagesNavigation/>
      </div>
    </>
  )
}

export default JobList;

import React, { FC } from 'react'
import { IJobDetail } from '../../types/types'

import styles from './JobDetail.module.css'

import Top from './top-section/top';
import General from './general-section/general';
import AdditionalInfo from './additional-info/AdditionalInfo';
import AttachedImages from './attached-images/AttachedImages';
import Contacts from './contacts-info/contacts';
import { ReturnButton } from './ReturnButton';
import { ApplyButton } from './ApplyButton';
interface JobDetailProps {
  address: IJobDetail['address'];
  benefits: IJobDetail['benefits'];
  description: IJobDetail['description'];
  email: IJobDetail['email'];
  employment_type: IJobDetail['employment_type'];
  id: IJobDetail['id'];
  location: IJobDetail['location'];
  name: IJobDetail['name'];
  phone: IJobDetail['phone'];
  pictures: IJobDetail['pictures'];
  salary: IJobDetail['salary'];
  title: IJobDetail['title'];
  updatedAt: IJobDetail['updatedAt'];
  windowWidth: number;
}

const JobDetail: FC<JobDetailProps> = ({
  address,
  benefits,
  description,
  email,
  employment_type,
  id,
  location,
  name,
  phone,
  pictures,
  salary,
  title,
  updatedAt,
  windowWidth
}) => {
  return (

    <div className={styles.container}>
      <div className={styles.items_between}>
        <div className={styles.left_side}>
          <Top
            id={id}
          />
          <div className={styles.apply_button__hide}>
            {ApplyButton}
          </div>
          <General
            title={title}
            salary={salary}
            updatedAt={updatedAt}
            description={description}
            windowWidth={windowWidth}
          />
          {ApplyButton}
          <div className={styles.additional_attached__blocks}>
            <AdditionalInfo
              employment_type={employment_type}
              benefits={benefits} />

            <AttachedImages pictures={pictures} />
          </div>
          {ReturnButton}
        </div>
        <Contacts
          address={address}
          phone={phone}
          email={email}
          location={location}
          name={name}
        />
      </div>
    </div>
  )
}

export default JobDetail
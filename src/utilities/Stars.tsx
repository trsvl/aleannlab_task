import React, { FC, useState, useEffect } from 'react'
import { ReactComponent as Star } from '../images/star.svg'
import styles from '../components/JobList/list/style.module.css'
import { IJobDetail } from './../types/types'

interface StarskProps {
  id: IJobDetail['id'];
}

const Stars: FC<StarskProps> = (id) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  useEffect(() => {

    const data = localStorage.getItem('stars' + JSON.stringify(id));
    if (data) setCurrentValue(JSON.parse(data))
  }, [])
  useEffect(() => {
    localStorage.setItem(('stars' + JSON.stringify(id)), JSON.stringify(currentValue))
  }, [currentValue])



  const handleClick = (value: number) => {

    setCurrentValue(value)
    if (currentValue === value) {
      setCurrentValue(0)
    }
  }

  const handleMouseOver = (newHoverValue: any) => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div className={styles.stars_container}>
      <div className='flex'>
        {stars.map((_, index) => {
          return (
            <Star
              key={index}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              className={`${styles.star} ${(hoverValue || currentValue) > index ? 'fill-gray-700' : 'fill-gray-400'}`}
            />
          )
        })}
      </div>
    </div>
  );
};
export default Stars;
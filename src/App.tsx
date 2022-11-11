import React, { useEffect, useState } from 'react';
import JobDetail from './components/JobDetail/JobDetail';
import JobList from './components/JobList/JobList';
import { IJobDetail } from './types/types';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const apiUrl: string = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
  const token: string = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
  const [items, setItems] = useState<IJobDetail[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUrl = (URL: string) => {
      fetch(URL,
        {
          headers: { 'Authorization': 'Bearer ' + token }
        })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setItems(data);
          setLoading(true);
        });
    }
    fetchUrl(apiUrl);
  }, [])

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  function handleWindowResize() {
    setWindowSize(window.innerWidth);
  }



  return (
    <>
    {loading ? (
      
 <Routes>
 <Route path="*" element={<Navigate to={process.env.PUBLIC_URL + '/jobs'}/>} />
 <Route path={process.env.PUBLIC_URL + '/'} element={<Navigate to={process.env.PUBLIC_URL + '/jobs'} />} />
 <Route path={process.env.PUBLIC_URL + '/jobs'} element={<JobList items={items} windowWidth={windowSize}/>}/>
 {items.map((item) => {
   return (
     <Route key={item.id} path={process.env.PUBLIC_URL + `/job-${item.id}`} element={
       <JobDetail
         address={item.address}
         benefits={item.benefits}
         description={item.description}
         email={item.email}
         employment_type={item.employment_type}
         id={item.id}
         location={item.location}
         name={item.name}
         phone={item.phone}
         pictures={item.pictures}
         salary={item.salary}
         title={item.title}
         updatedAt={item.updatedAt}
         windowWidth={windowSize}
         />
     } />
   )
 })}
</Routes>
    ) : (
      <div className='flex items-center justify-center h-[100vh]'>
      <h1 className='text-5xl'>Loading...</h1>
      </div>
    )}
    </>
     
   
  )
}


export default App;

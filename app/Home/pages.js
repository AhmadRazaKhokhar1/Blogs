import SmallBlog from '@/Component/SmallBlog.js'

import axios from "axios";

import { useState, useEffect } from 'react';
export const HomePage =()=> {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await axios.get('http://localhost:8000/api/blog/fetch')
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

    return <>
    <div>
        Wow apple
        {
            data.map((e)=>{
                return <SmallBlog
                 title={e.title}
                 shortDesc={e.shortDescription}
                 img={e.imageUrl}
                 category={e.category}
                 date={e.createdAt}
                />
            
            })
        }
    </div>
    </>
}
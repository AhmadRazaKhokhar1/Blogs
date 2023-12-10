import SmallBlog from '@/Component/SmallBlog.js'
import { insuranceData } from '@/Server/API/Insurance.js'
import { useState, useEffect } from 'react';
export const HomePage =()=> {

    const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(insuranceData);
        console.log(insuranceData);
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
                 shortDesc={e.shortDesc}
                />
            
            })
        }
    </div>
    </>
}
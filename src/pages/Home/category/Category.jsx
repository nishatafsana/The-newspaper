import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../newsCard/NewsCard';

const Category = () => {
    // const {id}=useParams();
    const categoryNews =useLoaderData()
    return (
        <div className='mt-5'>
          {/* {id &&<h3>This is category:{categoryNews.length}</h3>} */}
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
            }
        </div>
    );
};

export default Category;
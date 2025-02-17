import React, { useEffect, useState } from 'react'
import NewsGrid from './component/NewsGrid';

const Home = () => {

    
  const API_KEY = "13bf025a16594169bd2e0b1f1f7b171d"

  const [searchData, setSearchData] = useState('');

  const [finalData, setFinalData] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  console.log(finalData)

  const fetchNews = async () => {

    const endpoint = searchData.trim()
        ? `https://newsapi.org/v2/everything?q=${searchData}&apiKey=${API_KEY}`  // Search API
        : `https://newsapi.org/v2/everything?q=india&apiKey=${API_KEY}`;   // Default data when input is empty

    try {
      const response = await fetch(endpoint);

      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }

      const data = await response.json();
      setFinalData(data.articles);
    //   setSearchData(finalData)
    //   setNewsLatest(finalData);
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    
    fetchNews();
  }, [searchData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const catData = (event) => {
    setSearchData((event).target.value);
  }
  



  return (
    <>
        <section className='nav-items'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 col-sm-12'>
                        <div className='logo'>
                            <img src="images/logo.png" alt="Logo" />
                        </div>
                    </div>
                    <div className='col-md-6 col-sm-12'>
                        <div className="search-box">
                            <div className="search-inner">
                                <input type="text" className='search-input' value={searchData || ""} 
                                onChange={e => setSearchData(e.target.value)} placeholder='Search here' />
                                <button onClick={fetchNews} className='search-btn'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='category-box'>
        <div className="container">
            <div className="cat-list">
                <button className="cat-item" onClick={catData} value="Sport">Sport</button>
                <button className="cat-item" onClick={catData} value="politics">Politics</button>
                <button className="cat-item" onClick={catData} value="entertainment">Entertainment</button>
                <button className="cat-item" onClick={catData} value="health">Health</button>
                <button className="cat-item" onClick={catData} value="finance">Finance</button>
            </div>
        </div>
        </section>

        <NewsGrid finalData={finalData} />
    </>
  )
}

export default Home
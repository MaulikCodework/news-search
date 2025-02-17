import React from 'react'

const NewsGrid = ({finalData}) => {
    
    // console.log(newsLatest)
  return (
    <section className='news-grid'>
    <div className="container">
        <div className="row">

        {finalData.map((news, i) => {

            return(
                <div className="col-md-4">
                    <div className="news-box">
                        <div className="news-img">
                            {news.urlToImage ?   <img src={news.urlToImage} alt="image" /> : <img src="images/dummy.jpg" />}
                        
                        </div>
                        <div className="news-content">
                            <h2>{news.title}</h2>
                            <p>{news.description}</p>
                            <a onClick={() => window.open(news.url)}>Read More</a>
                        </div>
                    </div>
                </div>
            );
        })}


            
        </div>
    </div>
</section>
  )
}

export default NewsGrid
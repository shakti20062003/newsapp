import React, {useEffect , useState}from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
     const [articles, setArticles ]= useState([])
     const [loading, setLoading ]= useState([false])
     const [page, setPage ]= useState(1)
     const [totalResults, setTotalResult ]= useState(0)
    

    const capitalizeFirstLetter = (string) => {
            return string.charAt(0).toUpperCase()+string.slice(1);
        }

    const UpdateNews = async() =>{
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f57df1f4ca6b43f3a2f7a99a68f73828&page=${page}&pageSize=${props.pagesize}`;
        setLoading(true)
        props.setProgress(30);
        let data = await fetch(url);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles)
        setTotalResult(parseData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    
    useEffect(() => {
        UpdateNews();
        document.title = `${capitalizeFirstLetter(props.category)} - NewsPulse`
    }, [])
    
    
    // handleNextClick = async () => {
    //     setPage(page+1)
    //     UpdateNews();
    // }

    // handlePrevClick = async () => {
    //     setPage(page-1)
    //     UpdateNews();
    // }
   const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f57df1f4ca6b43f3a2f7a99a68f73828&page=${page+1}&pageSize=${props.pagesize}`;
        setLoading(false);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles))
        setTotalResult(parseData.totalResults)
    }
        return (
            <>
                <h1  className='text-center mb-3' style={{marginTop : '90px'}}>NewsPulse - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                 {loading&&<Spinner/>}
                    <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner/>}
                    >
                <div className="container">
                <div className="row">
                    {articles.map((element , index) => {
                        return <div className="col-md-4" key={index + 1}>
                            <NewsItems title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt} />
                        </div>
                    })}
                </div>
                </div>
                </InfiniteScroll>
                </>
        )
}

News.defaultProps = {
    country: 'in',
    pagesize: 8
}

News.propTypes = {
    country: propTypes.string,
    category: propTypes.string,
    pageSize: propTypes.number
}

export default News;
import React from 'react'

const NewsItems =  (props) => {

    let {title , description , imgUrl , newsUrl , author , date} = props;
    return (
      <div className='my-3'>
        <div className="card" >
        <img src={!imgUrl?"https://cdn.pixabay.com/photo/2016/09/08/18/45/cube-1655118_1280.jpg":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
}

export default NewsItems
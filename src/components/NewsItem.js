import React from 'react'

const NewsItem = (props)=> {

    const {title, description, imageUrl,newsUrl,author,time,source} = props
     

    return (
      <div className="card" >
      <img src={imageUrl?imageUrl:require('./FizzNews.png')} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        <p className="card-text" style={{marginBottom:"10px"}} >{description}</p>
        <p className="card-text" style={{marginBottom:"0px"}} ><small className="text-muted"><strong>Source:</strong>  {source}</small></p>
        <p className="card-text" style={{marginBottom:"10px"}} ><small className="text-muted">By <strong>{!author?"Unknown":author} </strong>  on <strong>{time}</strong> </small></p>
        <a href={newsUrl}  target="_blank"rel="noopener noreferrer"  className="btn btn-danger btn-sm">Read more..</a>
      </div>
    </div>
    )
  }

export default NewsItem
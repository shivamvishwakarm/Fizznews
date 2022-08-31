
import React, { Component } from 'react'

const NewsItem = (props)=> {

    const {title, description, imageUrl,newsUrl,author,time,source} = props
     

    return (
      <div className="card" >
      <img src={imageUrl?imageUrl:"https://images.lindependant.fr/api/v1/images/view/6284caf9f56c9e4fba25f7d4/large/image.jpg?v=1"} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> {title} </h5>
        <p className="card-text" style={{marginBottom:"10px"}} >{description}</p>
        <p className="card-text" style={{marginBottom:"0px"}} ><small className="text-muted"><strong>Source:</strong>  {source}</small></p>
        <p className="card-text" style={{marginBottom:"10px"}} ><small className="text-muted">By <strong>{!author?"Unknown":author} </strong>  on <strong>{new Date(time).toGMTString()}</strong> </small></p>
        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-danger btn-sm">Read more..</a>
      </div>
    </div>
    )
  }

export default NewsItem
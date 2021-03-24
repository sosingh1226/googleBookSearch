import React from 'react'

const Card = (props) => {
  return (
    <div className = "container">
      <h3>{props.title}</h3>
      <p className="font">Written by {props.author}</p>
      <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={props.link}>
          View
      </a>
      <button className="btn btn-light" onClick={props.handleSaveBook}>
          Save
      </button>
      <img className="image" src={props.image} alt={props.title} />
      <p>
        {props.description}
      </p>
    </div>
  )
}

export default Card

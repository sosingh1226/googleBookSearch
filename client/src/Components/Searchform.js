import React from 'react'

const Searchform = (props) => {
  return (
    <div>
      <label htmlFor="">Search Your Book Here</label>
      <input
          type="text"
          className="form-control"
          id="bookTitle"
          placeholder="Enter Book"
          onChange ={props.handleInputChange}
          name="query"
          value={props.query}
        />
    <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}>
        Search
    </button> 
    </div>
  )
}

export default Searchform

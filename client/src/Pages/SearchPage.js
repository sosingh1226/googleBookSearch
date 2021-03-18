import React, {Component} from 'react'
import Searchform from "../Components/Searchform"
import api from '../utils/api';

class SearchPage extends Component {
    state = {
        books: [],
        query: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        console.log (name, value)
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
        // event.preventDefault();
        api.searchBooks (this.state.query)
        .then (res => {
            console.log (res.data)
            this.setState ({books: res.data})
        }
        )
        
      };

    //   componentDidMount (){
        //   console.log (this.state.books)
    //   }

    render() {
    return (
        <div>
            <h1>Google React Book Search</h1>
            <Searchform
            handleInputChange = {this.handleInputChange}
            query= {this.state.query}
            handleFormSubmit = {this.handleFormSubmit}
            />
        </div>
    )
}}

export default SearchPage

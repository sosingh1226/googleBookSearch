import React, { Component } from 'react';
import Searchform from '../Components/Searchform';
import Card from '../Components/Card';
import api from '../utils/api';

class SearchPage extends Component {
	state = {
		books: [],
		query: ''
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		console.log(name, value);
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		// event.preventDefault();
		api.searchBooks(this.state.query).then((res) => {
			console.log(res.data.items);
			this.setState({ books: res.data.items });
			console.log('updated value ', this.state.books);
		});
	};

	//   componentDidMount (){
	//   console.log (this.state.books)
	//   }

    handleSaveBook= event => {
        console.log (event.target)
        }

	render() {
		return (
			<div>
				<h1>Google React Book Search</h1>
				<Searchform
					handleInputChange={this.handleInputChange}
					query={this.state.query}
					handleFormSubmit={this.handleFormSubmit}
				/>
				{/* <Results books={this.state.books} /> */}
				<h2>Search Results:</h2>
				{this.state.books ? (
					this.state.books.map((book) => (
						<Card
							key={book.id}
							title={book.volumeInfo.title}
							author={book.volumeInfo.authors}
							description={book.volumeInfo.description}
							image={book.volumeInfo.imageLinks.smallThumbnail}
							link={book.volumeInfo.infoLink}
							handleSaveBook={this.handleSaveBook}
						/>
					))
				) : (
					<div>NO BOOKS FOUND </div>
				)}
			</div>
		);
	}
}

export default SearchPage;

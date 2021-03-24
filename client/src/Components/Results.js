import React from "react"; 
import Card from "./Card";
const Results = ({books}) => {
    // console.log(books)


return(
    <> 
    <h2>Book List:</h2>
    {books ? books.map(book => (
                    <Card
                      key={book.id}
                      title={book.volumeInfo.title}
                      author={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.smallThumbnail}
                      link={book.volumeInfo.infoLink}
                      handleSaveBook= {handleSaveBook(book.id)}
                    />
                  ))
                  :<div>NO BOOKS FOUND </div>
    }
    </>
)
}
export default Results;
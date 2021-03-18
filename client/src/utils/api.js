import axios from 'axios'

export default {
  searchBooks: function(parameter) {
  return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ parameter)
}
};
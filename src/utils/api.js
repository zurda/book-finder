const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const PARAMS = "maxResults=40&projection=full";

const fetchBooks = query => {
  const url = `${BASE_URL}?q=${query}&${PARAMS}`;
  return fetch(url).then(response => {
    if (response.ok) return response.json();
    else return new Error("Something went wrong");
  });
};

export default fetchBooks;

import "./styles.css";
import react, { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function App() {
  // posts data in array
  const [posts, setPosts] = useState([]);
  // current page state
  const [currentPage, setCurrentPage] = useState(1);
  // item per page state
  const [itemsPerPage, setItemsPerPage] = useState(9);

  // start index means 0 in first term
  const startIndex = (currentPage - 1) * itemsPerPage;
  // which is 10 in first term
  const endIndex = startIndex + itemsPerPage;
  // which is 0 to 10 in first term
  const currentItems = posts.slice(startIndex, endIndex);

  // total pages state if length of api array is 100 then 100/10
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  // function to fetch data from api
  async function fetchData() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setPosts(data));
  }

  // showing effet at reload
  useEffect(() => {
    fetchData();
  }, []);

  // when we click on evevry page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPageHandel = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPageHandel = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <div className="App">
      {posts && (
        <div className="App__posts">
          {currentItems.map((post) => {
            return (
              <div className="App_posts_post" key={post.id}>
                <h2 className="App__posts__post__heading">{post.title}</h2>
                <p className="App__posts__post__body">{post.body}</p>
              </div>
            );
          })}
        </div>
      )}
      {posts && (
        <div className="App__pagination">
          <button
            className="App__pagination__left"
            onClick={() => prevPageHandel()}
            style={{ display: currentPage === 1 ? "none" : "" }}
          >
            ◀
          </button>

          {posts &&
            [...Array(totalPages)].map((_, i) => {
              return (
                <span
                  key={i}
                  className="App__pagination__number"
                  onClick={() => handlePageChange(i + 1)}
                  id={currentPage === i + 1 ? "active__page" : ""}
                >
                  {i + 1}
                </span>
              );
            })}
          {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={handlePageChange}
          /> */}
          <button
            className="App__pagination__right"
            onClick={() => nextPageHandel()}
            style={{ display: currentPage === totalPages ? "none" : "" }}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
}

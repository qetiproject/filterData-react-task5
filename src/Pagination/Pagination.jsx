import { useState } from "react";
import './Pagination.css'

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit, meta }) => {

    const [pages] = useState(Math.round(meta.total/ dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
      }
  
    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    }
  
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    return (
      <div className="mt-3 mb-3">
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d}/>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            წინა
          </button>
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            შემდეგი
          </button>
        </div>
      </div>
  )

}

export default Pagination
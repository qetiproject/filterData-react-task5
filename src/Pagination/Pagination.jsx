import { useState, useEffect } from "react";
import './Pagination.css'

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit, meta, setPage, curPage, searchData }) => {

    const [pages] = useState(Math.round(meta.total/ dataLimit));
    // const [currentPage, setCurrentPage] = useState(1);
  
    const goToNextPage = () => {
        setPage((page) => page + 1);
      }
  
    const goToPreviousPage = () => {
        setPage((page) => page - 1);
    }
  
    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setPage(pageNumber);
    }
  
    const getPaginatedData = () => {
        const startIndex = curPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };
  
    const getPaginationGroup = () => {
        let start = Math.floor((curPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };
  
    useEffect(() => {
      searchData()
      window.scrollTo({ behavior: 'smooth', top: '0px' });

    }, [curPage]);

    return (
      <div className="mt-3 mb-3">
        {console.log(curPage)}
        <div className="dataContainer">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent key={idx} data={d}/>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={goToPreviousPage}
            className={`prev ${curPage === 1 ? 'disabled' : ''}`}
          >
            წინა
          </button>
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${curPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
          <button
            onClick={goToNextPage}
            className={`next ${curPage === pages ? 'disabled' : ''}`}
          >
            შემდეგი
          </button>
        </div>
      </div>
  )

}

export default Pagination
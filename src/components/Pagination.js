import React from 'react'

const Pagination = ({perPage, totalProd, paginate}) => {
    const pageNumbers = [];
    for(let i=1; i<=Math.ceil(totalProd/perPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div style={{float:"right"}}>
        <nav>
            <ul className="pagination justify-content-center" style={{float:"left"}}>
                {pageNumbers.map(number=>(
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)} href="#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
}

export default Pagination

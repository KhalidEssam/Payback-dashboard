import React from "react";

const Table = ({ headers, data }) => {
return (
    <div className="table table-responsive">
        <table className='table table-striped table-hover'>
            <thead>
            <tr>
                {headers.map((header, index) => (
                <th scope='col' key={index}>{header}</th>
                ))}
            </tr>
            </thead>

            <tbody>
            {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
                <th scope='row'>{rowIndex}</th>
                {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
</div>
);
};

export default Table;

import React from "react";

const DataTable = ({ columns, data }) => {
  return (
    <div className="r-table">
      <div className="r-table-header">
        {columns?.map((col, idx) => (
          <div
            className="col-item"
            key={`ColIndex_${idx}`}
            style={{ width: col?.width }}
          >
            {col.label}
          </div>
        ))}
      </div>
      <div className="r-table-row">
        {data?.map((row, idx) => (
          <div className="row-item" key={`RowIndex_${idx}`}>
            {columns?.map((col, idx) => (
              <div key={`Col_Row${idx}`} style={{ width: col?.width }}>
                {col?.render(row)}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataTable;


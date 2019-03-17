import React from "react";

const options = {
  all: "All",
  active: "Active",
  completed: "Completed"
};

export default function Filter(props) {
  const { changeFilter } = props;
  let style = "btn btn-outline-dark";

  return (
    <div className="filter">
      {Object.keys(options).map(key => (
        <button
          type="button"
          className={style}
          key={key}
          onClick={() => changeFilter(key)}
        >
          {options[key]}
        </button>
      ))}
    </div>
  );
}

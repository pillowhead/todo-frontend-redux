import React from "react";

const options = {
  all: "all",
  active: "active",
  completed: "completed"
};

export default function Filter(props) {
  const { changeFilter, filter } = props;
  let style = "";

  return (
    <div className="filter">
      {Object.keys(options).map(key => {
        if (filter === key) {
          style = "btn btn-dark";
        } else style = "btn btn-outline-dark";

        return (
          <button
            type="button"
            className={style}
            key={key}
            onClick={() => changeFilter(key)}
          >
            {options[key].toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}

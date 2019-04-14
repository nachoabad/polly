import React from 'react'

function Choice(props) {
  return (
    <div className="col-12 text-center">
      <button className={`btn btn-${props.color} btn-lg`}
              onClick={() => props.onClick()}
      >
        {props.sentence}
      </button>
    </div>
  );
}

export default Choice
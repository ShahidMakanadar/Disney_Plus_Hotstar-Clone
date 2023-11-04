// import React from 'react'
import PropTypes from "prop-types";

function HeaderItem(props) {
  return (
    <div> 
      <div className="flex items-center gap-2 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3">
        <props.Icon />
        <h2 > {props.name}</h2>
      </div>
    </div>
  );
}

HeaderItem.propTypes = {
  name: PropTypes.string,
  Icon: PropTypes.elementType.isRequired,
};

export default HeaderItem;

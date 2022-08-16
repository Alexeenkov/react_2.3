import React from 'react';
import PropTypes from "prop-types";

const DropdownBtn = (props) => {
    const { onClickBtn } = props;

    return (
        <button data-id="toggle" className="btn" onClick={onClickBtn}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
        </button>
    );
}

DropdownBtn.propTypes = {
    onClickBtn: PropTypes.func,
}

export default DropdownBtn;
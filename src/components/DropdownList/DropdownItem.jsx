import React from 'react';
import PropTypes from "prop-types";

const DropdownItem = (props) => {
    const { onSelectItem, item, activeItem } = props;

    return (
        <li className={activeItem === item ? 'active' : ''}
            onClick={(e) => {
                e.stopPropagation();
                onSelectItem(item);
            }
        }>
            <a href="#">
                {item}
            </a>
        </li>
    );
}

DropdownItem.propTypes = {
    onSelectItem: PropTypes.func,
    item: PropTypes.string,
    activeItem: PropTypes.string,
}

export default DropdownItem;
import React, { useState } from 'react';
import PropTypes from "prop-types";
import DropdownBtn from './DropdownBtn';
import DropdownItem from './DropdownItem';
import { v4 as uuidv4 } from 'uuid';

const DropdownList = (props) => {
    const { items } = props;

    const [activeItem, setActiveItem] = useState(items[0]);
    const [menuOpen, setMenuOpen] = useState('close');

    const classOpened = menuOpen === 'open' ? 'open' : '';

    function handleCheckItem(itemChecked) {
        setActiveItem(itemChecked);
    }

    function handleToggleMenu() {
        menuOpen === 'open' ? setMenuOpen('close') : setMenuOpen('open');
    }

    return (
        <div className="container">
            <div data-id="wrapper" className={'dropdown-wrapper ' + classOpened}>
                <DropdownBtn onClickBtn={handleToggleMenu} />
                <ul data-id="dropdown" className="dropdown">
                    {items.map((item) => {
                        return (
                            <DropdownItem key={uuidv4()} onSelectItem={handleCheckItem} activeItem={activeItem} item={item}/>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

DropdownList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
}

export default DropdownList;
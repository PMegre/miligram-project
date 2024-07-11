import React, { useState, useEffect } from 'react';
import '../styles/SwitcherSelect.css';

const SwitcherSelect = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        if (isChecked) {
            document.body.classList.add('real__mode__on');
        } else {
            document.body.classList.remove('real__mode__on');
        }
    }, [isChecked]);

    return (
        <div className="switch d-inline-flex">
            <div className="switch-handle">Real mode</div>
            <input
                type="checkbox"
                id="switcher"
                className="switch-input"
                checked={isChecked}
                onChange={handleChange}
            />
            <label htmlFor="switcher" className="switch-label">ON&nbsp;&nbsp; OFF</label>
        </div>
    );
};

export default SwitcherSelect;

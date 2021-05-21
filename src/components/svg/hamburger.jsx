import React from 'react';

export function HamburgerIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" fill={`${props.fill}`} className={`${props.className}`} onClick={props.onClick} id={"cheese"}>
            <g id="Layer_2" data-name="Layer 2">
                <rect className="cls-1" x="43.05" y="50.56" width="515.08" height="100.88" rx="27.84"/>
                <rect className="cls-1" x="43.05" y="248.97" width="515.08" height="100.88" rx="27.84"/>
                <rect className="cls-1" x="42.46" y="447.97" width="515.08" height="100.88" rx="27.84"/>
            </g>
        </svg>
    );
}
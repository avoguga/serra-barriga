import React, { useRef, useState } from 'react';


function TransparentCtnr() {
    const [text, setText] = useState('');
    const containerRef = useRef(null);
    const handleTextChange = (e) => {
        setText(e.target.value);
        if (containerRed.current) {
            containerRef.current.style.width = `${containerRef.current.scrollWidth}px`;

        }
    }
}
import { useState, useEffect } from "react";

const ScreenSize = () => {
    const [windowDimensions, setWindowDimensions] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight
    });

    const detectSize = () => {
        setWindowDimensions({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize)
        };
    }, [windowDimensions]);

    return windowDimensions;
};

export default ScreenSize;
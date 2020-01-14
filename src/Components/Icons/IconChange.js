import React, {useEffect, useState, useRef} from 'react'

const IconChange = ({width = 32, height = 32}) => {
    const el = useRef(null)
    const [color, setColor] = useState('none')
    useEffect(() => {
        onChangeColor()
        window.addEventListener('click', onChangeColor, false)
        return () => {
            window.removeEventListener('click', onChangeColor, false)
        }
    }, [])
    const onChangeColor = e => setColor(getComputedStyle(el.current, null)["color"])
    return (
        <svg
            ref={el}
            width={width}
            height={height}
            viewBox="0 0 156 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fill={color}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M156 78C156 121.078 121.078 156 78 156C34.9219 156 0 121.078 0 78C0 34.9218 34.9219 0 78 0C121.078 0 156 34.9218 156 78ZM94.4346 63.6024L126.487 82L131 45.1764L124.919 48.2405C115.062 32.4771 97.6056 22 77.7155 22C46.9447 22 22 47.0748 22 78.0061C22 54.8076 40.7085 36.0015 63.7866 36.0015C80.4595 36.0015 94.8517 45.8173 101.556 60.0136L94.4346 63.6024ZM60.5654 92.3976L28.5133 74L24 110.824L30.0807 107.759C39.9385 123.523 57.3944 134 77.2845 134C108.055 134 133 108.925 133 77.9939C133 101.192 114.292 119.998 91.2134 119.998C74.5405 119.998 60.1483 110.183 53.4437 95.9864L60.5654 92.3976Z"/>
        </svg>
    )
}

export default IconChange
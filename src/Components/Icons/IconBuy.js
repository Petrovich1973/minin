import React, {useEffect, useState, useRef} from 'react'

const IconBuy = ({width = 32, height = 32}) => {
    const el = useRef(null)
    const [color, setColor] = useState('none')
    useEffect(() => {
        onChangeColor()
        window.addEventListener('click', onChangeColor, false)
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
                d="M156 78C156 121.078 121.078 156 78 156C34.9219 156 0 121.078 0 78C0 34.9218 34.9219 0 78 0C121.078 0 156 34.9218 156 78ZM133 44H118.641L118.586 44.183L101.751 98H50.8733L37.6315 58H108V51H29V54.1999L30.2579 58L45.8409 105.072L46.0588 105H107V104.667L123.788 51H133V44ZM46.0588 105H46L52.4863 102.872L46.0588 105ZM60.5 129C65.1945 129 69 125.194 69 120.5C69 115.806 65.1945 112 60.5 112C55.8055 112 52 115.806 52 120.5C52 125.194 55.8055 129 60.5 129ZM102 120.5C102 125.194 98.1945 129 93.5 129C88.8055 129 85 125.194 85 120.5C85 115.806 88.8055 112 93.5 112C98.1945 112 102 115.806 102 120.5Z"/>
        </svg>
    )
}

export default IconBuy
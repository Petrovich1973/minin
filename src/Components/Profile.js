import React, {useEffect} from 'react'

const Profile = () => {

    useEffect(() => {

        const elements = document.querySelectorAll('.drop-down')
        elements.forEach(el => {
            el.style.display = 'none'
            setTimeout(() => el.style.display = null, 100)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">You profile</h3>

            </div>
        </main>
    )
}

export default Profile
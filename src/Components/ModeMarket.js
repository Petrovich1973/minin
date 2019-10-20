import React, {useEffect, useState} from 'react'
import axios from 'axios'

const ModeMarket = () => {

    const [data, setData] = useState({users: [{id: 111}, {id: 222}], loader: false, error: null})

    const fetchBusinesses = () => {
        setData({...data, loader: true})

        axios.get('http://192.168.1.3:9000/api/v1/agent')
            .then(reponse => setData({...data, loader: false, ...reponse.data}))
            .catch(err => {
                console.log(err)
                setData({...data, loader: false, error: err.toString()})
            })
    }

    useEffect(() => {

        fetchBusinesses()

        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <div style={{flex: 1}}>

                <h3>ModeMarket</h3>

                {data.loader ? <p className={'align-center'}>Loading...</p> : null}

                <div style={{color: 'red'}}>{data.error && data.error}</div>

                <div style={{fontWeight: 500, padding: '2rem'}}>

                    {data.users.map((user, idx) => (
                        <p style={{
                            borderTop: '1px solid #ccc',
                            padding: '1rem',
                            margin: 0
                        }}
                           key={idx}>{user.id}</p>
                    ))}

                </div>

            </div>
        </main>
    )
}

export default ModeMarket
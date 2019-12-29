import React, {useReducer} from 'react'
import './Transactions.scss'
import {initializeTransactions, stateTransactions} from "./reducerTransactions"
import moment from "moment";

const Transactions = () => {
    const [transactions] = useReducer(stateTransactions, initializeTransactions)

    const statusMapping = status => {
        if (status === 'completed') return <span className="label box-green">{status}</span>
        if (status === 'canceled') return <span className="label box-orange">{status}</span>
        if (status === 'rejected') return <span className="label box-red">{status}</span>
    }
    return (
        <main className="Transactions">
            <div>
                <h1 className="title-block row-group">Transactions</h1>

                <div className="list-scroll">
                    <div className="flexCenter">

                        <table className="table-transactions">
                            <tbody>
                            {transactions.data.map((row, idx) => {
                                const key = Object.keys(row)[0]
                                const {paid, received, status, time, source} = row[key].trades[0]
                                return (
                                    <tr key={idx}>
                                        <td>ID {key}</td>
                                        <td>{statusMapping(status)}</td>
                                        <td>{source}</td>
                                        <td>предложено <span className="label">{paid}</span></td>
                                        <td>списано <span className="label">{received}</span></td>
                                        <td><span>
                                        {moment(time * 1000).format('DD.MM.YYYY HH:mm')}</span></td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default Transactions
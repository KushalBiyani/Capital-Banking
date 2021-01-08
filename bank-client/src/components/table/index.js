import React from 'react';
import './table.css';

const Table = (props) => {
    return (
        <div>
            <table className="flat-table flat-table-1" >
                    <thead>
                        <th>{props.head[0]}</th>
                        <th>{props.head[1]}</th>
                        <th>{props.head[2]}</th>
                        <th>{props.head[3]}</th>
                        <th>{props.head[4]}</th>
                        <th>{props.head[5]}</th>
                    </thead>
                    <tbody>
                     {props.data.map((item) => ( 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.acc_no}</td>
                            <td>{item.balance}</td>
                            <td>{item.location}</td>
                            <tr />
                        </tr>
                        ))} 
                    </tbody>
                </table>
        </div>
  )

}

export default Table 
import React from 'react'

const StatusDisplay = ({status}) => {
    return (
        <div className={`${status  === 'Pending' ?  "pending" : status  === 'In progress' ? "inprogress": status  === 'Completed' ? "finished": "abandoned"}`}>{status}</div>
    )
}
export default StatusDisplay
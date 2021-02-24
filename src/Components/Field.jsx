import React from 'react'

 const  Field = ({details})=>{
    return(
        <div className="form-group">
            <label htmlFor={details.id}>{details.label}</label>
            <input type={details.type} onChange={details.event} value={details.value} placeholder={`${details.label}...`} className="form-control" id={details.id}/>
          </div>
    )
}
export default Field
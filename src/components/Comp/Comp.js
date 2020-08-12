import React from 'react'

const Comp=({Title, SubTitle, Value, setValue}) =>{
    return (
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{SubTitle}</h6>
            <input type="text" value={Value} className="form-control" onChange={e=>setValue(e.target.value)}/>
            </div>
        </div>
    )
};
export default Comp;

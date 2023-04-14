import React, { useState }from 'react'

function Cover() {
    const [state, setState] = useState({
        organization: '',
        region: '',
        amount: '',
        code:'',
        city:'',
        period:'',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <>
            <div className='title'>
                <h2>Report Cover Page</h2>
            </div>
            <form className="cover">
                <div className="form-control">
                    <div className="row">
                        <label htmlFor="">Organisation Name:</label>
                    </div>
                    <div className="row">
                        <input 
                            type="text"
                            name="organization"
                            value={state.organization}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                    <div className="form-control">
                        <div className="row">
                            <label htmlFor="">Region</label>
                        </div>
                        <div className="row">
                            <input 
                                type="text"
                                name="region"
                                value={state.region}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="row">
                            <label htmlFor="">Grant Amount</label>
                        </div>
                        <div className="row">
                            <input 
                                type="text"
                                name="amount"
                                value={state.amount}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                    </div>
                    <div className="form-control">
                        <div className="row"><label htmlFor="">Project Code</label></div>
                        <div className="row">
                            <input 
                                type="text"
                                name="code"
                                value={state.code}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                    </div>
                    <div className="form-control">
                        <div className="row"><label htmlFor="">City</label></div>
                        <div className="row">
                            <input 
                                type="text"
                                name="city"
                                value={state.city}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                    </div>
                    <div className="form-control">
                        <div className="row"><label htmlFor="">Grant Period</label></div>
                        <div className="row">
                            <input 
                                type="text"
                                name="period"
                                value={state.period}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <div className="form-control">
                        <button type="submit">Next</button>
                    </div>
            </form>
        </>
    )
}

export default Cover
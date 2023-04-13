import React, { useState }from 'react'

function Cover() {
    const [state, setState] = useState({
        date: '',
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
                <h1>Cover</h1>
            </div>
            <form>
                <div className="form-control">
                    <label htmlFor="">Date:</label>
                        <input
                            type="text"
                            name="date"
                            value={state.date}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-conrtol">
                        <label htmlFor="">Organisation Name:</label>
                    </div>
                    <div className="form-conrtol">
                        <label htmlFor="">Region</label>
                    </div>
                    <div className="form-conrtol">
                        <label htmlFor="">Grant Amount</label>
                    </div>
                    <div className="form-conrtol">
                        <label htmlFor="">Project Code</label>
                    </div>
                    <div className="form-conrtol">
                        <label htmlFor="">City</label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Grant Period</label>
                    </div>
                    <div className="form-control">
                        <button type="submit">Submit</button>
                    </div>
            </form>
        </>
    )
}

export default Cover
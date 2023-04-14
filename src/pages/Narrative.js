import React, { useState } from 'react'

function Narrative() {
    const [state, setState] = useState({
        summary: '',
        completed: '',
        pending: '',
        delayed: '',
        issues:'',
        risks:'',
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
                <h2>Narrative</h2>
            </div>
            <form>
                <div className="form-control">
                    <div><label htmlFor="">Date:</label></div>
                    <div>
                        <input
                            type="date"
                            name="date"
                            value={state.date}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="row"><label htmlFor="">Project Summary:</label></div>
                    <div className="row">
                        <textarea
                            type="text"
                            name="summary"
                            rows={4} cols={40}
                            value={state.summary}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="row"><label htmlFor="">Task Completed:</label></div>
                    <div className="row">
                        <textarea
                            type="text"
                            name="completed"
                            rows={4} cols={40}
                            value={state.completed}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="row">
                        <label htmlFor="">Task Pending:</label>
                    </div>
                    <div className="row">
                        <textarea
                            type="text"
                            name="pending"
                            rows={4} cols={40}
                            value={state.pending}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="row">
                        <label htmlFor="">Task Delayed:</label>
                    </div>
                    <div className="row">
                        <textarea
                            type="text"
                            name="delayed"
                            rows={4} cols={40}
                            value={state.delayed}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="row">
                        <label htmlFor="">Risks:</label>
                    </div>
                    <div className="row">
                        <textarea
                            type="text"
                            name="risks"
                            rows={4} cols={40}
                            value={state.risks}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="row">
                        <label htmlFor="">Issues:</label>
                    </div>
                    <div className="row">
                        <textarea
                            type="text"
                            name="issues"
                            rows={4} cols={40}
                            value={state.issues}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="form-control">
                    <div className="buttons">
                        <button className='button-btn' type="submit">Back</button>
                        <button className='button-btn' type="submit">Next</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Narrative
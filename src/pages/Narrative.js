import React, { useState } from 'react'

function Narrative() {
    const [state, setState] = useState({
        date: '',
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
                <h1>Narrative</h1>
            </div>
            <form>
                <div className="form-control">
                    <label htmlFor="">Date:</label>
                        <input
                            type="date"
                            name="date"
                            value={state.date}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="">Project Summary:</label>
                        <textarea
                            type="text"
                            name="summary"
                            rows={4} cols={40}
                            value={state.summary}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="">Task Completed:</label>
                        <textarea
                            type="text"
                            name="completed"
                            rows={4} cols={40}
                            value={state.completed}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="">Task Pending:</label>
                        <textarea
                            type="text"
                            name="pending"
                            rows={4} cols={40}
                            value={state.pending}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="">Task Delayed:</label>
                        <textarea
                            type="text"
                            name="delayed"
                            rows={4} cols={40}
                            value={state.delayed}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="">Risks:</label>
                        <textarea
                            type="text"
                            name="risks"
                            rows={4} cols={40}
                            value={state.risks}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <label htmlFor="">Issues:</label>
                        <textarea
                            type="text"
                            name="issues"
                            rows={4} cols={40}
                            value={state.issues}
                            onChange={handleInputChange}
                        />
                </div>
                <div className="form-control">
                    <button type="submit">Submit</button>
                </div>s
            </form>
        </>
    )
}

export default Narrative
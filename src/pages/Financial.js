import React, { useState } from 'react'

function Financial() {
    const [state, setState] = useState({
        adminBudget: '',
        adminForecast: '',
        adminActual: '',
        logisticsBudget: '',
        logisticsForecast: '',
        logisticsActual: '',
        overheadsBudget: '',
        overheadsForecast: '',
        overheadsActual: '',
        incidentalBudget: '',
        incidentalForecast: '',
        incidentalActual: '',
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
                <h2>Financial Report</h2>
            </div>
            <form>
                <div className="form-control">
                    <div><label htmlFor="">Adminstration:</label></div>
                    <div className="items">
                        <div>
                            <div>Budget:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.adminBudget}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Forecast:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.adminForecast}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Actual:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.adminActual}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div><label htmlFor="">Logistics:</label></div>
                    <div className="items">
                        <div>
                            <div>Budget:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.logisticsBudget}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Forecast:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.logisticsForecast}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Actual:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.logisticsActual}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div><label htmlFor="">Overheads:</label></div>
                    <div className="items">
                        <div>
                            <div>Budget:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.overheadsBudget}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Forecast:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.overheadsForecast}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Actual:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.overheadsActual}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div><label htmlFor="">Incidentals:</label></div>
                    <div className="items">
                        <div>
                            <div>Budget:</div>
                            <div>
                                <input
                                    type="text"
                                    value={state.incidentalsBudget}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Forecast:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.incidentalsForecast}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <div>
                            <div>Actual:</div>
                            <div>
                                <input 
                                    type="text"
                                    value={state.incidentalsActual}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-control">
                    <div className="buttons">
                        <button className='button-btn' type="submit">Back</button>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Financial
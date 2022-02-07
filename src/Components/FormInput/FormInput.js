import React from "react";

import './Styling/FormInput.css';

const FormInput = (({ handleChange, label, ...LeftoverInputTagProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handleChange} {...LeftoverInputTagProps} />
            {
                // If label prop exists on props passed in, render a label tag element. Else render nothing.
                label ? (
                    <label className={`${LeftoverInputTagProps.value.length ? 'shrink' : ''} form-input-label`}>
                        {label}
                    </label>
                ) 
                : 
                null
            }
        </div>
    )
});

export default FormInput;
import React from 'react';

import classes from './Input.css'

const input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    let validationErrorMessage = null;
    if (props.invalid && !props.pristine){
        inputClasses.push(classes.Invalid);
        validationErrorMessage = <p>Please fill the field!</p>
    }
   
    

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        < option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}

                </select>
            );
            break;
        case ('textarea'):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed}/>
            break;

        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value} />
            break;
    }
    return (
        <div>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
            {validationErrorMessage}

        </div>
    )

};
export default input;

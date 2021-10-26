import React, { useState } from 'react';
import './mainpage.scss';

// Form control
import { useFormik } from "formik";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MainPage = () => {
    const [darkTheme, setDarkTheme] = useState('default');
    const [countFrom, setCountFrom] = useState(0);
    const [countTo, setCountTo] = useState(0);
    const [valueFrom, setValueFrom] = useState('');
    const [valueTo, setValueTo] = useState('');

    const handleTheme = () => {
        darkTheme === 'default' ? setDarkTheme('dark') : setDarkTheme('default');
    }

    const handleChangeFrom = (e) => {
        let actualDigit = e.target.value.toString().split('');

        if (actualDigit[actualDigit.length - 1] === ',' || actualDigit[actualDigit.length - 1] === '.') {
            actualDigit[actualDigit.length - 1] = '.';
            if (valueFrom == '') {
                actualDigit[actualDigit.length - 1] = '0.';
            }   
        }

        (actualDigit.filter(i => /[.,]/.test(i)).length <= 1) ? setValueFrom(actualDigit.join('')) : setValueFrom(valueFrom);
    }

    const handleChangeTo = (e) => {
        let actualDigit = e.target.value.toString().split('');

        if (actualDigit[actualDigit.length - 1] === ',' || actualDigit[actualDigit.length - 1] === '.') {
            actualDigit[actualDigit.length - 1] = '.';
            if (valueTo == '') {
                actualDigit[actualDigit.length - 1] = '0.';
            }
        }

        (actualDigit.filter(i => /[.,]/.test(i)).length <= 1) ? setValueTo(actualDigit.join('')) : setValueTo(valueTo);
    }
    
    const formik = useFormik({
        initialValues: {
            fromInput: '',
            toInput: ''
        },
        onSubmit: (values) => {
        },
    });

    return (
        <div 
            // id={darkTheme}
            id='dark'
            className='main-wraper' 
        >
            <div className='form-wrapper'>
                <form 
                    className="form-main"
                    onSubmit={formik.handleSubmit}
                >
                    <div className="form-helper-text">
                        <p>From</p>
                    </div>
                    <NewNumberField 
                        name='fromInput'
                        type='tel'
                        value={valueFrom}
                        onChange={handleChangeFrom}
                        onBlur={formik.handleBlur}
                    />
                    <div className="form-helper-text">
                        <p>To</p>
                    </div>
                    <NewNumberField 
                        name='toInput'
                        type='text'
                        value={valueTo}
                        onChange={handleChangeTo}
                        onBlur={formik.handleBlur}
                    />  
                    <Button
                        type="submit"
                    >
                        testing
                    </Button>
                </form>
            </div>
        </div>
    );
}

const NewNumberField = ({ name, type, value, onChange, onBlur }) => {
    const textFieldStyle = {
        border: 'none',
    }

    return (
        <div className="form-textfield">
            <TextField 
                name={name}
                type="text"
                variant="standard"

                placeholder='0.0'

                value={value}
                onChange={onChange}
                onBlur={onBlur}

                autoComplete='off'    
                autoCorrect='off'

                style={textFieldStyle}
                fullWidth={true}

                inputProps={{ 
                    inputmode:"decimal", 
                }}
                InputProps={{
                    disableUnderline: true, // <== added this
                  }}
            />
    </div>  
    )
}

export default MainPage;

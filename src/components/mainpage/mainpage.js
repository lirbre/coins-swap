import React, { useState } from 'react';
import './mainpage.scss';   

// Form control
import { useFormik } from "formik";

// Material UI
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

// Icons
import { AiOutlineArrowDown } from 'react-icons/ai'; 
import { FaMoon } from "react-icons/fa"
import { BsSunFill } from "react-icons/bs"

const MainPage = () => {
    const [darkTheme, setDarkTheme] = useState({
        theme: 'dark',
        icon: 'moon'
    });
    const [valueFrom, setValueFrom] = useState('');
    const [valueTo, setValueTo] = useState('');

    const handleTheme = () => {
        darkTheme.theme === 'dark' ? 
        setDarkTheme({
            theme: 'default',
            icon: 'sun'
        }) : setDarkTheme({
            theme: 'dark',
            icon: 'moon'
        });
    }

    const handleChangeFrom = (e) => {
        let actualDigit = e.target.value.toString().split('');
        let numberField = actualDigit.filter(i => /[(0-9).,]/.test(i));

        if (numberField.length <= 20) {
            if (numberField[numberField.length - 1] === ',' || numberField[numberField.length - 1] === '.') {
                numberField[numberField.length - 1] = '.';
                if (valueTo === '') {
                    numberField[numberField.length - 1] = '0.';
                }
            }
            (numberField.filter(i => /[.,]/.test(i)).length <= 1) ? setValueFrom(numberField.join('')) : setValueFrom(valueFrom);
        }
    }

    const handleChangeTo = (e) => {
        let actualDigit = e.target.value.toString().split('');
        let numberField = actualDigit.filter(i => /[(0-9).,]/.test(i));

        if (numberField.length <= 20) {
            if (numberField[numberField.length - 1] === ',' || numberField[numberField.length - 1] === '.') {
                numberField[numberField.length - 1] = '.';
                if (valueTo === '') {
                    numberField[numberField.length - 1] = '0.';
                }
            }
            (numberField.filter(i => /[.,]/.test(i)).length <= 1) ? setValueTo(numberField.join('')) : setValueTo(valueTo);
        }
    }
    
    const formik = useFormik({
        initialValues: {
            fromInput: '',
            toInput: ''
        },
    });

    return (
        <div 
            id={darkTheme.theme}
            className='main-wraper' 
        >
            <div className='intro-wrapper'>
                <div className='intro-main'>
                    <p className='intro-title'>Converter</p>
                    <p className='intro-subtitle'>Check exchange rates</p>
                </div>
                <div className='intro-button-pos'>
                    <IconButton
                        className='intro-iconbutton'
                        onClick={() => handleTheme()}
                    >
                        <ThemeIcon
                            icon={darkTheme.icon}
                        />
                    </IconButton> 
                </div>
            </div>
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
                        value={valueFrom}
                        onChange={handleChangeFrom}
                        onBlur={formik.handleBlur}
                    />
                    <div className="arrow-wrapper">
                        <AiOutlineArrowDown 
                            className='arrow-icon'
                            onClick={() => alert('clicked')}
                        />
                    </div>
                    <div className="form-helper-text">
                        <p>To</p>
                    </div>
                    <NewNumberField 
                        name='toInput'
                        value={valueTo}
                        onChange={handleChangeTo}
                        onBlur={formik.handleBlur}
                    />  
                </form>
            </div>
        </div>
    );
}

const NewNumberField = ({ name, value, onChange, onBlur }) => {
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

                fullWidth={true}

                inputProps={{ 
                    inputmode:"decimal", 
                }}

                InputProps={{
                    disableUnderline: true,
                }}
            />
    </div>  
    )
}

const ThemeIcon = ({ icon }) => {
    return icon === 'moon' ? (
        <FaMoon
            className='intro-icon'
        />
    ) : (
        <BsSunFill
            className='intro-icon'
        />
    )
}

export default MainPage;

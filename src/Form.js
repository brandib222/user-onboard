import React from 'react';

export default function Form(props) {
    const {
        values,
        submit, 
        change, 
        disabled, 
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    
    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2 className='title'>Add User</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
                <div className='form-group inputs'>
                    <h4>Info</h4>
                    <label className='name'>Name :
                        <input 
                            value={values.name}
                            onChange={onChange}
                            name='name'
                            type='text'
                        />
                    </label>
                    <label className='email'> Email :   
                        <input 
                            value={values.email}
                            onChange={onChange}
                            name='email'
                            type='text'
                        />
                    </label>
                    <label className='password'> Password :
                        <input 
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='text'
                        />
                    </label>
                    <label className='terms'> Terms of Service
                        <input 
                            type='checkbox'
                            name='terms'
                            checked={values.terms}
                            onChange={onChange}
                        />
                    </label>
                </div>
                <button disabled={disabled}>submit</button>
            </div>
        </form>
    )
}
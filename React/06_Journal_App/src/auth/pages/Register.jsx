import React from 'react';

import { Alert, Button, Grid, Link, TextField } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import { AuthLayout } from '../layout/AuthLayout';

import { useForm } from '../../hooks';
import { validateAlpha, validateEmail, validatePassword } from '../../helpers/validate';
import { useDispatch, useSelector } from 'react-redux';
import { startCustomSignIn } from '../../store/auth';
import { useMemo } from 'react';

const formData = {
    displayName: '',
    email: '',
    password: '',
};

const formValidators = {
    displayName: [ validateAlpha, 'Required field, please use only alphabetical characters' ],
    email: [ validateEmail, 'Required field, please check you typed a valid email' ],
    password: [ validatePassword, 'Required field, password must have at least 8 characters' ]
};

export function Register() {
    const dispatch = useDispatch();
    const { status, error } = useSelector( state => state.auth );
    const isChecking = useMemo( () => status === 'checking', [ status ] );
    const { displayName, email, password, form, formValid,
        displayNameValid, emailValid, passwordValid, onInputChange, onReset } = useForm( formData, formValidators );

    const handleSubmit = ( evt ) => {
        evt.preventDefault();
        if( !formValid ) return;
        dispatch( startCustomSignIn( form ) );
    };

    return (
        <AuthLayout title="Create User">
            <form onSubmit={ handleSubmit } className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField label="Name" type="text" placeholder="Name" fullWidth
                        value={ displayName } onChange={ onInputChange } name="displayName"
                        error={ !!displayNameValid } helperText={ displayNameValid } />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField label="Email" type="email" placeholder="correo@google.com" fullWidth
                        value={ email } onChange={ onInputChange } name="email"
                        error={ !!emailValid } helperText={ emailValid } />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 3 } }>
                        <TextField label="Password" type="password" placeholder="password" fullWidth
                        value={ password } onChange={ onInputChange } name="password"
                        error={ !!passwordValid } helperText={ passwordValid } />
                    </Grid>

                    <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>
                        <Grid item xs={ 12 } display={ !!error ? '' : 'none' }>
                            <Alert severity="error">{ error }</Alert>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <Button variant="contained" type="submit" disabled={ !formValid || isChecking } fullWidth>
                                Create Account
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/login">
                            I already have an account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

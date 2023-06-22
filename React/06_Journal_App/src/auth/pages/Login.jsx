import React, { useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { validateEmail, validatePassword } from '../../helpers/validate';
import { startCustomLogin, startGoogleSignIn } from '../../store';

const formData = {
    email: '',
    password: ''
};

const formValidators = {
    email: [ validateEmail, 'Required field, please check you typed a valid email' ],
    password: [ validatePassword, 'Required field, password must have at least 8 characters' ]
};

export function Login() {
    const { status, error } = useSelector( ( state ) => state.auth );
    const dispatch = useDispatch();

    const isChecking = useMemo( () => status === 'checking', [ status ] );

    const { email, password, formValid, emailValid, passwordValid, onInputChange, onReset } = useForm( formData, formValidators );

    const handleSubmit = ( event ) => {
        event.preventDefault();
        dispatch( startCustomLogin( email, password ) );
    };

    const handleGoogleSignIn = () => {
        dispatch( startGoogleSignIn() );
    };

    return (
        <AuthLayout title="Login">
            <form onSubmit={ handleSubmit } className="animate__animated animate__fadeIn animate__faster">
                <Grid container>
                    <Grid item xs={ 12 } sx={ { mt: 2 } }>
                        <TextField label="Email" type="email" placeholder="email@google.com" fullWidth 
                        name="email" value={ email } onChange={ onInputChange }
                        error={ !!emailValid } helperText={ emailValid } />
                    </Grid>

                    <Grid item xs={ 12 } sx={ { mt: 3 } }>
                        <TextField label="Password" type="password" placeholder="password" fullWidth
                        name="password" value={ password } onChange={ onInputChange }
                        error={ !!passwordValid } helperText={ passwordValid } />
                    </Grid>

                    <Grid container spacing={ 2 } sx={ { mb: 2, mt: 1 } }>
                        <Grid item xs={ 12 } display={ error ? '' : 'none' }>
                            <Alert severity="error">{ error }</Alert>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button type="submit" variant="contained" disabled={ isChecking || !formValid } fullWidth>
                                Login
                            </Button>
                        </Grid>

                        <Grid item xs={ 12 } sm={ 6 }>
                            <Button variant="contained" disabled={ isChecking } fullWidth onClick={ handleGoogleSignIn }>
                                <Google /><Typography sx={ { ml: 1 } }>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link component={ RouterLink } color="inherit" to="/auth/register">
                            Create new account
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};

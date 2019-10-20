import React from 'react';
import  PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, auth: {isAuthenticated, loading},  ...rest}) => {

    const redirect = props => {
       
        if(!isAuthenticated && !loading){
            console.log('AUTHENTICATION FAILED. REDIRECTING');
            return <Redirect to='/login' />
        }
        else{
            console.log('AUTHENTICATED.')
            return <Component {...props} />
        }
    }

     return  <Route 
        {...rest} 
        render={props => redirect(props)}
     />;
    }

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);
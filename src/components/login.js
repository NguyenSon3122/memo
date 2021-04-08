import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Login = props => {
    let history = useHistory();

    function handleClick() {
        history.push("/about");
    }
    return (
        <div>
            login
            <div onClick={handleClick}>nn</div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;
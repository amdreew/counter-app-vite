import React from 'react';
import PropTypes from 'prop-types';


const getMessage = () => {
    return 'hola';
}

export const FirstApp = ({name, mail}) => {
    return (
        <>
            {/*
                <code>{JSON.stringify(newMessage)}</code>
            */}
            <h1>{name}</h1>
            <h2>hola FirstApp el correo es = {mail}</h2>
            <h3>mensaje = {getMessage()}</h3>
        </>
    );
};

FirstApp.propTypes = {
    name: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    mail: 'N/A'
}


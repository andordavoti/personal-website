import React from 'react'
import styled from 'styled-components'

const SpinnerOverlay = styled.div`
    height: 40vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #999;
`

const SpinnerContainer = styled.div`
    margin-bottom: 20px;
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 3px solid rgba(195, 195, 195, 0.6);
    border-radius: 50%;
    border-top-color: #636767;
    animation: spin 1s ease-in-out infinite;
    -webkit-animation: spin 1s ease-in-out infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`

const Spinner = WrappedComponent => ({ isLoading, message, ...props }) => {
    return isLoading ? <SpinnerOverlay>
        <SpinnerContainer />
        <span>{message ? message : 'Processing request'} </span>
    </SpinnerOverlay> : <WrappedComponent {...props} />
}

export default Spinner
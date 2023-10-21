import React, { createContext, useContext, useState } from 'react'
import { Provider } from 'react-redux'
import { objStore } from '../Redux/CreateStore'
import CountDispatch from './CountDispatch'
import CountState from './CountState'


function Multi2() {
    return (
        <>
            <Provider store={objStore}>
                <CountDispatch />
                <CountState />
            </Provider>

        </>
    )
}

export default Multi2
import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../modules/loading';

const MainContainer = () => {
    const dispatch = useDispatch();

    // test redux work
    const handleLoadingFalse = () => {
        dispatch(setLoading(false));
    }

    const handleLoadingTrue = () => {
        dispatch(setLoading(true));
    }

    return(
        <>
            <Button onClick={ handleLoadingTrue }>loading true</Button>
            <Button onClick={ handleLoadingFalse }>loading false</Button>
            This is MainContainer!
        </>
    )

}

export default MainContainer;
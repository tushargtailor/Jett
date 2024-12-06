/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { createContext, useCallback, useRef,useMemo,useState } from "react";
import PropTypes from "prop-types";
/**
 * Components
 */
import Snackbar from "../components/Snackbar";

const initialCtxValue = {
    snackbar: {
        open: false,
        message: '',
        type: 'info',
    },
    showSnackbar: ({ message, type = 'info', timeout = 5000}) => {},
    hideSnackbar: () => {},

};

export const SnackbarContext = createContext(initialCtxValue);

const SnackbarProvider = ({ children }) => {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        type: 'info'
    });

    const timeoutRef = useRef();

    const showSnackbar = useCallback(({ message, type = 'info', timeout = 5000 }) => {

        if(timeoutRef.current) clearTimeout(timeoutRef.current);

        setSnackbar({ open: true, message, type });

        timeoutRef.current = setTimeout(() => {
            setSnackbar((prev) => {
                return { ...prev, open: false };
            });
        }, timeout);

    },
    []
);

    const hideSnackbar = useCallback(() => {
        if(timeoutRef.current) clearTimeout(timeoutRef.current);
        setSnackbar({ open: false, message: '', type: 'info' });
    }, []);

    const contextValue = useMemo(() => {
        return { showSnackbar, hideSnackbar }
    }, [showSnackbar,hideSnackbar]);

    return (
        <SnackbarContext.Provider value={contextValue}>
            {children}
            <Snackbar snackbar={snackbar} />
        </SnackbarContext.Provider>
    )
}  

SnackbarProvider.propTypes = {
    children: PropTypes.any,
};

export default SnackbarProvider;
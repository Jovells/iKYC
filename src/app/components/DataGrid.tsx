
import React, { Fragment } from 'react';
import Spinner from './Spinner';
import DataTable, { createTheme } from 'react-data-table-component';

createTheme('solarized', {
    background: {
        default: '#f2f2f2',
    },
    context: {
        background: '#f2f2f2',
        text: '#000',
    },
    divider: {
        default: '#ddd',
    },
}, 'light');
const customStyles = {
    rows: {
        style: {
            minHeight: '72px',
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '20px',
            paddingBottom: '20px',
            fontWeight: "bold",
            fontSize: 14
        },
    },
    cells: {
        style: {
            paddingLeft: '8px',
            paddingRight: '8px',
            paddingTop: '20px',
            paddingBottom: '20px',
        },
    },
};

const DataGrid = (props:any) => {
    return (
        <Fragment>
            <DataTable
                pagination
                theme="solarized"
                customStyles={customStyles}
                highlightOnHover
                pointerOnHover
                dense
                {...props}
                progressComponent={<Spinner />}
            />
        </Fragment>
    );
}

export default DataGrid;
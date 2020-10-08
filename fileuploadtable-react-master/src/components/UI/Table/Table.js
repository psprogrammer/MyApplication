import React from 'react';
import classes from './Table.css';

const RenderRowData = (props) => {
    const filteredData = props.keys.filter((_, index) => index < 4)
    return filteredData.map((key) => (<td key={props.data[key]}>{props.data[key]}</td>))
}

const RenderRow = (props) => {
    return props.data.map((row, index) => (<tr key={index}>
        <RenderRowData key={index} data={row} keys={Object.keys(row)} />
    </tr>)
    )
}

const Table = (props) => {
    return (
        <table className={classes.Table}>
            <thead></thead>
            <tbody>
                {<RenderRow data={props.data} />}
            </tbody>
            <tfoot></tfoot>
        </table>
    )
}

export default Table;


import React from 'react';
const Row = (props) => {
    return (
        <tr >
            <td><a href='#' onClick={() => props.handleDetails(props.id)}>{props.id}</a></td><td>{props.age}</td><td>{props.name}</td>
        </tr>
    );
}
export default Row;

import React from 'react';

const AdditionalInfo = (props) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>gender:</td><td>{props.gender}</td>
            </tr>
            <tr>
            </tr>
            <tr>
                <td>email:</td><td>{props.email}</td>
            </tr>
            <tr>
                <td>phone:</td><td>{props.phone}</td>
            </tr>
            </tbody>
        </table>);
}


export default AdditionalInfo;
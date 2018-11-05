import React, { Component } from 'react';
import './index.css';
import AdditionalInfo from './AdditionalInfo';
import data from './data.json';
import Row from './Row';

class Clients extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ClientsList: data,
            AdditonalDetails: {
                gender: '',
                company: '',
                email: '',
                phone: '',
                address: ''
            }
        }

        this.loadDetails = this.loadDetails.bind(this);
    }

    loadDetails = (id) => {
        let detail = this.state.ClientsList.clients.filter(a => a.id === id);
        this.setState({
            'AdditonalDetails': {
                ...this.state.AdditonalDetails, 'gender': detail[0].additionalInfo.gender,
                'company': detail[0].additionalInfo.company,
                'email': detail[0].additionalInfo.email,
                'phone': detail[0].additionalInfo.phone,
                'address': detail[0].additionalInfo.address
            }
        });
    }

    render() {
        let thisVal = this;
        let rows = this.state.ClientsList.clients.map(function (row, index) {
            return (<Row key={index} id={row.id} age={row.age} name={row.name} handleDetails={thisVal.loadDetails} />);
        });
        return (
            <div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>age</th>
                        <th>name</th>
                    </tr>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <br />
                Additional Information
                <br />
                {
                  this.state.AdditonalDetails.gender != '' ? <AdditionalInfo gender={this.state.AdditonalDetails.gender} phone={this.state.AdditonalDetails.phone} email={this.state.AdditonalDetails.email} /> : ''
                }
            </div>
        );
    }
}
export default Clients;
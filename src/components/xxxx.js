import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class xxxx extends React.Component {

    componentDidMount () {
        this.props.fetchData();
    }

    renderDataRecord = () => {
        return this.props.data.map( (post) => {
            return (
                <div key={ data.id } className="post col s12 m10 offset-m1 l8 offset-l2">
                    { data.id }
                </div>
            )
        });
    }

    render () {
        return (
            <div className="xxxx">
                { this.renderDataRecord() }
            </div>
        );
    };
};

const mstp = (state) => {
    return state;
};

export default connect(mstp, { fetchData })(xxxx);

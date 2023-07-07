import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

export const CustomEditConfig = {

    emptyLabel: 'Custom',

    isEmpty: function(props:any) {
        return !props || !props.message || props.message.trim().length < 1;
    }
};

export default class Custom extends Component {

    props:any;

    render() {
        if(CustomEditConfig.isEmpty(this.props)) {
            return null;
        }


        return (
            <div className="CustomComponent">
                <h2 className="CustomComponent__message">{this.props.message}</h2>
            </div>
        );
    }
}

MapTo('wknd-spa-react/components/custom-component')(Custom, CustomEditConfig);

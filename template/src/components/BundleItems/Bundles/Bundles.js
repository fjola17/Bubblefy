import React from 'react';
import BundleListView from '../BundleListView/BundleListView';
import {apifetch} from '../../../services/ApiFetcher';
class Bundles extends React.Component {
    componentDidMount() {
        apifetch("bundles")
        .then(response => response.json())
        .then(data => this.setState({bundles : data}))
    }
    constructor(){
        super();
        this.state = {
            bundles: []
        }
    }
    render(){
        return(
            <div>
                <BundleListView bundles={this.state.bundles}/>
            </div>
        )
    }
}
export default Bundles;
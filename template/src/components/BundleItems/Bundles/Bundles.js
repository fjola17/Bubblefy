import React from 'react';
import BundleListView from '../BundleListView/BundleListView';

class Bundles extends React.Component {
    componentDidMount() {
        var products = "hfdhad"; //setja inn fall sem tengist server
        this.setState = ({
            bundles : this.state.bundles //breyta þegar tengt er við server
        })
    }
    constructor(){
        super();
        this.state = {
            bundles: [
                {
                    id: 1,
                    name: "Dark Christmas!",
                    items: [ 5, 6 ]
                },
                {
                    id: 2,
                    name: "Triple Bubble!",
                    items: [ 2, 3, 4 ]
                },
                {
                    id: 3,
                    name: "Plain wild!",
                    items: [ 1, 2 ]
                }
            ]
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
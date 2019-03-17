/* Bundle item rechieved with bubbles */
import React from 'react'
import BubbleListViewForBundle from '../../BubbleItems/BubbleListView/BubbleListViewForBundle'
import { apifetch } from '../../../services/ApiFetcher';

class BundleItem extends React.Component {
    componentDidMount() {
        apifetch(`bundles/${this.props.match.params.BundleId}`)
        .then(request => request.json())
        .then(data => this.state.bundle = data)
        .then(() => {
            this.state.bundle.items.map( id => {
                apifetch(`bubbles/${id}`)
                .then(request => request.json())
                .then(data => this.state.items.push(data))
                .then(() => {
                    if(this.state.items.length == this.state.bundle.items.length) {
                        this.setState({items: this.state.items})
                    }
                })
            })
        })
    }

    constructor() {
        super();
        this.state = {
            bundle: {},
            items: []
        }
    }

    render() {
        return(
            <li className="card border-dark mb-3">
                    <h4 className="card-title">{this.state.bundle.name}</h4>
                    <BubbleListViewForBundle items={this.state.items} />
            </li>
        )
    }
}


export default BundleItem;

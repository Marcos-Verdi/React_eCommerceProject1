import React from "react"
import "./index.css"

class Product extends React.Component {
    render() {
        return (
            <div className="col-lg-6">
                <div className="card m-2">
                    <div className="card--body">

                        <div className='text-muted'>
                            id: {this.props.product.id}
                            <span
                                className="pull-right hand-icon"
                                onClick={() => {this.props.onDelete(this.props.product)}}>
                                <i className="fa fa-times"></i>
                            </span>
                        </div>

                        <h5 className="p-5 border-top">{this.props.product.productName}</h5>
                        <div>${this.props.product.price}</div>
                    </div>

                    <div className="card-footer">
                        <div className="float-left">
                            <span className="badge badge-mine">{this.props.product.quantity}</span>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {this.props.onIncrement(this.props.product)}}>+</button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => {this.props.onDecrement(this.props.product)}}>-</button>
                            </div>
                        </div>
                        <div className="float-right">
                            <span><button className="btn btn-primary float-right">BUY NOW</button></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
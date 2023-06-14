import React from "react"
import Product from "./Product"

class ShoppingCart extends React.Component {

   constructor(props) {
      super(props)

      this.state = {
         products: []
     }
   }
    

   handleIncrement = (product) => {
        if (product.quantity < 10) {
            let allProducts = [...this.state.products]
            let index = allProducts.indexOf(product)
            allProducts[index].quantity++
            this.setState({products: allProducts})
        }
   }

   handleDecrement = (product) => {
        if (product.quantity > 0) {
            let allProducts = [...this.state.products]
            let index = allProducts.indexOf(product)
            allProducts[index].quantity--
            this.setState({products: allProducts})
        }
   }

   handleDelete = (product) => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            let allProducts = [...this.state.products]
            let index = allProducts.indexOf(product)
            allProducts.splice(index, 1)
            this.setState({products: allProducts})
        }
   }

   render() {
        return (
            <div>
                <h4>Shopping Cart</h4>
                <div className="row">
                    {this.state.products.map(prod => {
                    return <Product
                                key={prod.id.toString()}
                                product={prod}
                                onIncrement={this.handleIncrement}
                                onDecrement={this.handleDecrement}
                                onDelete={this.handleDelete}>
                            </Product>   
                    })}
                </div>
            </div>
        )    
   }

   componentDidMount() {
      let promise = fetch("http://localhost:5000/products", {method: "GET"})
      promise.then((response) => {
         let promise2 = response.json()
         promise2.then((prods) => {
            this.setState({products: prods})
         })
      })
   }
}


export default ShoppingCart
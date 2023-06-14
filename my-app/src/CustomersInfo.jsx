import React from "react";

class CustomersInfo extends React.Component {

    state = {
        appTitle: "Customers", 
        customerCount: 5,
        customers: [
            {id:1, name:"John Doe", phone:"123-456", photo: "https://picsum.photos/id/1010/60"},
            {id:2, name:"Jane Dawson", phone:"879-523", photo: "https://picsum.photos/id/1010/60"},
            {id:3, name:"Jennifer Diaz", phone:"849-939", photo: "https://picsum.photos/id/1010/60"},
            {id:4, name:"Jonas Dimarco", phone: null, photo: "https://picsum.photos/id/1010/60"},
            {id:5, name:"Julia Dreyfus", phone:"967-412", photo: "https://picsum.photos/id/1010/60"},
        ]
    }

    getPhoneRendered = (phone) => {
      return phone ? phone : "None"
    }

    getTableinfo = (s) => {
      return (
         s.customers.map((customer, index) => {
            return (
                <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td><img src={customer.photo} alt="customer"/></td>
                    <div>
                        <button onClick={() => {this.handleImageChange(customer, index)}}>
                           Change Picture
                        </button>
                    </div>
                    <td>{customer.name}</td>
                    <td>{this.getPhoneRendered(customer.phone)}</td>
                </tr>
            )
        })
      )
    }

    handleImageChange = (customer, index) => {
      var custArray = this.state.customers
      custArray[index].photo = "https://picsum.photos/id/104/60"
      this.setState({customers: custArray})
    }

    render() {
        return (
            <div>
                <h4>{this.state.appTitle}
                    <span className="badge badge-secondary m-2">
                        {this.state.customerCount}
                    </span>
                </h4>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTableinfo(this.state)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CustomersInfo
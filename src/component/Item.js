import React, { Component } from 'react'

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    }
  }
  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ 
      [name]: value
    });
  }
  render() {
    let {index,item} = this.props;
    return (
          <tbody id="my-cart-body">
                    {/* CART BODY */}
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{item.product.productName}</td>
                    <td>{item.product.price} USD</td>
                    <td>
                        <input
                          name="quantity"
                          type="number"
                          defaultValue={item.quantity}
                          min={1}
                          onChange={this.handleChange}
                        />
                      </td>
                      <td>
                        <strong>{item.product.price*item.quantity} USD</strong>
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          href="http://localhost:3000/"
                          data-product=""
                        >
                          Update
                        </a>
                        <a
                          className="label label-danger delete-cart-item"
                          href="http://localhost:3000/"
                          data-product=""
                        >
                          Delete
                        </a>
                      </td>
                </tr>
            </tbody>
    )
  }
}

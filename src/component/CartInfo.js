import React, { Component } from 'react'

export default class CartInfo extends Component {
  calTotalAmout=(cart)=>{
    let totalAmout=0;
    for (let index = 0; index < cart.length; index++) {
      totalAmout+=cart[index].product.price*cart[index].quantity;
    }
    return totalAmout;
  }
  showInfo = (cart)=>{
    let elementInfo = null;
    if(cart.length > 0){
      elementInfo =<tr>
                      <td colSpan={4}>
                      There are <b>{cart.length}</b> items in your shopping cart.
                      </td>
                      <td colSpan={2} className="total-price text-left">
                      {this.calTotalAmout(cart)} USD
                      </td>
                  </tr>
    }else{
      elementInfo =<tr>
                      <th colSpan={6}>Empty product in your cart</th>
                  </tr>
    }
    return elementInfo;
  }
  render() {
    let {cart} = this.props;
    return (
      <div>
          <tfoot id="my-cart-footer">
                    {/* CART FOOTER */}
                    {this.showInfo(cart)}
            </tfoot>
      </div>
    )
  }
}

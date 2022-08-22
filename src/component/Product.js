import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actAddProduct,actChangeNotify} from '../action'
import * as notifies from '../constants/notify';

class Product extends Component {
  constructor(props){
    super(props);
    this.state = { 
      quantity:1
    }
  }
  render() {
    let {product} = this.props;
    return (
      <div>
           <div className="media product">
                  <div className="media-left">
                    <a type = "button">
                      <img
                        className="media-object"
                        src={`images/${product.image}`}
                        alt="charmander"
                      />
                    </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{product.productName}</h4>
                    <p>
                      {product.description}
                    </p>
                    {this.showElementBuy(product)}
                  </div>
                </div>
      </div>
    )
  }
  handleChange = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState(
      {
        [name]: value
      }
    )
  }

  handleClick = (product) => {
    //kiểm tra số lượng mua

    if(this.state.quantity>product.quantity){
      //mua>còn
      this.props.changeNotify(notifies.NOTI_GREATER_QUANTITY)
    }else{
      //Hiển thị thông báo mua hàng thành công
      this.props.changeNotify(notifies.NOTI_ADD_SUCCESS);
      this.props.addProduct(product,this.state.quantity);
    }

  }
  showElementBuy = (product) => {
    //kiểm tra sản phẩm còn số lượng đê bán hay 0
    let elementBuy = null;
    if(product.quantity===0){
      //hết hàng
      elementBuy = <span className="price"> {product.price} USD</span>
    }else{
      //còn hàng
      elementBuy = <div>
                <input
                      name="quantity"
                      type="number"
                      value={this.state.quantity}
                      min={1} onChange={this.handleChange}
                    />
                    <a type="button" data-product={1} className="price" onClick={()=>this.handleClick(product)}>
                      {product.price} USD
                </a>
          </div>
    }
    return elementBuy;
  }
}
const mapStateToProps = (dispatch,ownProps) => {
  return {
    addProduct: (product, quantity)=>{
      dispatch(actAddProduct(product, quantity))
    }, 
    changeNotify: (content)=>{
      dispatch(actChangeNotify(content))
    }
  }
}
export default connect(null, mapStateToProps) (Product)
import {CART_STORAGE} from '../constants/cartStorage'
import * as types from '../constants/actionType'
let initialState = [];
let cartStorage = JSON.parse(localStorage.getItem(CART_STORAGE));
initialState = (cartStorage != null&&cartStorage.length > 0) ? cartStorage : initialState
let checkExistProduct = (cart,product)=>{
    for(let i=0; i<cart.length; i++){
        if(cart[i].product.productId===product.productId){
            //đã có trong giỏ
            return i;
        }
    }
    return -1;
}
const cart =(state=initialState,action)=>{
    switch (action.type) {
        case types.ADD_PRODUCT:
            //lấy product, quantity cần mua trong action
            let {product, quantity} = action;
            //kiểm tra sản phẩm đã có trong giỏ hàng chưa
            let i = checkExistProduct(state,product)
            if ( i > -1) {
                // sản phẩm đã có trong giỏ
                //state[i] --> item : quantity, product
                state[i].quantity +=quantity;
            }else{
                // sản phẩm chưa có trong giỏ
                let item = {product:product, quantity:quantity};
                state.push(item);
            }
            // lưu vào trong storage
            localStorage.setItem(CART_STORAGE,JSON.stringify(state));
            return [...state];
        case types.UPDATE_ITEM:
            return state;
        case types.REMOVE_ITEM:
            return state;
        default:
            return state;
    }
}
export default cart;
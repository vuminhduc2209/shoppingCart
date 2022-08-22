import * as types from "../constants/actionType"
const initialState = [
    {productID: 'P001',
     productName: 'aplusautomation',
     image: 'aplusautomation.jpg'  ,
     description: 'aplusautomation',
     price: 12,
     quantity: 15
},
{productID: 'P002',
     productName: 'aplus media',
     image: 'aplus-media.jpg'  ,
     description: 'aplus media',
     price: 13,
     quantity: 5,
},
{productID: 'P003',
     productName: 'robo fig combo',
     image: 'robo_fig_combo.jpg'  ,
     description: 'robo fig combo',
     price: 12,
     quantity: 15
},
{productID: 'P004',
     productName:  'target leap frog',
     image: 'target-leap-frog.jpg'  ,
     description: 'target leap frog',
     price: 12,
     quantity: 15
},
]
const listProduct = (state=initialState,action) => {
     switch (action.type) {
          case types.LIST_PRODUCT:
               return state;
          default: 
               return state;
     }
}

export default listProduct;
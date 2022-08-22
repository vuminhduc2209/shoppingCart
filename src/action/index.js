import * as types from "../constants/actionType"

export const actAddProduct = (product,quantity) => {
    return({
        type: types.ADD_PRODUCT,
        product,
        quantity
    }) 
}

export const actUpdateItem = (product,quantity) => {
    return({
        type: types.UPDATE_ITEM,
        product,
        quantity
    })
}

export const actRemoveItem = (product) => {
    return({
        type: types.REMOVE_ITEM,
        product
    })
}

export const actChangeNotify = (content) => {
    return ({
        type: types.CHANGE_NOTIFY,
        content
    })
}

export const actListProduct = () => {
    return ({
        type: types.LIST_PRODUCT
    })
}
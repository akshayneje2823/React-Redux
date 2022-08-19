import {ADD_TO_CART} from '../Constant'
export default addToCart = (data) =>{
    return{
        type:ADD_TO_CART,
        data:data
    }
}
import { FAILED_CATEGORY, FAILED_PRODUCT, FETCH_REQUEST_CATEGORY, FETCH_REQUEST_PRODUCT, SUCCESS_CATEGORY, SUCCESS_PRODUCT, UPDATE_CATEGORY } from "./e-com-types"
/// Action for Category
const fetchCategory=()=>{
    return {type:FETCH_REQUEST_CATEGORY}
}

const successCategory=(data)=>{
    return {type:SUCCESS_CATEGORY,payload:data}
}

const failedCategory=(error)=>{
    return {type:FAILED_CATEGORY,payload:error}
}
export const  fetchCategoryRequest=()=>{
    return (dispatch)=>{//we can use dispatch due to thunk middleware
        dispatch(fetchCategory());
        var url='https://dummyjson.com/products/categories';
        var p=fetch(url);
        p.then((response)=>{
            response.json().then(result=>{                
                dispatch(successCategory(result))
            })
        }).catch(err=>{
            dispatch(failedCategory(err))
        })
    }
}

export const updateSelectedCategory=(category)=>{
    return {type:UPDATE_CATEGORY,payload:category}
}

/// Action for Products
export const fetchProduct=()=>{
    return {type:FETCH_REQUEST_PRODUCT}
}

export const successProduct=(data)=>{
    return {type:SUCCESS_PRODUCT,payload:data}
}

export const failedProduct=(error)=>{
    return {type:FAILED_PRODUCT,payload:error}
}
export const  fetchProductRequest=()=>{
    return (dispatch)=>{//we can use dispatch due to thunk middleware
        dispatch(fetchProduct());
        var url='https://dummyjson.com/products?limit=100';
        var p=fetch(url);
        p.then((response)=>{
            response.json().then(result=>{                
                dispatch(successProduct(result.products))
            })
        }).catch(err=>{
            dispatch(failedProduct(err))
        })
    }
}

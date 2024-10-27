
const initialState = {
    products: [
      {
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        freshness: "Doe",
        productPrice: "Doe",
        image: "Doe",
        additionalDescription: "Doe",
      },
    ],
  };

  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.payload],
        };
      
      case 'EDIT_PRODUCT':
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.payload.id ? action.payload : product
          ),
        };
      
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload),
        };
      
      default:
        return state;
    }
  };
  
 
  export const addProduct = (product) => ({
    type: 'ADD_PRODUCT',
    payload: product,
  });
  

  export const editProduct = (product) => ({
    type: 'EDIT_PRODUCT',
    payload: product,
  });
  

  export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    payload: id,
  });
  

  export default productReducer;
  
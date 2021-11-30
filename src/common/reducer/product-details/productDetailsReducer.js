import { Types } from "../../constant/action";
import { ProductEntity, ProductActionEntity } from "../../model";

const intialState: ProductEntity = {
  loading: true,
  payload: {
    result: [],
    alternate: []
  },
  error: ""
};

const ProductDetailsReducer = (
  state: ProductEntity = intialState,
  action: ProductActionEntity
): ProductEntity => {
  switch (action.type) {
    case Types.PRODUCT_DETAILS_LOADING:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    case Types.PRODUCT_DETAILS_FAILURE:
      return {
        loading: action.loading,
        payload: action.payload,
        error: action.error
      };

    default:
      return state;
  }
};

export default ProductDetailsReducer;

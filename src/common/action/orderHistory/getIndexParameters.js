import { Types } from "../../constant/action";


export const indexParameters = (index) => ({
    type: Types.ORDER_HISTORY_INDEX_PARAMETERS_SUCCESS,
    payload: index,
  });
export const GetOrderHistoryIndexParameters= (index) => async (dispatch) => {
    // console.log("index", index)
    dispatch(indexParameters(index));
}
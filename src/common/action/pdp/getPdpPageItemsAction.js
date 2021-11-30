import { Types } from "../../constant/action";
import axios from "axios";
import { REACT_APP_BASE_URL } from "../../constant/env";


import { Constants } from "../../constant/localstorage";

export const getPdpPageItemsLoading = ()  => ({
    type: Types.PDP_PAGE_ITEMS_LOADING,
    loading: true,
    payload:[],
    error: ""
  });
  
export const getPdpPageItemsSuccess = (result) => ({
    type: Types.PDP_PAGE_ITEMS_SUCCESS,
    loading: false,
    payload: [result],
    error: ""
});
export const getPdpPageItemsFailure = (errMsg) => ({
    type: Types.PDP_PAGE_ITEMS_FAILURE,
    loading: false,
    payload: [],
    error: errMsg
  });

export const GetPdpPageItems = (itemCode) => async (dispatch) => {
    dispatch(getPdpPageItemsLoading());

    const headers = {
        "Content-Type":"application/json",
        "X-csquare-api-token":localStorage.getItem(Constants.TOKEN),
        "X-csquare-api-key":localStorage.getItem(Constants.KEY),
      };

    const body={
        "c_item_code":itemCode
    }
    // const body ={
    //     "c_search_term":itemCode,
    //     "n_page":0,
    //     "n_limit":10
    // }

    await axios.post(`${REACT_APP_BASE_URL}/c2/lc/ms/mst/item/pdp`,body,{headers})
    .then(response => {
        
        if(response.data.appStatusCode === 0){
            dispatch(getPdpPageItemsSuccess(response.data.payloadJson.data))
            
          } else {
            dispatch(getPdpPageItemsFailure(response.data.messages[0]))
          }
        })
        .catch(error => {
          dispatch(getPdpPageItemsFailure("Something went wrong, Please try again later!"));
        });
              
    const data  = {
        "c_item_code": "059345",
        "c_item_name": "DOLO 650MG TAB 10`S",
        "j_sub_detail": {
            "c_mfac_code": "M01566",
            "c_mfac_name": "MICRO LAB (GENERAL TASK FORCE-GTF)",
            "c_pack_code": "003",
            "c_pack_name": "10`S",
            "c_cont_code": "P008",
            "c_cont_name": "PARACETAMOL",
            "c_brand_code": "107711",
            "c_brand_name": "DOLO"
        },
        "n_mrp": 30.24,
        "n_gst": "12.00",
        "c_hsn_sac": "30049061",
        "j_general_info": {
            "a_description": [
                "desc1",
                "desc2",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
               
            ],
            "a_highlights": [
                "desc1",
                "desc2",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
               
            ],
            "a_usage": [
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
               "desc2 Side Effect description comes here line 2",
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
               
            ],
            "a_side_effect": [
               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                "desc2 Side Effect description comes here line 2",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                "desc2 Side Effect description comes here line 2",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
                
            ],
            "a_contra_indications": [
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
               
                "desc1",
                "descs2"
            ]
        },
        "j_size_variants": [
            {
                "c_item_code": "059346",
                "c_item_name": "DOLO 650MG TAB",
                "c_pack_code": "004",
                "c_pack_name": "15`S"
            },
            {
                "c_item_code": "612526",
                "c_item_name": "DOLO 650MG TAB 30````S",
                "c_pack_code": "007",
                "c_pack_name": "30`S"
            }
        ],
        "a_image_urls": [
            "https://devloblob.blob.core.windows.net/mslo/firm/45/nn/paracetamol.jpg",
            "https://devloblob.blob.core.windows.net/mslo/firm/45/nn/paracetamol.jpg"
        ],
        "a_thumbnail_urls": [
            "https://devloblob.blob.core.windows.net/mslo/firm/45/nn/paracetamol.jpg",
            "https://devloblob.blob.core.windows.net/mslo/firm/45/nn/paracetamol.jpg",
            "https://devloblob.blob.core.windows.net/mslo/firm/45/nn/paracetamol.jpg",
        
           
        ]
    }
    // dispatch(getPdpPageItemsSuccess(data))
    // here we need to give c_cont_code to alternatives api and fetch their repsonse also 

    
    // axios.get('http://localhost:8906/mst/item/detail/000005')
    //     .then(response => {
    //         console.log(response.data);
    //         dispatch(getPdpPageItemsSuccess(response.data.payloadJson.data))
    //     })
}
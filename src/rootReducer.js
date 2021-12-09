import { combineReducers } from "redux";


import LoginReducer from "./common/reducer/login/loginReducer";
import SendOTPReducer from "./common/reducer/forgotPass/sendOTPReducer";
import ValidateOTPReducer from "./common/reducer/forgotPass/validateOTPReducer";
import SavePassReducer from "./common/reducer/forgotPass/savePassReducer";

import RegisterReducer from "./common/reducer/register/registerReducer";
import VerifyOTPReducer from "./common/reducer/register/verifyOTPReducer";
import RegisterDetailsReducer from "./common/reducer/register/registerDetailsReducer";

import GetProfileInfoReducer from "./common/reducer/profile/getProfileInfoReducer";
import SaveProfileInfoReducer from "./common/reducer/profile/saveProfileInfoReducer";
import ChangePasswordReducer from "./common/reducer/profile/changePassReducer";
import AddUserReducer from "./common/reducer/profile/addUserReducer";
import GetUserListReducer from "./common/reducer/profile/getUserListReducer";
import AddBranchReducer from "./common/reducer/profile/addBranchReducer";
import GetBranchListReducer from "./common/reducer/profile/getBranchListReducer";
import DeleteBranchReducer from "./common/reducer/profile/deleteBranchReducer";
import GetBranchInfoReducer from "./common/reducer/profile/getBranchInfoReducer";
import DeleteUserReducer from "./common/reducer/profile/deleteUserReducer";
import GetUserInfoReducer from "./common/reducer/profile/getUserInfoReducer";
import GetBranchUserListReducer from "./common/reducer/profile/getBranchUserListReducer";
import AddUserToBranchReducer from "./common/reducer/profile/addUserTobranchReducer";

import SearchReducer from "./common/reducer/search/searchReducer";
import ProductDetailsReducer from "./common/reducer/product-details/productDetailsReducer";

import CategoryListsReducer from "./common/reducer/header/categoryListsReducer";
import SearchByProductReducer from "./common/reducer/header/searchByProductReducer";

import SearchBySellerReducer from "./common/reducer/header/searchBySellerReducer";
import SearchByMoleculeReducer from "./common/reducer/header/searchByMoleculeReducer";
import SearchByMfcReducer from "./common/reducer/header/searchByMfcReducer";
import SearchParametersReducer from "./common/reducer/header/searchParametersReducer";
import NotificationCountReducer from "./common/reducer/header/notificationCountReducer";
import ShortbookCountReducer from "./common/reducer/header/shortbookCountReducer";
import WatchlistCountReducer from "./common/reducer/header/watchlistCountReducer";
import CartCountReducer from "./common/reducer/header/cartCountReducer";

import GetNewLaunchesItemsReducer from "./common/reducer/home/getNewLaunchesItemsReducer";
import GetFastMovingItemsReducer from "./common/reducer/home/getFastMovingItemsReducer";
import GetOffersReducer from "./common/reducer/home/getOffersReducer";
import StateListReducer from "./common/reducer/profile/stateListReducer";
import CityListReducer from "./common/reducer/profile/cityListReducer";
import AreaListReducer from "./common/reducer/profile/areaListReducer";
import UploadImgReducer from "./common/reducer/uploadImg/uploadImgReducer";
import SendFeedbackReducer from "./common/reducer/feedback/sendFeedbackReducer";
import GSTListReducer from "./common/reducer/profile/gstListResucer";
import SetDefaultBranchReducer from "./common/reducer/profile/setDefaultBranchReducer";

import GetPdpPageItemsReducer from "./common/reducer/pdp/getPdpPageItemsReducer";
import GetPdpPageSellerDetailsReducer from "./common/reducer/pdp/getPdpPageSellerDetailsReducer";
import GetPdpPageAlternativesReducer from "./common/reducer/pdp/getPdpPageAlternativesReducer";
import SubmitDemoRequestReducer from "./common/reducer/demoRequest/demoRequestReducer";

import OrderHistoryIndexReducer from "./common/reducer/orderHistory/OrderHistoryIndexReducer";
import BannerReducer from './common/reducer/banner/bannerReducer';
import LandingPageReducer from "./common/reducer/landingPage/landingPageReducer";
import FooterSubscribeReducer from "./common/reducer/footer/footerSubscribeReducer"
import ShopByMfcReducer from './common/reducer/home/shopByMfcReducer'
import FreqorderReducer from './common/reducer/freqorder/freqorderReducer'
import GetmanufacturerReducer from './common/reducer/freqorder/getmanufacturerReducer'
import BrandsReducer from './common/reducer/freqorder/brandsReducer'
import SellersReducer from './common/reducer/freqorder/sellersReducer'
import PreferedsellerReducerss from "./common/reducer/home/preferedSellerReducer";
import OrderDetailReducers from './common/reducer/orderdetail/orderdetailreducer';
import AllOrdersReducer from "./common/reducer/orderHistory/AllOrdersReducer";
import GetDistributorReducer from "./common/reducer/orderHistory/getDistributorReducer";
import ValidateREGISTERReducer from "./common/reducer/register/validateREGISTERReducer";
import ProfileDetailsReducer from "./common/reducer/profile/profileDetailsReducer";
import GetPlpPageActionsReducer from "./common/reducer/plp/getPlpPageActionsReducer";
//watchList
import AddWatchlistItemsReducer from "./common/reducer/watchList/addWatchlistItemsReducer";
import RemoveWatchlistItemsReducer from "./common/reducer/watchList/removeWatchlistItemsReducer";
import WatchlistItemsReducer from "./common/reducer/watchList/watchlistItemsReducer";

//Shortbook
import AddShortbookItemsReducer from "./common/reducer/shortBook/addShortbookItemsReducer";
import RemoveShortbookItemsReducer from "./common/reducer/shortBook/removeShortbookItemsReducer";
import ShortbookItemsReducer from "./common/reducer/shortBook/shortbookItemsReducer";
import AddToCartReducer from "./common/reducer/cart/add_to_cart_reducer";
import ImageUploadReducer from "./common/reducer/imageUpload/imageUploadReducer";
import GetCartItemReducer from "./common/reducer/cart/get_cart_item_reducer";
import DeleteBySellerReducer from "./common/reducer/cart/delete_by_seller_reducer";
import DeleteByIdReducer from "./common/reducer/cart/delete_by_id_reducer";
import MoveToShortReducer from "./common/reducer/cart/move_to_short_reducer";
import UpdateCartItemReducer from "./common/reducer/cart/update_cart_item_reducer";
import ImageDeleteReducer from "./common/reducer/imageUpload/imageDeleteReducer";
import RoadBlockModalReducer from "./common/reducer/home/roadBlockModalReducer";
import EditUserReducer from "./common/reducer/profile/editUserReducer";
import GetUnMappedSellerListReducer from "./common/reducer/orderToSeller/getUnMappedSellerListReducer";
import GetGST_TypeReducer from "./common/reducer/getType/getGST_TypeReducer";
import SearchStateReducer from "./common/reducer/orderToSeller/searchStateReducer";
import SearchCityReducer from "./common/reducer/orderToSeller/searchCityReducer";
import SearchAreaReducer from "./common/reducer/orderToSeller/searchAreaReducer";
import SearchUnMappedSellerListReducer from "./common/reducer/orderToSeller/searchUnMappedSellerListReducer";
import GetMappedSellerListReducer from "./common/reducer/orderToSeller/getMappedSellerListReducer";
import SearchMappedSellerListReducer from "./common/reducer/orderToSeller/searchMappedSellerListReducer";
import SetPriorityMappedSellerReducer from "./common/reducer/orderToSeller/setPriorityMappedSellerReducer";


import GST_NumCheckReducer from "./common/reducer/getType/GST_NumCheckReducer";
import PlaceOrderReducer from "./common/reducer/cart/placeOrderReducer";

//Item Mapping
import ItemMasterMapCountReducer from "./common/reducer/itemMapping/itemMasterMapping/itemMasterMapCountReducer";
import ItemMasterMapReducer from "./common/reducer/itemMapping/itemMasterMapping/itemMasterMapReducer";
import MoveOwnItemMasterReducer from "./common/reducer/itemMapping/itemMasterMapping/moveOwnItemMasterReducer";
import MoveOwnAllItemMasterReducer from "./common/reducer/itemMapping/itemMasterMapping/moveOwnAllItemMasterReducer";
import MoveBlockItemMasterReducer from "./common/reducer/itemMapping/itemMasterMapping/moveBlockItemMasterReducer";
import MoveConfirmItemMasterReducer from "./common/reducer/itemMapping/itemMasterMapping/moveConfirmItemMasterReducer";
import DeleteItemMasterReducer from "./common/reducer/itemMapping/itemMasterMapping/deleteItemMasterReducer";

//Item Sub Mapping
import ItemSubMasterMapCountReducer from "./common/reducer/itemMapping/itemSubMasterMapping/itemSubMasterMapCountReducer";
import ItemSubMasterMapReducer from "./common/reducer/itemMapping/itemSubMasterMapping/itemSubMasterMapReducer";
import MoveOwnItemSubMasterReducer from "./common/reducer/itemMapping/itemSubMasterMapping/moveOwnItemSubMasterReducer";
import MoveOwnAllItemSubMasterReducer from "./common/reducer/itemMapping/itemSubMasterMapping/moveOwnAllItemSubMasterReducer";
import MoveBlockItemSubMasterReducer from "./common/reducer/itemMapping/itemSubMasterMapping/moveBlockItemSubMasterReducer";
import MoveConfirmItemSubMasterReducer from "./common/reducer/itemMapping/itemSubMasterMapping/moveConfirmItemSubMasterReducer";
import DeleteItemSubMasterReducer from "./common/reducer/itemMapping/itemSubMasterMapping/deleteItemSubMasterReducer";
import ItemSubMasterSearchReducer from "./common/reducer/itemMapping/itemSubMasterMapping/itemSubMasterSearchReducer";

import OrderCreditLimitReducer from "./common/reducer/cart/order_credit_Limit_Reducer";
import GetSellerInfoReducer from "./common/reducer/orderToSeller/getSellerInfoReducer";
import ScheduleDemoRequestReducer from "./common/reducer/demoRequest/ScheduleDemoRequestReducer";
import GetStateCityAreaReducer from "./common/reducer/profile/getStateCityAreaReducer";
import BarcodeSearchReducer from "./common/reducer/header/barCodeSearchReducer";
import GetBranchListUsersReducer from "./common/reducer/profile/getBranchUserListReducer";
import GetStoreCombineListReducer from "./common/reducer/combineStore/getStoreCombineListReducer";
import CombineStoreReducer from "./common/reducer/combineStore/combineStoreReducer";
import SaveUnCombineStoreReducer from "./common/reducer/combineStore/saveUnCombineStoreReducer";
import UpdateCombineStoreReducer from "./common/reducer/combineStore/updateCombineStoreReducer";
import GetUnMappedCASListReducer from "./common/reducer/orderToSeller/getUnMappedCASListReducer";
import searchByNAProductReducer from "./common/reducer/header/searchByNAProductReducer";
import ScheduleDemoEmailReducer from "./common/reducer/demoRequest/ScheduleDemoEmailReducer";
import GetPdpNAPageItemsReducer from "./common/reducer/pdpNA/getPdpNAPageItemsReducer";
import combineNAStoreReducer from "./common/reducer/combineStore/combineNAStoreReducer";

//Payment Detail
import SellerwisePayoutReducer from "./common/reducer/payment/sellerWisePayoutReducer";
import SellerwisePayPaginationReducer from "./common/reducer/payment/sellerWisePayPaginationReducer";
import SellerPayDetailsReducer from "./common/reducer/payment/sellerPayDetailsReducer";
import SellerPayOrderReducer from "./common/reducer/payment/sellerPayOrderGenarateReducer";

//Site Control
//Banner
import AddBannerReducer from "./common/reducer/sitecontrol/banner/addBannerReducer";
import BannerListPageReducer from "./common/reducer/sitecontrol/banner/bannerListPageReducer";
import BrandListPageReducer from "./common/reducer/sitecontrol/brand/brandListPageReducer";
import BrandListReducer from "./common/reducer/sitecontrol/brand/brandListReducer";

import CategoryListPageReducer from "./common/reducer/sitecontrol/category/categoryListPageReducer";
import CategoryListReducer from "./common/reducer/sitecontrol/category/categoryListReducer";
import CustomerListPageReducer from "./common/reducer/sitecontrol/customer/customerListPageReducer";
import PageListPageReducer from "./common/reducer/sitecontrol/page/pageListPageReducer";
import AddVariationsPageReducer from "./common/reducer/sitecontrol/variations/addVariationsPageReducer";
import VariationsListPageReducer from "./common/reducer/sitecontrol/variations/variationsListPageReducer";
import VariationsAllListPageReducer from "./common/reducer/sitecontrol/variations/variationsAllListPageReducer";

//Brand
import AddBrandReducer from "./common/reducer/sitecontrol/brand/addBrandReducer";

//Category
import AddCategoryReducer from "./common/reducer/sitecontrol/category/addCategoryReducer";

//Page
import AddPageReducer from "./common/reducer/sitecontrol/setting/addPageReducer";

import ItemVariationPageReducer from "./common/reducer/sitecontrol/items/itemVariationPageReducer";
import ItemAddPageReducer from "./common/reducer/sitecontrol/items/itemAddPageReducer";
import ItemListPageReducer from "./common/reducer/sitecontrol/items/itemListPageReducer";

const RootReducer = combineReducers({
  login: LoginReducer,
  sendOTPResult: SendOTPReducer,
  validateOTPResult: ValidateOTPReducer,
  validateREGISTERResult: ValidateREGISTERReducer,
  savePassResult: SavePassReducer,
  register: RegisterReducer,
  verifyOTP: VerifyOTPReducer,
  registerDetails: RegisterDetailsReducer,
  getProfileInfoResult: GetProfileInfoReducer,

  saveProfileInfo:SaveProfileInfoReducer,
  changePasswordResult: ChangePasswordReducer,
  addUserResult: AddUserReducer,
  editUserResult: EditUserReducer,
  userListResult: GetUserListReducer,
  addBranchResult: AddBranchReducer,
  branchListResult: GetBranchListReducer,
  deleteBranchResult: DeleteBranchReducer,
  branchInfoResult: GetBranchInfoReducer,
  deleteUserResult: DeleteUserReducer,
  userInfoResult: GetUserInfoReducer,
  search: SearchReducer,
  productDetails: ProductDetailsReducer,
  CategoryListsResult: CategoryListsReducer,
  searchByProductResult: SearchByProductReducer,
  searchByNAProductResult: searchByNAProductReducer,
  searchBySellerResult: SearchBySellerReducer,
  searchByMoleculeResult: SearchByMoleculeReducer,
  searchByMfcResult: SearchByMfcReducer,
  searchParametersResult: SearchParametersReducer,
  newLaunchesItemsResult:GetNewLaunchesItemsReducer,
  fastMovingItemsResult:GetFastMovingItemsReducer,
  stateListResult:StateListReducer,
  cityListResult:CityListReducer,
  areaListResult:AreaListReducer,
  uploadImgResult: UploadImgReducer,
  sendFeedbackResult: SendFeedbackReducer,
  gstListResult: GSTListReducer,
  defaultBranchResult: SetDefaultBranchReducer,
  pdpPageItemsResult: GetPdpPageItemsReducer,
  pdpNAPageItemsResult: GetPdpNAPageItemsReducer,
  pdpPageSellerDetailsResult: GetPdpPageSellerDetailsReducer,
  branchUserListResult: GetBranchUserListReducer,
  addUserToBranchResult: AddUserToBranchReducer,
  pdpPageAlternativesResult: GetPdpPageAlternativesReducer,
  demoRequestResult:SubmitDemoRequestReducer,
  scheduledemoRequestResult:ScheduleDemoRequestReducer,
  scheduleDemoEmailResult:ScheduleDemoEmailReducer,
  orderHistoryIndexResult: OrderHistoryIndexReducer,
  bannerResponse : BannerReducer,
  landingPageResult:LandingPageReducer,
  footerSubscribeResult:FooterSubscribeReducer,
  shophByMfcResult:ShopByMfcReducer,
  preferedSellerResult : PreferedsellerReducerss,
  offersResult:GetOffersReducer,
  allOrdersResult:AllOrdersReducer,
  distributorResult:GetDistributorReducer,
  freqorderResponse : FreqorderReducer,
  getmanufacturerResponse : GetmanufacturerReducer,
  brandsResponse : BrandsReducer,
  sellersResponse : SellersReducer,
  OrderDetailResult : OrderDetailReducers,
  orderCreditLimitResult : OrderCreditLimitReducer,
  profileDetailsResult: ProfileDetailsReducer,
  plpPageAtionsResult: GetPlpPageActionsReducer,
  addWatchlistResult: AddWatchlistItemsReducer,
  removeWatchlistResult: RemoveWatchlistItemsReducer,
  watchlistItemsResult: WatchlistItemsReducer,
  addShortbookResult: AddShortbookItemsReducer,
  removeShortbookResult: RemoveShortbookItemsReducer,
  shortbookItemsResult: ShortbookItemsReducer,
  notificationCountRes: NotificationCountReducer,
  shortbookCountRes: ShortbookCountReducer,
  watchlistCountRes: WatchlistCountReducer,
  cartCountRes: CartCountReducer,
  addToCartResult: AddToCartReducer,
  getCartItemResult: GetCartItemReducer,
  deleteBySellerResult: DeleteBySellerReducer,
  deleteByIdResult: DeleteByIdReducer,
  moveToShortResult: MoveToShortReducer,
  moveToShortResult: MoveToShortReducer,
  updateCartItemResult: UpdateCartItemReducer,
  imageUploadResult:ImageUploadReducer,
  imageDeleteResult:ImageDeleteReducer,
  roadBlockModalResult:RoadBlockModalReducer,
  getMappedSellerListResult:GetMappedSellerListReducer,
  getSellerInfoResult:GetSellerInfoReducer,
  getUnMappedSellerListResult:GetUnMappedSellerListReducer,
  getUnMappedCASListResult:GetUnMappedCASListReducer,
  searchUnMappedSellerListResult:SearchUnMappedSellerListReducer,
  searchMappedSellerListResult:SearchMappedSellerListReducer,
  setPriorityMappedSellerResult:SetPriorityMappedSellerReducer,
  getGST_TypeResult:GetGST_TypeReducer,
  gST_NumCheckResult:GST_NumCheckReducer,
  searchStateResult:SearchStateReducer,
  searchCityResult:SearchCityReducer,
  searchAreaResult:SearchAreaReducer,
  placeOrderResult:PlaceOrderReducer,
  getStateCityAreaResult:GetStateCityAreaReducer,
  itemMasterMapCountResult:ItemMasterMapCountReducer,
  itemMasterMapResult:ItemMasterMapReducer,
  ownItemMasterMapResult:MoveOwnItemMasterReducer,
  ownAllItemMasterMapResult:MoveOwnAllItemMasterReducer,
  blockItemMasterMapResult:MoveBlockItemMasterReducer,
  confirmItemMasterMapResult:MoveConfirmItemMasterReducer,
  barcodeSearchResult:BarcodeSearchReducer,
  getBranchListUsersResult:GetBranchListUsersReducer,
  deleteItemMasterMapResult:DeleteItemMasterReducer,

  getStoreCombineListResult:GetStoreCombineListReducer,
  combineStoreResult:CombineStoreReducer,
  combineNaStoreResult:combineNAStoreReducer,
  saveUnCombineStoreResult:SaveUnCombineStoreReducer,
  updateCombineStoreResult:UpdateCombineStoreReducer,
  itemSubMasterMapCountResult:ItemSubMasterMapCountReducer,
  itemSubMasterMapResult:ItemSubMasterMapReducer,
  ownItemSubMasterMapResult:MoveOwnItemSubMasterReducer,
  ownAllItemSubMasterMapResult:MoveOwnAllItemSubMasterReducer,
  blockItemSubMasterMapResult:MoveBlockItemSubMasterReducer,
  confirmItemSubMasterMapResult:MoveConfirmItemSubMasterReducer,
  deleteItemSubMasterMapResult:DeleteItemSubMasterReducer,
  itemSubMasterSearchResult:ItemSubMasterSearchReducer,
  sellerwisePayoutResult:SellerwisePayoutReducer,
  sellerwisePayPaginationResult:SellerwisePayPaginationReducer,
  sellerPayDetailsResult:SellerPayDetailsReducer,
  sellerPayOrderResult:SellerPayOrderReducer,


//Site Control
//Banner
  addBannerResult:AddBannerReducer,
  bannerListPageResult:BannerListPageReducer,
  brandListPageResult:BrandListPageReducer,
  brandListResult:BrandListReducer,
  categoryListPageResult:CategoryListPageReducer,
  categoryListResult:CategoryListReducer,
  customerListPageResult:CustomerListPageReducer,
  pageListPageResult:PageListPageReducer,
  addVariationsPageResult:AddVariationsPageReducer,
  variationsListPageResult:VariationsListPageReducer,
  variationsAllListResult:VariationsAllListPageReducer,
//Brand
  addBrandResult:AddBrandReducer,
//Category
  addCategoryResult:AddCategoryReducer,
//Page
addPageResult:AddPageReducer,
itemVariationPageResult:ItemVariationPageReducer,
itemAddPageResult:ItemAddPageReducer,
itemListPageResult:ItemListPageReducer,
});

export default RootReducer;
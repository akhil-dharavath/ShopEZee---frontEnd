import { createSelector } from "reselect";
import { defaultTo, prop } from "ramda";
import { PRODUCTS_ACTION as ACTIONS } from "../actions";
import { LOGIN_ACTIONS } from "../actions";

import { getProductsApi } from "../../api/productManagement";
import { getOneProductApi } from "../../api/productManagement";
import { authUserApi } from "../../api/userAuthentication";
import { getCartApi } from "../../api/shoppingCart";
import { addToCartApi } from "../../api/shoppingCart";
import { removeFromCartApi } from "../../api/shoppingCart";
import { userOrdersApi } from "../../api/orderManagement";
import { deleteAccountApi } from "../../api/userProfileManagement";
import { addProductApi } from "../../api/adminFeatures";
import { getCategoryApi } from "../../api/categoryAndSearch";
import { placeOrderApi } from "../../api/orderManagement";
import { getOrdersApi } from "../../api/adminFeatures";
import { contactUsApi } from "../../api/contactUs";
import { postReviewApi } from "../../api/reviewsAndRatings";
import { getReviewsApi } from "../../api/reviewsAndRatings";
import { getUserApi } from "../../api/userProfileManagement";

const initialState = {
  products: [],
  productsLoading: false,
  productsFailureMessage: {},

  product: {},
  productLoading: false,
  productFailureMessage: {},

  loginData: "",
  loginLoading: false,
  loginFailureMessage: "",

  cart: [],
  cartLoading: false,
  cartFailureMessage: {},

  addToCart: {},
  addToCartLoading: false,
  addToCartFailureMessage: {},

  removeFromCart: {},
  removeFromCartLoading: false,
  removeFromCartFailureMessage: {},

  addCategory: {},
  addCategoryLoading: false,
  addCategoryFailureMessage: {},

  deleteAccount: {},
  deleteAccountLoading: false,
  deleteAccountFailureMessage: {},

  addProduct: {},
  addProductLoading: false,
  addProductFailureMessage: {},

  placeOrder: {},
  placeOrderLoading: false,
  placeOrderFailureMessage: {},

  Orders: {},
  OrdersLoading: false,
  OrdersFailureMessage: {},

  userOrders: {},
  userOrdersLoading: false,
  userOrdersFailureMessage: {},

  category: [],
  categoryLoading: false,
  categoryFailureMessage: {},

  searchCategory: "",

  contactUs: [],
  contactUsLoading: false,
  contactUsFailureMessage: {},

  postReview: [],
  postReviewLoading: false,
  postReviewFailureMessage: {},

  getUser: [],
  getUserLoading: false,
  getUserFailureMessage: {},

  updateUser: [],
  updateUserLoading: false,
  updateUserFailureMessage: {},

  reviews: [],
  reviewsLoading: false,
  reviewsFailureMessage: {},
};

const getSlice = prop("home");

export const getProducts = createSelector(getSlice, prop("products"));
export const getProductsLoading = createSelector(
  getSlice,
  prop("productsLoading")
);
export const getProductsFailure = createSelector(
  getSlice,
  prop("productsFailureMessage")
);
export const getOneProduct = createSelector(getSlice, prop("product"));
export const getOneProductLoading = createSelector(
  getSlice,
  prop("productLoading")
);
export const getOneProductFailure = createSelector(
  getSlice,
  prop("productFailureMessage")
);
export const getLogin = createSelector(getSlice, prop("loginData"));
export const getLoginLoading = createSelector(getSlice, prop("loginLoading"));
export const getLoginFailure = createSelector(
  getSlice,
  prop("loginFailureMessage")
);
export const getCart = createSelector(getSlice, prop("cart"));

export const getAddToCart = createSelector(getSlice, prop("addToCart"));
export const getAddToCartFailure = createSelector(
  getSlice,
  prop("addToCartFailureMessage")
);

export const getRemoveFromCart = createSelector(
  getSlice,
  prop("removeFromCart")
);
export const getRemoveFromCartFailure = createSelector(
  getSlice,
  prop("removeFromCartFailureMessage")
);
export const getCategories = createSelector(getSlice, prop("category"));
export const getReviews = createSelector(getSlice, prop("reviews"));
export const getorders = createSelector(getSlice, prop("Orders"));
export const getUserDetails = createSelector(getSlice, prop("getUser"));
export const getUserOrders = createSelector(getSlice, prop("userOrders"));

export const getPostReview = createSelector(
  getSlice,
  prop("postReview")
);
export const getPostReviewFailure = createSelector(
  getSlice,
  prop("postReviewFailureMessage")
);

export const getSearchCategory = createSelector(
  getSlice,
  prop("searchCategory")
);

export const setLogin = (value) => (dispatch) => {
  dispatch({
    type: LOGIN_ACTIONS.SET_LOGIN,
    loginData: defaultTo("", value),
  });
};
export const setSearchCategory = (value) => (dispatch) => {
  dispatch({
    type: ACTIONS.SET_SEARCH_CATEGORY,
    searchCategory: defaultTo("", value),
  });
};

export const fetchProducts = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.GET_PRODUCTS_REQUEST,
  });
  try {
    const productsData = await getProductsApi();
    dispatch({
      type: ACTIONS.GET_PRODUCTS_SUCCESS,
      productsData,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_PRODUCTS_FAILED,
      error: error,
    });
  }
};

export const fetchOneProduct = (id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.GET_ONE_PRODUCT_REQUEST,
  });
  try {
    const productData = await getOneProductApi(id);
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT_SUCCESS,
      productData,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_ONE_PRODUCT_FAILED,
      error: error,
    });
  }
};

export const handleLogin = (data, address) => async (dispatch) => {
  dispatch({
    type: LOGIN_ACTIONS.LOGIN_REQUEST,
  });
  const loginData = await authUserApi(data, address);
  try {
    dispatch({
      type: LOGIN_ACTIONS.LOGIN_SUCCESS,
      loginData: loginData.data.token,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ACTIONS.LOGIN_FAILED,
      error: loginData,
    });
  }
};

export const fetchCart = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.CART_REQUEST,
  });
  try {
    const cartData = await getCartApi();
    dispatch({
      type: ACTIONS.CART_SUCCESS,
      cartData,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.CART_FAILED,
      error: error,
    });
  }
};

export const handleAddToCart = (id, quantity) => async (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_TO_CART_REQUEST,
  });
  try {
    const response = await addToCartApi(id, quantity);
    dispatch({
      type: ACTIONS.ADD_TO_CART_SUCCESS,
      data: response.data,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.ADD_TO_CART_FAILED,
      error: error,
    });
  }
};

export const handleRemoveFromCart = (id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.REMOVE_FROM_CART_REQUEST,
  });
  try {
    const data = await removeFromCartApi(id);
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART_SUCCESS,
      data,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.REMOVE_FROM_CART_FAILED,
      error: error,
    });
  }
};

export const handleDeleteAccount = (id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.DELETE_ACCOUNT_REQUEST,
  });
  try {
    const response = await deleteAccountApi(id);
    dispatch({
      type: ACTIONS.DELETE_ACCOUNT_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.DELETE_ACCOUNT_FAILED,
      error: error,
    });
  }
};

export const handleAddProduct = (data, categories) => async (dispatch) => {
  dispatch({
    type: ACTIONS.ADD_PRODUCT_REQUEST,
  });
  try {
    const response = await addProductApi(data, categories);
    dispatch({
      type: ACTIONS.ADD_PRODUCT_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.ADD_PRODUCT_FAILED,
      error: error,
    });
  }
};

export const handlePlaceOrder = (qty, id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.PLACE_ORDER_REQUEST,
  });
  try {
    const response = await placeOrderApi(qty, id);
    dispatch({
      type: ACTIONS.PLACE_ORDER_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.PLACE_ORDER_SUCCESS,
      error: error,
    });
  }
};

export const handleGetOrders = (qty, id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.GET_ORDER_REQUEST,
  });
  try {
    const response = await getOrdersApi(qty, id);
    dispatch({
      type: ACTIONS.GET_ORDER_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_ORDER_FAILED,
      error: error,
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.GET_CATEGORY_REQUEST,
  });
  try {
    const response = await getCategoryApi();
    dispatch({
      type: ACTIONS.GET_CATEGORY_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_CATEGORY_FAILED,
      error: error,
    });
  }
};

export const handleContactUs = (data) => async (dispatch) => {
  dispatch({
    type: ACTIONS.CONTACT_US_REQUEST,
  });
  try {
    const response = await contactUsApi(data);
    dispatch({
      type: ACTIONS.CONTACT_US_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.CONTACT_US_FAILED,
      error: error,
    });
  }
};

export const handlePostReview = (data, id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.POST_REVIEW_REQUEST,
  });
  try {
    const response = await postReviewApi(data, id);
    dispatch({
      type: ACTIONS.POST_REVIEW_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.POST_REVIEW_FAILED,
      error: error,
    });
  }
};

export const handleGetUser = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.GET_USER_REQUEST,
  });
  try {
    const response = await getUserApi();
    dispatch({
      type: ACTIONS.GET_USER_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_USER_FAILED,
      error: error,
    });
  }
};

export const handleGetReviews = (id) => async (dispatch) => {
  dispatch({
    type: ACTIONS.GET_REVIEWS_REQUEST,
  });
  try {
    const response = await getReviewsApi(id);
    dispatch({
      type: ACTIONS.GET_REVIEWS_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.GET_REVIEWS_FAILED,
      error: error,
    });
  }
};

export const fetchUserOrders = () => async (dispatch) => {
  dispatch({
    type: ACTIONS.USER_ORDERS_REQUEST,
  });
  try {
    const response = await userOrdersApi();
    dispatch({
      type: ACTIONS.USER_ORDERS_SUCCESS,
      data: response,
    });
  } catch (error) {
    dispatch({
      type: ACTIONS.USER_ORDERS_FAILED,
      error: error,
    });
  }
};

const homeRuducer = (state = initialState, { type, ...action } = {}) => {
  switch (type) {
    case ACTIONS.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        productsLoading: true,
      };
    }
    case ACTIONS.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.productsData,
        productsLoading: false,
      };
    case ACTIONS.GET_PRODUCTS_FAILED: {
      return {
        ...state,
        error: action.error,
        productsLoading: false,
      };
    }

    case ACTIONS.GET_ONE_PRODUCT_REQUEST: {
      return {
        ...state,
        productLoading: true,
      };
    }
    case ACTIONS.GET_ONE_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.productData,
        productLoading: false,
      };
    case ACTIONS.GET_ONE_PRODUCT_FAILED: {
      return {
        ...state,
        error: action.error,
        productsLoading: false,
        productFailureMessage: action.error,
      };
    }

    case LOGIN_ACTIONS.LOGIN_REQUEST: {
      return {
        ...state,
        loginLoading: true,
      };
    }
    case LOGIN_ACTIONS.LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.loginData,
        loginLoading: false,
        loginFailureMessage: "",
      };
    case LOGIN_ACTIONS.LOGIN_FAILED: {
      return {
        ...state,
        error: action.error,
        loginLoading: false,
        loginFailureMessage: action.error,
      };
    }

    case ACTIONS.CART_REQUEST: {
      return {
        ...state,
        cartLoading: true,
      };
    }
    case ACTIONS.CART_SUCCESS:
      return {
        ...state,
        cart: action.cartData,
        cartLoading: false,
      };
    case ACTIONS.CART_FAILED: {
      return {
        ...state,
        error: action.error,
        cartLoading: false,
        cartFailureMessage: action.error,
      };
    }

    case ACTIONS.ADD_TO_CART_REQUEST: {
      return {
        ...state,
        addToCartLoading: true,
      };
    }
    case ACTIONS.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        addToCart: action.data,
        addToCartLoading: false,
        addToCartFailureMessage: {},
      };
    case ACTIONS.ADD_TO_CART_FAILED: {
      return {
        ...state,
        addToCartLoading: false,
        addToCartFailureMessage: action.error,
      };
    }

    case ACTIONS.REMOVE_FROM_CART_REQUEST: {
      return {
        ...state,
        removeFromCartLoading: true,
      };
    }
    case ACTIONS.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        removeFromCart: action.data,
        removeFromCartLoading: false,
        removeFromCartFailureMessage: {},
      };
    case ACTIONS.REMOVE_FROM_CART_FAILED: {
      return {
        ...state,
        removeFromCartLoading: false,
        removeFromCart: {},
        removeFromCartFailureMessage: action.error,
      };
    }

    case ACTIONS.DELETE_ACCOUNT_REQUEST: {
      return {
        ...state,
        deleteAccountLoading: true,
      };
    }
    case ACTIONS.DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        deleteAccount: action.data,
        deleteAccountLoading: false,
      };
    case ACTIONS.DELETE_ACCOUNT_FAILED: {
      return {
        ...state,
        deleteAccountLoading: false,
        deleteAccountFailureMessage: action.error,
      };
    }

    case ACTIONS.ADD_PRODUCT_REQUEST: {
      return {
        ...state,
        addProductLoading: true,
      };
    }
    case ACTIONS.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: action.data,
        addProductLoading: false,
      };
    case ACTIONS.ADD_PRODUCT_FAILED: {
      return {
        ...state,
        addProductLoading: false,
        addProductFailureMessage: action.error,
      };
    }

    case ACTIONS.PLACE_ORDER_REQUEST: {
      return {
        ...state,
        placeOrderLoading: true,
      };
    }
    case ACTIONS.PLACE_ORDER_SUCCESS:
      return {
        ...state,
        placeOrder: action.data,
        placeOrderLoading: false,
      };
    case ACTIONS.PLACE_ORDER_FAILED: {
      return {
        ...state,
        placeOrderLoading: false,
        placeOrderFailureMessage: action.error,
      };
    }

    case ACTIONS.GET_ORDER_REQUEST: {
      return {
        ...state,
        OrdersLoading: true,
      };
    }
    case ACTIONS.GET_ORDER_SUCCESS:
      return {
        ...state,
        Orders: action.data,
        OrdersLoading: false,
      };
    case ACTIONS.GET_ORDER_FAILED: {
      return {
        ...state,
        OrdersLoading: false,
        OrdersFailureMessage: action.error,
      };
    }

    case ACTIONS.GET_CATEGORY_REQUEST: {
      return {
        ...state,
        categoryLoading: true,
      };
    }
    case ACTIONS.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.data,
        categoryLoading: false,
      };
    case ACTIONS.GET_CATEGORY_FAILED: {
      return {
        ...state,
        categoryLoading: false,
        categoryFailureMessage: action.error,
      };
    }

    case ACTIONS.CONTACT_US_REQUEST: {
      return {
        ...state,
        contactUsLoading: true,
      };
    }
    case ACTIONS.CONTACT_US_SUCCESS:
      return {
        ...state,
        contactUs: action.data,
        contactUsLoading: false,
      };
    case ACTIONS.CONTACT_US_FAILED: {
      return {
        ...state,
        contactUsLoading: false,
        contactUsFailureMessage: action.error,
      };
    }

    case ACTIONS.POST_REVIEW_REQUEST: {
      return {
        ...state,
        postReviewLoading: true,
      };
    }
    case ACTIONS.POST_REVIEW_SUCCESS:
      return {
        ...state,
        postReview: action.data,
        postReviewLoading: false,
        postReviewFailureMessage: {},
      };
    case ACTIONS.POST_REVIEW_FAILED: {
      return {
        ...state,
        postReviewLoading: false,
        postReviewFailureMessage: action.error,
      };
    }

    case ACTIONS.GET_REVIEWS_REQUEST: {
      return {
        ...state,
        reviewsLoading: true,
      };
    }
    case ACTIONS.GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.data,
        reviewsLoading: false,
      };
    case ACTIONS.GET_REVIEWS_FAILED: {
      return {
        ...state,
        reviewsLoading: false,
        reviewsFailureMessage: action.error,
      };
    }

    case ACTIONS.GET_USER_REQUEST: {
      return {
        ...state,
        getUserLoading: true,
      };
    }
    case ACTIONS.GET_USER_SUCCESS:
      return {
        ...state,
        getUser: action.data,
        getUserLoading: false,
      };
    case ACTIONS.GET_USER_FAILED: {
      return {
        ...state,
        getUserLoading: false,
        getUserFailureMessage: action.error,
      };
    }

    case ACTIONS.USER_ORDERS_REQUEST: {
      return {
        ...state,
        userOrdersLoading: true,
      };
    }
    case ACTIONS.USER_ORDERS_SUCCESS:
      return {
        ...state,
        userOrders: action.data,
        userOrdersLoading: false,
      };
    case ACTIONS.USER_ORDERS_FAILED: {
      return {
        ...state,
        updateUserLoading: false,
        updateUserFailureMessage: action.error,
      };
    }

    case LOGIN_ACTIONS.SET_LOGIN: {
      return {
        ...state,
        error: action.error,
        loginLoading: false,
      };
    }

    case ACTIONS.SET_SEARCH_CATEGORY: {
      return {
        ...state,
        searchCategory: action.searchCategory,
      };
    }
    default:
      return initialState;
  }
};

export default homeRuducer;

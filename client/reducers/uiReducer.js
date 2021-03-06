import * as types from '../constants/ActionTypes';

export default (state = {
  isAuthenticating: false,
  ManageListings: {
    viewManagedListing: false,
    viewAddNewListingForm: false
  },
  isAttemptingToAdd: false,
  popup: {
    content: '',
    open: false,
    type: ''
  },
  location: {
    lat: 27.28,
    lng: 153.1
  }
}, action) => {
  switch (action.type) {
    case types.SETMAPCENTER:
    return {
      ...state,
      location: {
        ...state.location,
        lat: action.payload.lat,
        lng: action.payload.lng
      }
    };
    case types.SETMARKERCENTER:
    return {
      ...state,
      location: {
        ...state.location,
        marker: {
          lat: action.payload.lat,
          lng: action.payload.lng
        }
      }
    };
    case types.ADDLISTING_SUCCESS:
    return {
      ...state,
      isAttemptingToAdd: false
    };
    case types.ADDLISTING_FAILURE:
    return {
      ...state,
      isAttemptingToAdd: false
    };
    case types.RENT_SUCCESS:
    return {
      ...state,
      popup: {
        content: 'Rent Success',
        open: true
      }
    };
    case types.POPUP_CLOSE:
    return {
      ...state,
      popup: {
        content: '',
        open: false,
        type: ''
      }
    };
    case types.POPUP_OPEN:
    return {
      ...state,
      popup: {
        content: action.payload.content,
        open: true,
        type: action.payload.type
      }
    };
    // update pending list for UI state tree
    case types.UI_TOGGLE_VIEW_MANAGEDLISTING:
    return {
      ...state,
      ManageListings: {
        ...state.ManageListings,
        viewManagedListing: !state.ManageListings.viewManagedListing
      }
    };
    case types.UI_TOGGLE_VIEW_ADDNEWLISTINGFORM:
    return {
      ...state,
      ManageListings: {
        ...state.ManageListings,
        viewAddNewListingForm: !state.ManageListings.viewAddNewListingForm
      }
    };
    default:
    return state;
  };
};

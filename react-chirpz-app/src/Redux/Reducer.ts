import {
  Get_Data_Request,
  Get_Data_Success,
  Post_Data_Success,
} from "./ActionTypes";

interface ChirpzState {
  isLoading: boolean;
  isError: boolean;
  chirpzData: any;
}

const initialState: ChirpzState = {
  isLoading: false,
  isError: false,
  chirpzData: {},
};

const Reducer = (state: ChirpzState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case Get_Data_Request:
      return {
        ...state,
        isLoading: true,
      };

    case Get_Data_Success:
      return {
        ...state,
        isLoading: false,
        isError: false,
        chirpzData: payload,
      };

    case Post_Data_Success:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export { Reducer };

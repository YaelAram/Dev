import { AUTO_LANG } from "../interfaces/Lang";
import {
  ActionType,
  type TranlatorAction,
  type TranslatorState,
} from "../interfaces";

export const initialState: TranslatorState = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  translation: "",
  isLoading: false,
};

export const translatorReducer = (
  state: TranslatorState,
  action: TranlatorAction
): TranslatorState => {
  switch (action.type) {
    case ActionType.SWAP_LANG: {
      if (state.fromLanguage === AUTO_LANG) return state;
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      };
    }
    case ActionType.SET_FROM_LANG: {
      return {
        ...state,
        fromLanguage: action.payload,
      };
    }
    case ActionType.SET_TO_LANG: {
      return {
        ...state,
        toLanguage: action.payload,
      };
    }
    case ActionType.SET_FROM_TEXT: {
      return {
        ...state,
        fromText: action.payload,
        isLoading: true,
        translation: "",
      };
    }
    case ActionType.SET_TRANSLATION: {
      return {
        ...state,
        isLoading: false,
        translation: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

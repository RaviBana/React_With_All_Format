import { all } from "redux-saga/effects";
import currencySaga from "./../Currency/saga";

export default function* rootSagas() {
  yield all([currencySaga()]);
}
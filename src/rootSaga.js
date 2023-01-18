import { all } from "redux-saga/effects";
import { portfolioSaga } from "./features/homepage/Portfolio/portfolioSaga";

export default function* rootSaga() {
  yield all([portfolioSaga()]);
}

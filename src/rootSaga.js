import { all } from "redux-saga/effects";
import { watchFetchPortfolio } from "./features/homepage/Portfolio/portfolioSaga";

export default function* rootSaga() {
  yield all([watchFetchPortfolio()]);
}

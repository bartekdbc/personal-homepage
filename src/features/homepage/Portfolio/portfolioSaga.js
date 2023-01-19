import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPortfolio } from "./getPortfolio";
import { githubAPIUrl, username } from "./githubData";
import {
  fetchPortfolio,
  fetchPortfolioError,
  fetchPortfolioSuccess,
} from "./portfolioSlice";

function* fetchPortfolioHandler() {
  try {
    yield delay(1000);
    const portfolio = yield call(getPortfolio, githubAPIUrl(username));
    yield put(fetchPortfolioSuccess(portfolio));
  } catch (error) {
    yield put(fetchPortfolioError());
  }
}

export function* watchFetchPortfolio() {
  yield takeLatest(fetchPortfolio.type, fetchPortfolioHandler);
}

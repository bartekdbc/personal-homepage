import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    portfolioList: [],
    portfolioState: "initial",
  },
  reducers: {
    fetchPortfolio: (state) => {
      state.portfolioState = "loading";
    },
    fetchPortfolioSuccess: (state, { payload }) => {
      state.portfolioState = "success";
      state.portfolioList = payload;
    },
    fetchPortfolioError: (state) => {
      state.portfolioState = "error";
    },
  },
});

export const { fetchPortfolio, fetchPortfolioSuccess, fetchPortfolioError } =
  portfolioSlice.actions;

export const selectPortfolio = (state) => state.portfolio;

export const selectPortfolioState = (state) => state.portfolioState;
export const selectPortfolioList = (state) => state.portfolioList;

export const portfolioReducer = portfolioSlice.reducer;

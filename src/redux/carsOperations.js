import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65030b0ea0f2c1f3faeb565c.mockapi.io";
const LIMIT = 8;

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?limit=${LIMIT}&page=1`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchLoadMoreCars = createAsyncThunk(
  "cars/fetchLoadMoreCars",
  async (currentPage, thunkAPI) => {
    try {
      const response = await axios.get(
        `/adverts?limit=${LIMIT}&page=${currentPage}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://65030b0ea0f2c1f3faeb565c.mockapi.io";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/adverts?limit=8&page=1");
      console.log(response.data);

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
      const response = await axios.get(`/adverts?limit=8&page=${currentPage}`);
      console.log(response.data);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

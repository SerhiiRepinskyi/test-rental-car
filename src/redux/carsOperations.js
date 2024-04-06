import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Notify } from "notiflix/build/notiflix-notify-aio";

axios.defaults.baseURL = "https://65030b0ea0f2c1f3faeb565c.mockapi.io";
const LIMIT = 12;

export const fetchLimitCars = createAsyncThunk(
  "cars/fetchLimitCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?limit=${LIMIT}&page=1`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Отримання даних про всі cars для відображення в dropdown та при фільтрації
export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts`);
      return response.data;
    } catch (error) {
      Notify.failure(`Ooops... Sorry, something went wrong: ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../consts/consts";

const favCardData = localStorage.getItem('favCard')
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "../../Api/supabaseClient";
//we are using createAsyncThunk to create an async action that will be used to fetch data from the API
import { createStandaloneToast } from "@chakra-ui/react";
import CookiesService from "../../Services/CookiesService";


const {toast}=createStandaloneToast()
const initialState = {
  loading: false, //pending
  login: null, //fulfilled
  error: null, //rejected
};

export const userlogin=createAsyncThunk("login/userlogin",async(user,thunkAPI)=>{
  const {rejectWithValue}=thunkAPI
  try{
      const { data, error } = await supabase.auth.signInWithPassword({
          email: user.email,
          password: user.password
      });
      if (error) throw error;
      return data;
  }catch(error){
      return rejectWithValue(error)
  }

})

const LoginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userlogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userlogin.fulfilled, (state, action) => {
        console.log("action",action);
        state.loading = false;
        state.login = action.payload;
        state.error = null;
        const date=new Date()
        const In_DAYS=3
        const EXPIRES_AT=60*60*1000*24*In_DAYS
        date.setTime(date.getTime()+EXPIRES_AT) 
        const options={path:'/',expires:date}
        CookiesService.set('jwt',action.payload.jwt,options)
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        
        toast({
            title:'Login Successfully',
            description:'welocome to our store',
            status:'success',
            duration:5000,
            isClosable:true
          })
      })
      .addCase(userlogin.rejected, (state, action) => {
        state.loading = false;
        state.login = null;
        state.error = action.payload;
        toast({
          title: action.payload?.error?.message || "Login failed",
          description: "Make sure your email and password are correct",
          status: 'error',
          duration: 5000,
          isClosable: true,
          mb: '900px'
        });
      })
  },
});

// Export reducer and actions
export const selectLogin = ({ login }) => login;
export default LoginSlice.reducer;

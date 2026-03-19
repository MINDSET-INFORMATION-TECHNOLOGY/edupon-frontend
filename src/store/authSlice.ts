import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SignupData {
  role: string;
  name: string;
  email: string;
  password: string;
  institution: string;
  interest: string;
}

interface AuthState {
  signupData: SignupData;
  currentStep: number;
  isLoading: boolean;
  error: string | null;
  accessToken: string | null;
}

const initialState: AuthState = {
  signupData: {
    role: '',
    name: '',
    email: '',
    password: '',
    institution: '',
    interest: '',
  },
  currentStep: 1,
  isLoading: false,
  error: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.signupData.role = action.payload;
    },
    setUserData: (state, action: PayloadAction<Partial<SignupData>>) => {
      state.signupData = { ...state.signupData, ...action.payload };
    },
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string | null>) => {
      state.accessToken = action.payload;
    },
    resetSignup: () => initialState,
  },
});

export const {
  setRole,
  setUserData,
  setCurrentStep,
  setLoading,
  setError,
  setAccessToken,
  resetSignup,
} = authSlice.actions;

export default authSlice.reducer;

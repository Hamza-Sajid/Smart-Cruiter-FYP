import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    canidatesData: null,
    loading: false,
    error: null,
    filterBS: null
}

export const storeAllCandidatesDetails = createSlice({
    name: 'StoreCandidatesDetails',
    initialState,
    reducers: {
        startFetchingCandidatesData(state) {
            state.loading = true;
            state.error = null;
        },

        sucessOnFetchingCandidatesData(state, action) {
            state.loading = false;
            state.canidatesData = action.payload
        },

        errorFetchingCandidatesData(state, action) {
            state.loading = false,
                state.error = action.payload;

        },

        filterOnBS(state, action) {
            return state.filterBS = "Hamza"
        }
    }
})

export const { filterOnBS, startFetchingCandidatesData, sucessOnFetchingCandidatesData, errorFetchingCandidatesData } = storeAllCandidatesDetails.actions;
export default storeAllCandidatesDetails.reducer;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    apiData: null,
    loading: false,
    error: null,
}

export const OrganizationDetails = createSlice({
    name: 'organization_details',
    initialState,
    reducers: {
        fetchOrganizationDataStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchOrganizationDataSuccess(state, action) {
            state.loading = false;
            state.apiData = action.payload;
        },
        fetchOrganizationDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
})

export const { fetchOrganizationDataStart, fetchOrganizationDataSuccess, fetchOrganizationDataFailure } = OrganizationDetails.actions

export default OrganizationDetails.reducer 
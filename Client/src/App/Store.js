import { configureStore } from '@reduxjs/toolkit'
import OrganizationDetailsReducer from '../Features/Dashboard/Organization_Details_Slice'
import OrganizationDetails from '../Features/JobCycle/storeAllCandidatesDetails'
export const store = configureStore({
    reducer: { OrganizationDetailsReducer, }

    // reducer: {


    //     organizationReducer: OrganizationDetailsReducer,
    //     candidatesReducer: OrganizationDetails,

    // }
})
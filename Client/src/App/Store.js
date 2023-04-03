import { configureStore } from '@reduxjs/toolkit'
import OrganizationDetailsReducer from '../Features/Dashboard/Organization_Details_Slice'
export const store = configureStore({
    reducer: { OrganizationDetailsReducer },
})
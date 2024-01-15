import { createSlice } from "@reduxjs/toolkit";

const jobPostDataSlice = createSlice({
    name : "jobData",
    initialState : {
        jobPostData : []
    },
    reducers : {
        setJobPostInfo : (state, action) => {
            state.jobPostData.push(action.payload)
        }
    }
})

export const {setJobPostInfo} = jobPostDataSlice.actions;

export default jobPostDataSlice.reducer;
import React from "react";
import AddJob from "../components/AddJob";
import Banner2 from "../components/Banner2";

const AddJobPost = () => {
    return (
        <div className="flex justify-between">
            <AddJob />
            <Banner2 />
        </div>
    )
}

export default AddJobPost;
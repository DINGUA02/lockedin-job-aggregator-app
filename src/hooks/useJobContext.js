import { useContext } from "react";
import { JobContext } from "../context/JobContext";

export const useJobContext = () => {
    return useContext(JobContext);
};
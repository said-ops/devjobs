import { create } from "zustand";
import { Job } from "@/interface";
import Error from "next/error";

interface jobStoreState{
    jobs :Job[];
    selectedJob:Job|null;
    setJobs :(jobs:Job[])=>void;
    selectJob:(id:number)=>void;
    error:string;
    setError : (error:string)=>void;
    setLoading : (loading:boolean)=>void;
    loading:boolean;
    fetchJobs:()=>Promise<void>;
}

const useJobStore = create<jobStoreState>((set) => ({
    jobs: [],
    selectedJob:null,
    error:'',
    loading:false,
    setError:(error)=>
        set(()=>({
            error,
        })),
    setLoading:(loading)=>
        set(()=>({
            loading,
        })) ,   
   setJobs:(jobs)=>
    set(()=>({
        jobs,
    })),
    selectJob:(id)=>
        set(state=>({
            selectedJob:state.jobs.find(job=>job.id===id)||null
        })),
    fetchJobs : async ()=>{
        set(()=>({loading:true,error:''}))
        try {
            const response =await fetch('/data/data.json')

            if (!response.ok) {
                throw "Failed to fetch jobs"; 
            }

            const jobs: Job[] = await response.json();
            set(() => ({ jobs, loading: false }));
        } catch (error:any) {
            set(()=>({loading:false,error:error}))
        }
    }    

  }));
  export default useJobStore
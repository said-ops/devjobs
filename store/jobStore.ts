import { create } from "zustand";
import { Job } from "@/interface";

interface JobStoreState {
  jobs: Job[];
  filteredJobs: Job[];
  selectedJob: Job | null;
  error: string;
  loading: boolean;
  theme: string;
  title:string,
  location:string,
  isFullTime:boolean,
  visibleJobs:number
  setVisibleJobs:(count:null)=>void,
  setJobs: (jobs: Job[]) => void;
  selectJob: (id: number) => void;
  setError: (error: string) => void;
  setLoading: (loading: boolean) => void;
  fetchJobs: () => Promise<void>;
  setTheme: (theme: string) => void;
  filterJobs: (title?: string, location?: string, isFullTime?: boolean) => void;
  setTitle :(title:string)=>void,
  setLocation :(location:string)=>void,
  setContract :(isFullTime:boolean)=>void,
}

const useJobStore = create<JobStoreState>((set) => ({
  jobs: [],
  filteredJobs: [],
  selectedJob: null,
  error: "",
  loading: false,
  theme:
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light",
   title:'',
   location:'',
   isFullTime:false,  
   visibleJobs:6,
   setVisibleJobs:()=>set((prev)=>({visibleJobs:prev.visibleJobs + 3})),
   setTitle :(title)=>set(()=>({title})) ,
   setLocation:(location)=>set(()=>({location})),
   setContract:(isFullTime)=>set(()=>({isFullTime})),

  setTheme: (theme) => {
    set({ theme: theme === "light" ? "dark" : "light" });
  },

  setError: (error) => set(() => ({ error })),

  setLoading: (loading) => set(() => ({ loading })),

  setJobs: (jobs) =>
    set(() => ({
      jobs,
      filteredJobs: jobs, 
    })),

  selectJob: (id) =>
    set((state) => ({
      selectedJob: state.jobs.find((job) => job.id === id) || null,
    })),

  fetchJobs: async () => {
    set(() => ({ loading: true, error: "" }));
    try {
      const response = await fetch("/data/data.json");

      if (!response.ok) {
        throw new Error("Failed to fetch jobs");
      }

      const jobs: Job[] = await response.json();
      set(() => ({ jobs, filteredJobs: jobs, loading: false }));
    } catch (error: any) {
      set(() => ({ loading: false, error: error.message }));
    }
  },

  filterJobs: (title = "", location = "", isFullTime = false) =>
    set((state) => {
      const filtered = state.jobs.filter((job) => {
        const titleMatch = title
          ? job.position.toLowerCase().includes(title.toLowerCase())
          : true;
        const locationMatch = location
          ? job.location.toLowerCase().includes(location.toLowerCase())
          : true;
        const contractMatch = isFullTime ? job.contract === "Full Time" : true;

        return titleMatch && locationMatch && contractMatch;
      });

      return { filteredJobs: filtered };
    }),
}));

export default useJobStore;

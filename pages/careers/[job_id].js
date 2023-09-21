import Apply from "@/components/careers/job_details/Apply";
import BreadCrumb from "@/components/careers/job_details/BreadCrumb";
import Hero from "@/components/careers/job_details/Hero";
import JobDetails from "@/components/careers/job_details/JobDetails";
import { careerDetailsData } from "@/content/careers/careersDetailsData";
import { Inter, Poppins } from "next/font/google";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari"],
});

const Job = () => {
  const router = useRouter();
  const { job_id } = router.query;

  const [jobData, setJobData] = useState();

  const getJobData = (id) => {
    const jobId = Number(id);
    const result = careerDetailsData?.filter((job) => job.id === jobId);
    setJobData(result[0]);
  };

  useEffect(() => {
    getJobData(job_id);
  }, [job_id]);
  return (
    <div className={`${poppins.variable} ${inter.className} bg-white`}>
      <BreadCrumb title={jobData?.title} />
      <Hero jobData={jobData} />
      <JobDetails jobData={jobData} />
      <Apply jobTitle={jobData?.title} />
    </div>
  );
};

export default Job;

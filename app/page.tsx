"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

type Job = {
  id: string;
  title: string;
  job_category: string;
  location: string;
  employment_type: string;
  description: string;
};

const api = axios.create({
  baseURL: "https://jsonfakery.com",
});

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [department, setDepartment] = useState("All");
  const [location, setLocation] = useState("All");
  const [type, setType] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs");

        const formattedJobs: Job[] = res.data.map((j: Job) => ({
          id: j.id,
          title: j.title || "No Title",
          job_category: j.job_category || "General",
          location: j.location || "Unknown",
          employment_type: j.employment_type || "Full-time", 
          description:
            j.description ||
            `We are looking for a passionate ${j.title} to join our team.`,
        }));

        setJobs(formattedJobs);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(
    () =>
      jobs.filter((job) => {
        const depMatch =
          department === "All" || job.job_category === department;
        const typeMatch = type === "All" || job.employment_type === type;
        const locMatch = location === "All" || job.location === location;
        return depMatch && typeMatch && locMatch;
      }),
    [jobs, department, location, type],
  );

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const departments = [
    "All",
    ...Array.from(new Set(jobs.map((j) => j.job_category))),
  ];
  const locations = [
    "All",
    ...Array.from(new Set(jobs.map((j) => j.location))),
  ];
  const types = [
    "All",
    ...Array.from(new Set(jobs.map((j) => j.employment_type))),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Join Our Team</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover exciting opportunities and grow your career with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">
              Department
            </label>
            <select
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-white/10 border border-white/20 rounded-lg p-3">
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">
              Location
            </label>
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-white/10 border border-white/20 rounded-lg p-3">
              {locations.map((l) => (
                <option key={l}>{l}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400 font-medium">Type</label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setCurrentPage(1);
              }}
              className="bg-white/10 border border-white/20 rounded-lg p-3">
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-[1.03] transition shadow-xl">
              <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-300">{job.job_category}</p>
              <div className="mt-3 flex justify-between text-sm text-gray-400">
                <span>{job.location}</span>
                <span>{job.employment_type}</span>
              </div>
              <Link href={`/jobs/${encodeURIComponent(job.id)}`}>
                <button className="mt-5 w-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg py-2 font-semibold">
                  Apply
                </button>
              </Link>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <p className="text-center mt-10 text-gray-400">No jobs found.</p>
        )}

        {filteredJobs.length > 0 && (
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            {[...Array(totalPages)].map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg border ${
                    currentPage === page
                      ? "bg-indigo-500"
                      : "bg-white/10 border-white/20"
                  }`}>
                  {page}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

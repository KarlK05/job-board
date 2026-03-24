"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

type Job = {
  id: string;
  title: string;
  job_category: string;
  location: string;
  type: string;
  description: string;
  company?: string;
  salary_from?: number;
  salary_to?: number;
  employment_type?: string;
  application_deadline?: string;
  qualifications?: string[];
  contact?: string;
  is_remote_work?: number;
  number_of_opening?: number;
};

const api = axios.create({
  baseURL: "https://jsonfakery.com",
});

export default function JobPage() {
  const params = useParams();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await api.get("/jobs");
        const formattedJobs: Job[] = res.data.map((j: Job) => ({
          id: j.id ?? `${j.title}-${j.location}`,
          title: j.title || "No Title",
          job_category: j.job_category || "General",
          location: j.location || "Unknown",
          type: j.employment_type || "Full-time",
          description:
            j.description ||
            `We are looking for a passionate ${j.title || "professional"} to join our team.`,
          company: j.company || "Unknown Company",
          salary_from: j.salary_from,
          salary_to: j.salary_to,
          employment_type: j.employment_type,
          application_deadline: j.application_deadline,
          qualifications: Array.isArray(j.qualifications)
            ? j.qualifications
            : j.qualifications
              ? JSON.parse(j.qualifications)
              : [],
          contact: j.contact,
          is_remote_work: j.is_remote_work,
          number_of_opening: j.number_of_opening,
        }));

        const foundJob = formattedJobs.find((j) => j.id === params.id);
        setJob(foundJob || null);
      } catch (err) {
        console.error("Error fetching job:", err);
        setJob(null);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [params.id]);

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white flex items-center justify-center">
        <p className="text-gray-400 text-xl">Loading...</p>
      </div>
    );

  if (!job)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white flex items-center justify-center">
        <p className="text-gray-400 text-xl">Job not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white p-6 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl mt-10 mb-16">
        <h1 className="text-5xl font-bold mb-4">{job.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {job.job_category}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {job.location}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">{job.type}</span>
          {job.is_remote_work ? (
            <span className="bg-white/20 px-3 py-1 rounded-full">Remote</span>
          ) : null}
        </div>
        <div className="text-gray-200 space-y-4 text-lg leading-relaxed">
          <p>
            <strong>Company:</strong> {job.company}
          </p>
          <p>
            <strong>Salary:</strong>{" "}
            {job.salary_from && job.salary_to
              ? `$${job.salary_from.toLocaleString()} - $${job.salary_to.toLocaleString()}`
              : "Not specified"}
          </p>
          <p>
            <strong>Openings:</strong> {job.number_of_opening || 1}
          </p>
          <p>
            <strong>Application Deadline:</strong>{" "}
            {job.application_deadline || "Open until filled"}
          </p>
          <p>
            <strong>Contact:</strong> {job.contact || "Not provided"}
          </p>

          <div>
            <strong>Qualifications:</strong>
            <ul className="list-disc list-inside mt-2">
              {job.qualifications && job.qualifications.length > 0 ? (
                job.qualifications.map((q, idx) => <li key={idx}>{q}</li>)
              ) : (
                <li>None specified</li>
              )}
            </ul>
          </div>

          <div className="mt-4">
            <strong>Description:</strong>
            {job.description
              .trim()
              .split("\n")
              .map((para, idx) => (
                <p key={idx} className="mt-2">
                  {para.trim()}
                </p>
              ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center justify-between w-full">
          <Link href="/">
            <button className="w-full md:w-auto border border-indigo-500 text-indigo-400 hover:text-indigo-200 hover:border-indigo-400 transition rounded-lg p-3 font-semibold">
              ← Back to All Jobs
            </button>
          </Link>

          <span className="w-full md:w-auto bg-indigo-600 text-white font-semibold rounded-lg p-3 text-center shadow-md md:text-right">
            Send Your CV to hello@company.com
          </span>
        </div>
      </div>
    </div>
  );
}

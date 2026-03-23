"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { jobs } from "../../lib/jobs";

export default function JobPage() {
  const params = useParams();
  const job = jobs.find((j) => j.id === Number(params.id));

  if (!job)
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white flex items-center justify-center">
        <p className="text-gray-400 text-xl">Job not found</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-black text-white p-6 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-2xl mt-10 mb-16">
        <h1 className="text-5xl font-bold mb-4">{job.title}</h1>
        <div className="flex flex-wrap gap-4 text-gray-300 mb-6">
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {job.department}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">
            {job.location}
          </span>
          <span className="bg-white/20 px-3 py-1 rounded-full">{job.type}</span>
        </div>

        <div className="text-gray-200 space-y-6 text-lg leading-relaxed">
          {job.description
            .trim()
            .split("\n")
            .map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
        </div>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <button className="w-full md:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition rounded-lg p-3 font-semibold text-white">
            Apply Now
          </button>
          <Link href="/">
            <button className="w-full md:w-auto border border-indigo-500 text-indigo-400 hover:text-indigo-200 hover:border-indigo-400 transition rounded-lg p-3 font-semibold">
              ← Back to All Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

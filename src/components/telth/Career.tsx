// pages/Career.tsx
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MapPin,
  Briefcase,
  GraduationCap,
  Target,
} from "lucide-react";

interface JobLevel {
  id: string;
  title: string;
  experience: string;
  purpose: string;
  responsibilities: string[];
  qualifications: string[];
  level: "junior" | "mid" | "senior" | "lead";
}

const jobLevels: JobLevel[] = [
  {
    id: "assistant-cm",
    title: "Assistant Care Manager (Junior)",
    experience: "Fresher to 2 years",
    purpose:
      "Provide supervised patient support during home visits and community care programs while developing clinical and operational skills.",
    level: "junior",
    responsibilities: [
      "Assist Care Managers during home visits",
      "Record patient vital signs",
      "Support point-of-care testing",
      "Assist in sample collection and documentation",
      "Update the TELTH mobile application",
      "Educate patients on basic health practices",
      "Coordinate appointments and follow-ups",
      "Escalate abnormal findings immediately",
    ],
    qualifications: [
      "ANM, GNM, DMLT, EMT, Healthcare Assistant, or equivalent",
      "Basic computer and smartphone skills",
    ],
  },
  {
    id: "associate-cm",
    title: "Associate Care Manager (Mid-Level)",
    experience: "2–5 years",
    purpose:
      "Deliver protocol-based home healthcare services while coordinating with supervising physicians and specialists.",
    level: "mid",
    responsibilities: [
      "Perform comprehensive home health assessments",
      "Develop and implement care plans",
      "Conduct point-of-care diagnostics",
      "Coordinate telemedicine consultations",
      "Manage chronic disease follow-up",
      "Train junior staff",
      "Maintain clinical documentation",
      "Support emergency response and referrals",
      "Promote preventive healthcare services and care plans",
    ],
    qualifications: [
      "GNM, B.Sc. Nursing, Physiotherapy, Physician Assistant, Allied Health, or equivalent",
    ],
  },
  {
    id: "care-manager",
    title: "Care Manager (Collaborative Care)",
    experience: "5–8 years",
    purpose:
      "Serve as the primary clinical coordinator, working collaboratively with physicians to deliver integrated, technology-enabled patient care.",
    level: "senior",
    responsibilities: [
      "Manage complex patient cases",
      "Coordinate multidisciplinary care",
      "Supervise Associate and Assistant Care Managers",
      "Conduct advanced assessments",
      "Interpret AI-assisted health reports",
      "Manage remote patient monitoring",
      "Coordinate diagnostics and medication adherence",
      "Ensure regulatory compliance",
      "Drive patient satisfaction and quality improvement",
      "Participate in physician-led clinical reviews",
    ],
    qualifications: [
      "Registered Nurse, Physiotherapist, Physician Assistant, Pharmacist, Allied Health Professional, or equivalent",
    ],
  },
  {
    id: "senior-cm",
    title: "Senior Care Manager (Community Care)",
    experience: "8+ years",
    purpose:
      "Lead community-based healthcare operations, preventive health programs, and population health initiatives across the TELTH Network.",
    level: "lead",
    responsibilities: [
      "Lead community care teams",
      "Manage assigned geographic territories",
      "Supervise Care Managers",
      "Implement preventive health campaigns",
      "Coordinate government and insurance programs",
      "Build relationships with hospitals, physicians, NGOs, and community organizations",
      "Monitor clinical quality and operational KPIs",
      "Mentor team members",
      "Prepare management reports",
      "Support franchise and community healthcare expansion",
    ],
    qualifications: [
      "Nursing, Public Health, Physiotherapy, Physician Assistant, Healthcare Administration, or equivalent with leadership experience",
    ],
  },
];

const commonSkills = [
  "Patient-centered communication",
  "AI-enabled healthcare workflow",
  "Electronic Medical Records (EMR)",
  "Point-of-Care Testing (POCT)",
  "IoMT device operation",
  "Telemedicine support",
  "Clinical documentation",
  "Infection prevention and control",
  "Digital health literacy",
  "Basic English communication",
  "Ethical and professional conduct",
  "Teamwork and leadership (as applicable)",
];

const careerPath = [
  "Assistant Care Manager",
  "Associate Care Manager",
  "Care Manager (Collaborative Care)",
  "Senior Care Manager (Community Care)",
  "Area Care Manager",
  "Regional Care Manager",
  "State Clinical Operations Manager",
  "National Community Care Director",
];

export default function Career() {
  const [expandedJob, setExpandedJob] = useState<string | null>("assistant-cm");
  const [selectedLocation, setSelectedLocation] = useState<
    "uk" | "india" | null
  >(null);
  const [selectedJobForApply, setSelectedJobForApply] = useState<string | null>(
    null,
  );

  const toggleJob = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleApply = (jobId: string, location: "uk" | "india") => {
    setSelectedJobForApply(jobId);
    setSelectedLocation(location);

    // Navigate based on location
    if (location === "uk") {
      window.open("https://www.medpassedu.org/application-form?role=cm", "_blank");
    } else {
      window.open("https://app.telth.care/ccm-auth/signup", "_blank");
    }
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case "junior":
        return "bg-blue-100 text-blue-800";
      case "mid":
        return "bg-green-100 text-green-800";
      case "senior":
        return "bg-purple-100 text-purple-800";
      case "lead":
        return "bg-amber-100 text-amber-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelLabel = (level: string) => {
    switch (level) {
      case "junior":
        return "Entry Level";
      case "mid":
        return "Mid Level";
      case "senior":
        return "Senior Level";
      case "lead":
        return "Leadership";
      default:
        return level;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Your Career in{" "}
              <span className="text-primary">Community Healthcare</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Join TELTH Network's AI-enabled collaborative care model and make
              a difference in community healthcare delivery across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm">4 Career Levels</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm">Clear Progression Path</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm">Global Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Current Openings
            </h2>
            <p className="text-muted-foreground">
              Explore opportunities across all experience levels in our
              community care network
            </p>
          </div>

          <div className="space-y-4">
            {jobLevels.map((job) => (
              <div
                key={job.id}
                className="border rounded-xl bg-card overflow-hidden"
              >
                <button
                  onClick={() => toggleJob(job.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors text-left"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${getLevelBadgeColor(job.level)}`}
                      >
                        {getLevelLabel(job.level)}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground hidden sm:inline">
                      {expandedJob === job.id ? "Hide details" : "View details"}
                    </span>
                    {expandedJob === job.id ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {expandedJob === job.id && (
                  <div className="px-6 pb-6 pt-2 border-t">
                    <div className="space-y-6">
                      {/* Purpose */}
                      <div>
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-primary" />
                          Role Purpose
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {job.purpose}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                          {job.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <span className="text-primary mt-0.5">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Qualifications */}
                      <div>
                        <h4 className="font-semibold text-sm mb-2">
                          Preferred Qualification
                        </h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                          {job.qualifications.map((qual, idx) => (
                            <li key={idx}>{qual}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Apply Buttons */}
                      <div className="pt-4 border-t">
                        <p className="text-sm font-medium mb-3">
                          Apply for this position:
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <button
                            onClick={() => handleApply(job.id, "uk")}
                            className="px-6 py-2.5 rounded-lg bg-[#0D9488] text-white font-medium hover:bg-[#0D9488]/90 transition-colors flex items-center gap-2"
                          >
                            <MapPin className="w-4 h-4" />
                            Apply in UK
                          </button>
                          <button
                            onClick={() => handleApply(job.id, "india")}
                            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-colors flex items-center gap-2"
                          >
                            <MapPin className="w-4 h-4" />
                            Apply in India
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          {selectedJobForApply === job.id &&
                            selectedLocation && (
                              <span>
                                Redirecting to{" "}
                                {selectedLocation === "uk"
                                  ? "MedPass Edu"
                                  : "TELTH Care"}{" "}
                                application portal...
                              </span>
                            )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Skills */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Common Skills Across All Levels
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            These core competencies are essential for success in any role within
            the TELTH Network
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {commonSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-card border rounded-full text-sm text-muted-foreground hover:border-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Career Progression */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-8xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-sm font-medium text-emerald-700">
              Career Growth
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Career Progression Pathway
            </h2>

            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Your journey from entry-level to leadership in community
              healthcare.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex overflow-x-auto pb-6">
            {careerPath.map((role, index) => (
              <div key={index} className="flex items-center">
                {/* Card */}
                <div className="w-30 min-h-[100px] bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2 p-6 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 leading-6">
                    {role}
                  </h3>
                </div>

                {/* Arrow */}
                {index !== careerPath.length - 1 && (
                  <div className="px-1">
                    <svg
                      className="w-8 h-8 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m0 0l-5-5m5 5l-5 5"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-5">
            {careerPath.map((role, index) => (
              <div key={index}>
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-800">{role}</h3>
                  </div>
                </div>

                {index !== careerPath.length - 1 && (
                  <div className="flex justify-center py-2">
                    <svg
                      className="w-6 h-6 text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 5v14m0 0l-5-5m5 5l5-5"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-6 text-center">
              <p className="text-sm text-slate-600 leading-7">
             <span className="font-semibold text-emerald-700">✦</span>
              This hierarchy provides a structured career pathway while
               aligning with TELTH's AI-enabled collaborative care and community
                healthcare delivery model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join TELTH Network and be part of the future of community healthcare
            delivery
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.medpassedu.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors"
            >
              Explore UK Opportunities
            </a>
            <a
              href="https://app.telth.care/ccm-auth/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-primary-foreground/20 text-white font-semibold hover:bg-primary-foreground/30 transition-colors border border-white/20"
            >
              Apply in India
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

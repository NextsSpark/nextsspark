import { getOpportunities } from '@/lib/opportunities';
import Link from 'next/link';
import { Plus, Edit, MapPin, Briefcase } from 'lucide-react';
import DeleteOpportunityButton from "@/components/admin/DeleteOpportunityButton";

export default async function OpportunitiesPage() {
  const opportunities = await getOpportunities();

  const jobs = opportunities.filter((o: any) => o.category === 'job');
  const internships = opportunities.filter((o: any) => o.category === 'internship');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-navy-900 mb-2 tracking-tight">
            Manage Opportunities
          </h1>
          <p className="text-gray-600">Create and manage job postings and internship programs</p>
        </div>
        <Link
          href="/admin/opportunities/new"
          className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-linear-to-r from-cyan-500 to-cyan-600 text-white font-semibold hover:shadow-lg transition-all duration-200 w-fit"
        >
          <Plus size={20} />
          <span>New Opportunity</span>
        </Link>
      </div>

      {/* Jobs Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-linear-to-r from-navy-50 to-cyan-50">
          <div className="flex items-center space-x-3 mb-2">
            <Briefcase size={20} className="text-cyan-600" />
            <h2 className="text-lg font-extrabold text-navy-900">Job Openings</h2>
          </div>
          <p className="text-sm text-gray-600 ml-8">{jobs.length} total positions</p>
        </div>

        {jobs.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {jobs.map((opportunity: any) => (
              <div
                key={opportunity._id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {opportunity.location && (
                        <div className="flex items-center space-x-1 text-sm text-gray-600">
                          <MapPin size={14} className="text-cyan-500" />
                          <span>{opportunity.location}</span>
                        </div>
                      )}
                      {opportunity.department && (
                        <span className="inline-block px-2.5 py-1 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-full">
                          {opportunity.department}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/admin/opportunities/${opportunity._id}/edit`}
                      className="flex items-center justify-center space-x-1 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors font-medium text-sm"
                    >
                      <Edit size={16} />
                      <span>Edit</span>
                    </Link>
                    <DeleteOpportunityButton
  id={opportunity._id.toString()}
/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <Briefcase size={40} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">No job openings yet</p>
            <Link
              href="/admin/opportunities/new"
              className="text-cyan-600 hover:text-cyan-700 font-semibold"
            >
              Create your first job opening
            </Link>
          </div>
        )}
      </div>

      {/* Internships Section */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-linear-to-r from-navy-50 to-cyan-50">
          <div className="flex items-center space-x-3 mb-2">
            <Briefcase size={20} className="text-cyan-600" />
            <h2 className="text-lg font-extrabold text-navy-900">Internship Programs</h2>
          </div>
          <p className="text-sm text-gray-600 ml-8">{internships.length} total programs</p>
        </div>

        {internships.length > 0 ? (
          <div className="divide-y divide-gray-200">
            {internships.map((opportunity: any) => (
              <div
                key={opportunity._id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {opportunity.title}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {opportunity.duration && (
                        <span className="inline-block px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                          {opportunity.duration}
                        </span>
                      )}
                      {opportunity.stipend && (
                        <span className="inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {opportunity.stipend}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/admin/opportunities/${opportunity._id}/edit`}
                      className="flex items-center justify-center space-x-1 px-3 py-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors font-medium text-sm"
                    >
                      <Edit size={16} />
                      <span>Edit</span>
                    </Link>
                    <DeleteOpportunityButton
  id={opportunity._id.toString()}
/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <Briefcase size={40} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">No internship programs yet</p>
            <Link
              href="/admin/opportunities/new"
              className="text-cyan-600 hover:text-cyan-700 font-semibold"
            >
              Create your first internship program
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
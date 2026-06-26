import { Users, Mail, Calendar } from 'lucide-react';

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      candidateName: 'John Doe',
      position: 'Senior React Developer',
      email: 'john@example.com',
      appliedDate: '2024-06-20',
      status: 'pending',
    },
    {
      id: 2,
      candidateName: 'Jane Smith',
      position: 'UI/UX Designer',
      email: 'jane@example.com',
      appliedDate: '2024-06-19',
      status: 'reviewed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'reviewed':
        return 'bg-blue-100 text-blue-700';
      case 'accepted':
        return 'bg-green-100 text-green-700';
      case 'rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold text-navy-900 mb-2 tracking-tight">
          Candidate Applications
        </h1>
        <p className="text-gray-600">Review and manage job applications</p>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-linear-to-r from-navy-50 to-cyan-50">
          <div className="flex items-center space-x-3">
            <Users size={20} className="text-cyan-600" />
            <h2 className="text-lg font-extrabold text-navy-900">Applications</h2>
          </div>
          <p className="text-sm text-gray-600 mt-1 ml-8">{applications.length} applications</p>
        </div>

        {applications.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                    Candidate
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-extrabold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-navy-900">{app.candidateName}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-600 mt-1">
                          <Mail size={14} className="text-cyan-500" />
                          <a href={`mailto:${app.email}`} className="hover:text-cyan-600">
                            {app.email}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-navy-900 font-medium">{app.position}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar size={14} className="text-cyan-500" />
                        <span>{app.appliedDate}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(
                          app.status
                        )}`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="px-6 py-12 text-center">
            <Users size={40} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500">No applications yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';

interface ImportResult {
  success: boolean;
  dryRun: boolean;
  result: {
    created: number;
    updated: number;
    errors: Array<{ row: number; email: string; error: string }>;
  };
  importLogId: string;
}

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dryRun, setDryRun] = useState(true);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [resyncEmail, setResyncEmail] = useState('');
  const [resyncLoading, setResyncLoading] = useState(false);
  const [resyncResult, setResyncResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
    } else {
      alert('Please select a CSV file');
    }
  };

  const handleImport = async () => {
    if (!file) {
      alert('Please select a CSV file');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('csv', file);
      formData.append('dryRun', dryRun.toString());

      const response = await fetch('/api/admin/import-members', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET || 'your-admin-secret'}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Import error:', error);
      alert('Failed to import CSV');
    } finally {
      setLoading(false);
    }
  };

  const handleResync = async () => {
    if (!resyncEmail) {
      alert('Please enter an email address');
      return;
    }

    setResyncLoading(true);
    setResyncResult(null);

    try {
      const response = await fetch('/api/admin/resync-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET || 'your-admin-secret'}`,
        },
        body: JSON.stringify({ email: resyncEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setResyncResult(`Success: ${data.message}`);
      } else {
        setResyncResult(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Resync error:', error);
      setResyncResult('Failed to resync contact');
    } finally {
      setResyncLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">RTLMB Admin Panel</h1>
        
        {/* CSV Import Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Import Members from CSV</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CSV File (CanadaHelps format)
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={dryRun}
                onChange={(e) => setDryRun(e.target.checked)}
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Dry run (validate only, don't import)</span>
            </label>
          </div>

          <button
            onClick={handleImport}
            disabled={loading || !file}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Importing...' : dryRun ? 'Validate CSV' : 'Import Members'}
          </button>

          {result && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h3 className="font-semibold text-gray-900 mb-2">
                {result.dryRun ? 'Validation Results' : 'Import Results'}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Created:</span> {result.result.created}
                </div>
                <div>
                  <span className="font-medium">Updated:</span> {result.result.updated}
                </div>
                <div>
                  <span className="font-medium">Errors:</span> {result.result.errors.length}
                </div>
                <div>
                  <span className="font-medium">Import ID:</span> {result.importLogId}
                </div>
              </div>
              
              {result.result.errors.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-medium text-red-600 mb-2">Errors:</h4>
                  <div className="max-h-40 overflow-y-auto">
                    {result.result.errors.map((error, index) => (
                      <div key={index} className="text-sm text-red-600">
                        Row {error.row} ({error.email}): {error.error}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Contact Resync Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resync Contact</h2>
          
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={resyncEmail}
              onChange={(e) => setResyncEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email address to resync"
            />
          </div>

          <button
            onClick={handleResync}
            disabled={resyncLoading || !resyncEmail}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resyncLoading ? 'Resyncing...' : 'Resync Contact'}
          </button>

          {resyncResult && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <p className="text-sm">{resyncResult}</p>
            </div>
          )}
        </div>

        {/* CSV Format Help */}
        <div className="mt-8 bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">CSV Format Requirements</h3>
          <p className="text-sm text-blue-800 mb-2">
            Your CSV file should have the following columns in order:
          </p>
          <ul className="text-sm text-blue-800 list-disc list-inside space-y-1">
            <li><strong>first</strong> - First name</li>
            <li><strong>last</strong> - Last name</li>
            <li><strong>email</strong> - Email address</li>
            <li><strong>membership_start</strong> - Start date (YYYY-MM-DD)</li>
            <li><strong>renewal_date</strong> - Renewal date (YYYY-MM-DD)</li>
          </ul>
          <p className="text-sm text-blue-800 mt-2">
            Example: <code>John,Doe,john@example.com,2023-01-01,2024-01-01</code>
          </p>
        </div>
      </div>
    </div>
  );
}

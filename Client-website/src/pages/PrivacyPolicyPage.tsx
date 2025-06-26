import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-sky-50 via-white to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Collection and Use</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Sakthi Dental Clinic, we collect information that you provide directly to us, 
                such as when you schedule an appointment, fill out forms, or contact us. This may 
                include your name, email address, phone number, medical history, and other relevant 
                health information necessary for providing dental care.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Provide, maintain, and improve our dental services</li>
                <li>Schedule and manage your appointments</li>
                <li>Communicate with you about your treatment</li>
                <li>Send appointment reminders and follow-up care instructions</li>
                <li>Process payments and insurance claims</li>
                <li>Comply with legal obligations and maintain medical records</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except as described in this policy. We may share 
                your information with healthcare providers involved in your care, insurance 
                companies for claims processing, and legal authorities when required by law.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes 
                physical, electronic, and administrative safeguards to secure your data.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of certain communications</li>
                <li>File a complaint if you believe your privacy rights have been violated</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Website Data</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our website may use cookies and similar technologies to enhance your browsing 
                experience, analyze website traffic, and personalize content. You can control 
                cookie settings through your browser preferences.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We may update this privacy policy from time to time. We will notify you of any 
                significant changes by posting the new policy on our website and updating the 
                effective date.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this privacy policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Sakthi Dental Clinic</strong></p>
                <p className="text-gray-600 mb-1">B2/8, SBM Layout, Anthivadi, Hosur, Tamil Nadu 635109, India</p>
                <p className="text-gray-600 mb-1">Email: info@sakthidentalclinic.in</p>
                <p className="text-gray-600">Phone: +91 9862890897 / +91 9363298118</p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  <strong>Effective Date:</strong> January 1, 2024<br />
                  <strong>Last Updated:</strong> January 1, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
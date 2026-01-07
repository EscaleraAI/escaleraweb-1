import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Privacy Policy
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Escalera AI – Snappit App & Website
            </p>
            <div className="text-center text-sm text-muted-foreground space-y-1">
              <p>Effective Date: 01.09.2025</p>
              <p>Last Updated: 05.09.2025</p>
            </div>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <p>
              Escalera AI SL ("Escalera AI," "we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect personal information when you use the Snappit mobile apps (iOS and Android), the Snappit website, and related Services (collectively, the "Services").
            </p>
            
            <p>
              By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree, please discontinue use of the Services.
            </p>
            
            <p>
              We organize the data we collect into three main categories: Personal Data, Usage Data, and Content & Location Data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Personal Data</h2>
            <p>
              Information that identifies you as an individual or can be used to contact you. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Identity Data:</strong> First name, last name, username or similar identifier, title, age or parental consent status (for child accounts).
              </li>
              <li>
                <strong>Contact Data:</strong> Email address, telephone number (if provided), postal or billing address (if applicable).
              </li>
              <li>
                <strong>Technical Data:</strong> Internet Protocol (IP) address, login data (if applicable), browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our Services.
              </li>
              <li>
                <strong>Marketing & Communications Data:</strong> Your preferences for receiving marketing from us and our third parties, and your communication preferences.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Usage Data</h2>
            <p>
              Information about how you interact with and use our Services, collected automatically. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pages, screens, or features you access in the app or website.</li>
              <li>The time and date of visits, time spent on features, and navigation paths.</li>
              <li>Device information such as type, unique identifiers, operating system, browser type, and app version.</li>
              <li>Diagnostic and performance information (e.g., crash logs, error reports).</li>
              <li>For mobile devices: device model, unique device ID, IP address, mobile operating system, and browser type.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Content & Location Data</h2>
            <p>
              Information related to what you submit and where you use the Services. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Content Data:</strong> Photos, videos, journal entries, collections, or other materials you upload. Metadata associated with uploaded content (e.g., date, time, file type).
              </li>
              <li>
                <strong>Location Data:</strong> Approximate or precise location information (depending on device settings), used to suggest nearby Adventures (parks, zoos, aquariums) and to tag where snaps were taken. Collection of location data is optional and may be turned off in your device settings.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide and improve the Services.</li>
              <li>Identify animals, plants, and objects in uploaded photos.</li>
              <li>Personalize collections, achievements, and Adventures.</li>
              <li>Provide you support and manage your requests.</li>
              <li>Ensure safety and comply with applicable laws.</li>
              <li>Conduct analytics to improve performance and user experience.</li>
              <li>Communicate with you, including updates and support.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Sharing of Information</h2>
            <p>We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Hosting, storage, analytics, and crash reporting providers who help us operate the Services.
              </li>
              <li>
                <strong>Legal Compliance:</strong> Authorities or regulators when required by law or to protect the safety of users.
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Children's Privacy</h2>
            <p>We comply with COPPA (US) and GDPR-K (EU) regarding children's data.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accounts for children under 13 require verified parental consent.</li>
              <li>We collect only the minimum data needed to provide the Services.</li>
              <li>Parents may review, update, or delete their child's information at any time.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Data Retention</h2>
            <p>
              We retain personal data only as long as necessary to provide the Services, fulfill legal obligations, or resolve disputes. You may request deletion of your account and personal data at any time by contacting us (see Section 10).
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Data Security</h2>
            <p>
              We use technical and organizational measures to protect your data, including encryption, secure storage, and limited employee access. However, no system is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal data.</li>
              <li>Request a copy of your data (data portability).</li>
              <li>Withdraw consent for certain data processing activities.</li>
            </ul>
            <p>To exercise these rights, please contact us (see Section 10).</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>If you have questions or requests about this Privacy Policy, please contact us:</p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p><strong>Escalera AI SL</strong></p>
              <p>Email: admin@escalera.ai</p>
              <p>Address: Escalera AI, Calle Obispo Munoz 73, 46100 Burjassot Valencia</p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">11. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you via the app, website, or by email.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
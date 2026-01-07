import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Terms of Service
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
              Welcome to Escalera AI! These Terms of Service ("Terms") apply to all services operated by Escalera AI SL ("Escalera AI," "we," "our," or "us"), including the Snappit mobile applications (iOS and Android), the Snappit website, and any related features, products, or services (collectively, the "Services").
            </p>
            
            <p>
              By accessing or using our Services, you agree to these Terms. If you do not agree, please do not use the Services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Eligibility & Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Users must be at least 16 years old, or have verified parental consent if younger (in compliance with COPPA, GDPR-K, or local law).</li>
              <li>Parents/guardians are responsible for supervising children's use of the Services.</li>
              <li>You agree to provide accurate registration details and keep your account secure.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services for unlawful or harmful purposes.</li>
              <li>Upload inappropriate, offensive, or misleading content.</li>
              <li>Attempt to reverse-engineer, disrupt, or misuse the Services.</li>
              <li>Post or share others' personal data without consent.</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that violate these rules.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Content & Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You retain ownership of photos, journal entries, and other content you upload.</li>
              <li>By uploading content, you grant Escalera AI a worldwide, non-exclusive, royalty-free license to use, display, and process it to provide and improve the Services (e.g., AI identification, collections, and community features).</li>
              <li>We do not sell your personal content to advertisers.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Educational Purpose Disclaimer</h2>
            <p>
              Snappit is designed for educational and entertainment purposes. While we aim to provide accurate identifications and facts, we cannot guarantee scientific accuracy or completeness. Always use caution when interacting with wildlife or unfamiliar plants.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All intellectual property in the Services (logos, app design, character mascots like Snap the Squirrel, etc.) belongs to Escalera AI.</li>
              <li>You may not copy, distribute, or modify our intellectual property without permission.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
            <p>We may suspend or terminate accounts that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate these Terms.</li>
              <li>Pose risks to other users or to the security of the Services.</li>
            </ul>
            <p>Users may request deletion of their account at any time by contacting us (see Section 10).</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Third-Party Services</h2>
            <p>
              The Services may integrate with third-party providers (e.g., cloud hosting, analytics). We are not responsible for third-party terms or practices.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>The Services are provided "as is."</li>
              <li>Escalera AI is not liable for damages resulting from your use of the Services, except where prohibited by law.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Spain (Escalera AI's jurisdiction), unless otherwise required by applicable local law.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>If you have questions about these Terms, contact us:</p>
            <div className="bg-muted p-4 rounded-lg mt-4">
              <p><strong>Escalera AI SL</strong></p>
              <p>Email: admin@escalera.ai</p>
              <p>Address: Escalera AI, Calle Obispo Munoz 73, 46100 Burjassot, Valencia, Spain</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default TermsOfService;
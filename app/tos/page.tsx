import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms & Services

Effective Date: September 16, 2024

Welcome to Craftr, an AI-powered resume builder designed specifically for tech roles. By accessing or using our website (https://getcraftr.com) and purchasing our services, you agree to comply with and be bound by the following Terms & Services. Please review these terms carefully.

Ownership and Usage Rights

When purchasing a resume package, users have the right to download their resume as a PDF.
The downloaded resume is fully owned by the user.
If a user cancels their subscription, we reserve the right to delete the user's resume data from our database.
Users may request a full refund within 7 days of purchase.
User Data Collection

We collect personal data such as name, email, and payment information necessary for providing our services.
We also collect non-personal data through web cookies to improve user experience.
Refund Policy

Users may request a full refund within 7 days after their purchase. Refund requests can be sent to rizkdotai@gmail.com.
Data Deletion

Upon cancellation of a subscription, Craftr reserves the right to delete all stored resume data from its database.
Modifications to the Terms

We may update these Terms from time to time. Users will be notified of any changes via the email address provided.
Governing Law

These Terms are governed by the laws of the United States.
Contact Information

For any questions or concerns regarding these Terms & Services, please contact us at rizkdotai@gmail.com.
By using Craftr, you acknowledge that you have read, understood, and agree to these Terms & Services.

Last Updated: September 16, 2024
Thank you for using Craftr!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;

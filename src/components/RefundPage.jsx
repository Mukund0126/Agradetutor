import React, { useEffect } from 'react';

export default function RefundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
          Refund Policy
        </h1>
        
        <div style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <p>
            <strong>Effective Date:</strong> 11/05/2023
          </p>
          
          <p>
            At A Grade Tutor, we strive to provide our users with the best possible educational experience. We understand that occasionally circumstances may arise where a refund is necessary. Therefore, we have established the following refund policy for our education services, applicable to all our courses and programs:
          </p>
          
          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>1. Refund Eligibility:</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>1.1.</strong> The refund policy is applicable within 1 hour of the initial purchase or enrollment in any of our courses or programs.</li>
            <li><strong>1.2.</strong> Refund requests received after the 1-hour period will not be considered eligible for a refund.</li>
            <li><strong>1.3.</strong> This policy applies to all payment methods used, including credit/debit cards, online payment gateways, or any other authorized payment channels.</li>
            <li><strong>1.4.</strong> Refund eligibility for A Grade Tutor is applicable within 30 days of purchase of the order, provided the request meets our terms and conditions.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>2. Refund Process:</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>2.1.</strong> To request a refund, you must contact A Grade Tutor's customer support team within the specified 1-hour timeframe.</li>
            <li><strong>2.2.</strong> You can reach our student support team by email at <a href="mailto:agradetutoreducation@gmail.com" style={{ color: '#2563eb', fontWeight: '600' }}>agradetutoreducation@gmail.com</a></li>
            <li><strong>2.3.</strong> When contacting our customer support team, please provide your purchase details and a clear explanation of the reason for your refund request.</li>
            <li><strong>2.4.</strong> Our customer support team will review your request and assess its eligibility for a refund within a reasonable timeframe.</li>
            <li><strong>2.5.</strong> If your refund request is approved, the refund will be issued using the same payment method used for the initial purchase.</li>
            <li><strong>2.6.</strong> The refund turnaround time on the website is around 5-7 days.</li>
            <li><strong>2.7.</strong> The number of days taken to process the refund and credit the amount to the customer's bank account is 5-7 working days.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>3. Non-Refundable Situations:</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>3.1.</strong> Refunds will not be granted in cases where a significant portion of the course or program has been accessed or completed.</li>
            <li><strong>3.2.</strong> Refunds will not be provided if the refund request is made after the 1-hour timeframe specified in this policy.</li>
            <li><strong>3.3.</strong> Refunds will not be granted if there is a violation of A Grade Tutor's terms of service or any other applicable policies.</li>
            <li><strong>3.4.</strong> In situations where A Grade Tutor determines that a refund is not applicable, we may offer alternative resolutions, such as extending access to the course or program or providing additional support.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>4. Modification or Termination:</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>4.1.</strong> A Grade Tutor reserves the right to modify or terminate this refund policy at any time, without prior notice.</li>
            <li><strong>4.2.</strong> In the event of any modifications to this policy, the updated policy will be effective immediately upon posting on our website.</li>
          </ul>

          <p style={{ marginTop: '16px' }}>
            Please note that this refund policy applies specifically to A Grade Tutor's education services and may not apply to other services or products offered by A Grade Tutor. For more details about our refund policy or any other inquiries, please refer to our website or contact our customer support team.
          </p>

          <p>
            By enrolling in any of our courses or programs, you acknowledge that you have read, understood, and agreed to this refund policy.
          </p>

          <p>
            Thank you for choosing A Grade Tutor as your educational partner. We are committed to supporting your learning journey.
          </p>

        </div>
      </div>
    </div>
  );
}

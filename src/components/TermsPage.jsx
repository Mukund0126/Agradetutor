import React, { useEffect } from 'react';

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '60px 0' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 style={{ fontSize: '42px', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px' }}>
          Terms and Conditions
        </h1>
        
        <div style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <p>
            Welcome to A Grade Tutor!
          </p>
          
          <p>
            <strong>IMPORTANT!</strong> These terms of service affect your legal rights and responsibilities, so please read them carefully. Websites, mobile apps, applications, and any other interactive features or services that include a link to these A Grade Tutor Terms of Use ("Terms of Use") are subject to these Terms of Use (each, a "Service" and collectively, the "Services" or "A Grade Tutor Websites"). In these Terms of Service, "A Grade Tutor," "A Grade Tutor Websites," "we," or "our" refer to A Grade Tutor and its affiliated companies. "You," "your," and "user" mean any individual or organization that accesses or uses the Services.
          </p>

          <p>
            Whether you access the Services through a computer, mobile device, or some other means; whether you access the Services directly through our Services or through any third-party website that links to them ("Linked Services"); and whether you are a registered user or a guest, these Terms of Use will govern your use of the Services.
          </p>
          
          <p>
            For certain services and products made available via the Services, it may be necessary to agree to additional terms and conditions in addition to those set out in these Terms of Service ("Additional Terms"). When you purchase a Service, you will also be subject to the Additional Terms applicable to that Service. If you make use of such Services, the applicable Additional Terms will be included into the Agreement between You and A Grade Tutor. Unless otherwise stated in the Additional Terms, the Additional Terms shall take precedence over these Terms of Use in the event of a disagreement.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Account Registration and Termination</h2>
          <p>
            A Grade Tutor offers online and offline services to enhance academic performance and save money. A Grade Tutor allows one account per user. You may only have one account and cannot share it or the Services. Account creation requires correct and full information. You cannot assume another person's identity. You must maintain your account details. Account creation requires a password. You are entirely responsible for password security and account usage. You promise not to use another user's account, username, or password or share your password. You promise not to sell or transfer your membership or privileges. If you suspect improper account or password usage, you must tell A Grade Tutor immediately. A Grade Tutor may cancel your account at any time without warning.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Age and Residence Requirements</h2>
          <p>
            13-year-olds may use the Services. If you are between 13 and the age of majority in your country, you must examine these Terms of Use with your parent or guardian to make sure you both understand and agree to them. Accounts are available worldwide. The Services are not intended for distribution or use in any jurisdiction or nation where they would violate law or regulation or require A Grade Tutor to register. A Grade Tutor does not guarantee that the Services are suitable for use elsewhere. We retain the right to restrict the availability of the Services and/or the distribution of any material, program, product, service, or other feature to any person, geographic region, or jurisdiction, at any time and in our sole discretion, and to limit the quantities of such content. Except where needed to safeguard our reputation, service integrity, or if you violate these Terms of Use, we will warn you before exercising these rights.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Proprietary Rights</h2>
          <p>
            A Grade Tutor controls the Services. All materials included in or otherwise a part of the Services, including past, present, and future versions of questions, as well as the selection, assembly, and arrangement thereof and the "look and feel" of the Services (collectively, "A Grade Tutor Content"), are owned, controlled, or licensed by A Grade Tutor or its third-party partners. A Grade Tutor content is protected by copyright, trademark, patent, and other laws, rules, regulations, and treaties. The Services' pictures of books and other publications are owned by their copyright holders. Third-parties provide certain bibliographic and citation material in the Services. Unauthorized A Grade Tutor Content usage is forbidden. Unauthorized use of Services content may violate copyright, trademark, patent, and other relevant laws, rules, regulations, and treaties and result in criminal or civil consequences.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Notice to Third-Party Websites</h2>
          <p>
            Any A Grade Tutor Content that is made accessible in connection with your site or in any other context, through our Widgets, third-party widgets or in any other context, is our exclusive property, and we do not give any intellectual property rights in connection with this content in any way. We reserve the right to request that you immediately discontinue any usage of A Grade Tutor Content after providing you with prior notice.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Acceptable Use Policy</h2>
          <p>
            If you upload User Content via or in connection with our Services, or if you send any material or information to other users, and if you engage in any activity with other users, you will be fully accountable for the consequences of your conduct. You agree to observe these Community Usage Rules when you submit, upload, or otherwise distribute User Content through the Services. A Grade Tutor may delete any illegal content, suspend or delete the accounts of anyone involved, and/or notify law police if necessary.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Service Modifications</h2>
          <p>
            At any time and without prior notice, A Grade Tutor may alter or terminate any or all of the Services, as we see fit. Since A Grade Tutor is constantly updating the Services, the Terms of Use may not always reflect these updates, so any description-police of the Services provided by A Grade Tutor is not a representation that the Services are working or will always work in that manner.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Email and Text Message Notifications</h2>
          <p>
            A Grade Tutor will send all notifications and receipts to the email address you provided at account creation or as updated. A Grade Tutor offers the convenience of sending you text message reminders if you so want. Our mobile text message disclaimers are included in these Terms of Service and should be read carefully. In order to deliver the Services, A Grade Tutor may use the phone numbers you supply, including your wireless number, to call you, including by automated or prerecorded message. Whether or whether you get reminders by email, text, or any other means, you are still responsible for complying with the Terms of Use. A Grade Tutor will never contact you through email or text message to request sensitive information such as your login, password, or payment details. If you get a suspicious email or text message that seems to be from A Grade Tutor, please delete it immediately.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Account Cancellation</h2>
          <p>
            At any point during your use of our Services, you may request that your account be terminated. To the extent permitted by law, your account will not be revoked and canceled until all transactions have been executed. For any reason, including but not limited to inactivity or abuse, A Grade Tutor has the right to terminate your account. Photos, citation data, comments, likes, friendships, and other material you've posted using the Services may continue inside the Service even after your account is deactivated (for example, if your content has been reshared by others).
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Restriction of Liability and Warranties</h2>
          <p>
            There may be more than one proper way to solve a given issue; if you provide the method(s) you'd want to use, we'll use those; if you don't, we'll use our best judgment, which may result in a solution that differs from what you had in mind. The fee will be discussed after an inquiry has been received. We promise to provide the answers by the due date if you pay in advance. You may ask a few clarifying questions to ensure that you fully grasp the solution's structure. Although we strive to be available 24/7, there may be instances when we just cannot. To ensure that all of your questions are addressed at your scheduled appointment, we recommend making a reservation in advance. You may send us readings or videos that are relevant to the subjects you'd want us to cover in advance of the meeting.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Payments and Payment Processing</h2>
          <p>
            <strong>Validation:</strong> To guarantee users can make payments, A Grade Tutor may ask users to present a legitimate means of payment (e.g., credit or debit card, PayPal account, etc.) related to a financial institution when they register for an account or buy items or services. Your account must always have a valid payment method if one is necessary. A Grade Tutor may charge your account "pending" to verify your payment method. This charge will not be verified and will vanish from your financial statement.
          </p>
          <p>
            <strong>Authorization Holds:</strong> We may approve expected charges and taxes from your payment method. The transaction and payment method will determine the authorization amount. These money may be on authorization hold. We may automatically request further authorization holds if costs exceed the authorization hold. You agree that we may charge any alternative means of payment we have on file if your payment provider refuses any permission.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Third-Party Links, Content and Applications</h2>
          <p>
            Links to third-party websites or online features may be included in the Services itself or in messages you receive in connection with the Services. It is possible that the Services may have material created, maintained, or endorsed by parties other than us. The Services may also allow interactions with a third-party website or online feature, such as via the use of an application that links the Services or your profile on the Services to a third-party site. Please be aware that we have no influence over the content or operation of any linked third-party website. All correspondence and business dealings that you have with Third Parties found on or through the Services are solely between you and the Third Party.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Categories of Users</h2>
          <p>
            You have the option of joining A Grade Tutor as a "Member" or using the site as a "Visitor." There may be many tiers of "Members," each with its own set of benefits and privileges. Depending on the service, only Members will be able to access and utilize specific features. Please read the conditions of any specific membership level carefully before accepting it.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>A Grade Tutor Credit & Promotions</h2>
          <p>
            Sometimes, A Grade Tutor may provide credit to you in the form of "A Grade Tutor Credit." To the maximum extent permissible under applicable law, A Grade Tutor may impose restrictions on your use of A Grade Tutor Credit. A Grade Tutor may also sometimes provide promotional incentives such as price reductions, bonuses, coupons, loyalty programs, point systems, giveaways, and competitions. It is your responsibility to familiarize yourself with and abide by any such regulations, prohibitions, and limits. You also undertake not to cheat or defraud the system in any way.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Miscellaneous</h2>
          <p>
            Without limiting the generality of the foregoing, if any provision of these Terms of Use is held to be wholly or partially void, invalid, illegal, or unenforceable, such provision shall be severed to the extent that it is void, invalid, illegal, or unenforceable, and the remaining provisions shall remain in full force and effect. A failure on A Grade Tutor's part to assert or enforce any right or provision of the Terms of Use shall not constitute a waiver of such right or provision.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Changes</h2>
          <p>
            The Terms of Service and any related policies herein are subject to change at any moment by A Grade Tutor ("Updated Terms"). By using our Services after we have posted the Updated Terms (or engaging in such other conduct as we may reasonably specify), you agree to be bound by the then-current version of the Terms of Use, including any changes we may have made since the last time you used our Services.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Entire Agreement</h2>
          <p>
            You and A Grade Tutor agree that the then-current Terms of Use, including (a) any relevant policies and terms mentioned in the Terms of Use and (b) any Additional Terms, constitute the entire agreement between you and A Grade Tutor about the Services.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', marginTop: '16px' }}>Contacting A Grade Tutor</h2>
          <p>
            Please contact us at <a href="mailto:agradetutoreducation@gmail.com" style={{ color: '#2563eb', fontWeight: '600' }}>agradetutoreducation@gmail.com</a> with any feedback, questions, or issues you may have about the A Grade Tutor Websites or Services. A Grade Tutor will treat any and all requests, authorizations, and notifications as received.
          </p>

        </div>
      </div>
    </div>
  );
}

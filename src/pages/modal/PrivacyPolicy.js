import React from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import PrivacyAgreement from '../../components/PrivacyAgreement';
import TextField from '../../components/TextFields';

const paragraphs = [
  `DataLucent Inc. (“Company,” “we”, “us,” “our,”) provides online and mobile services, including but not limited to, the Company website (the “Site”) web applications, computer programs and mobile applications hosted by or on behalf of Company (collectively, the “Service”) intended to enhance your use of the products offered by Company (the “Company Products”). Company is committed to maintaining the privacy, integrity and security of any personal information about our Producers. This Privacy Policy (“Policy”) explains how we protect personal information we collect in connection with your use of the Service and how we use and, in some cases, disclose that information. “Personal information” for purposes of this Policy means information that identifies you, such as your name, address, phone number, or email address.`,
  ``
]

const PrivacyPolicy = (props) => {
  const history = useHistory();
  return (
    <div>
      <h5 className="modal-subhead">Who we are</h5>
      <div className="privacy-container">
        <p style={{ marginTop: 0 }}>
          DataLucent Inc. (“Company,” “we”, “us,” “our,”) provides online and mobile services, including but not limited to, the Company website (the “Site”) web applications, computer programs and mobile applications hosted by or on behalf of Company (collectively, the “Service”) intended to enhance your use of the products offered by Company (the “Company Products”). Company is committed to maintaining the privacy, integrity and security of any personal information about our Producers. This Privacy Policy (“Policy”) explains how we protect personal information we collect in connection with your use of the Service and how we use and, in some cases, disclose that information. “Personal information” for purposes of this Policy means information that identifies you, such as your name, address, phone number, or email address.

          Our policies reflect our belief that all humans have personal data rights and deserve data dignity. We create commercial and legal symmetry between all network participants (“You” or the “Producer”). Our services allow You to take control of your content and personal data and to enter into agreements where You can earn money and rewards for licensing your content and data to third parties. This Privacy Policy (this “Policy”) is subject to the provisions our Terms of Service (the “Terms of Service”), which are incorporated by reference. To see the Terms of Service click here: https://www.datalucent.com/terms

          Your Account
          Every Producer has the right to own and control their content and personal data through a personal data account (“Data Account”) that provides you alone with full control over the data in your Data Account. To create a Data Account with us you need to complete a two-step process:

          First, you need to access a social media account that you control and download your data to a device you own and control. We refer to this as “Step One.”
          Second, You register with us and we create an account on your behalf that allows you to compile and license your data to DataLucent and our partners. We refer to this as “Step Two.”
          If you do not complete Step Two, DataLucent never has access to any of the data you download to your device. All data that you upload via the Service in Step Two is anonymized, encrypted, and secured on your behalf.

          We (or our partners) then provide tools that allow each Producer to populate their data account with compilations of data they want to control and secure like online content, preferences, and information from social networks (collectively, the “Producer Data”).

          You own and have full control over any Producer Data and your Data Account.

          Your Rights
          You have the following rights. Please note we may have lawful reasons to deny requests related to the rights below:

          The right to be informed: You have the right to be informed of our purposes for processing your personal data, our retention periods for that personal data, and who it will be shared with.
          The right of access: You have the right to access your personal data and supplementary information to allow you to be aware of and verify the lawfulness of the processing.
          The right to rectification: You have the right to have inaccurate personal data rectified or completed if it is incomplete.
          The right to erasure: You have the right to have your personal data erased from our systems.
          The right to restrict processing: You have the right to request the restriction or suppression of your personal data.
          The right to data portability: You have the right to obtain and reuse your personal data for your own purposes across different services.
          The right to object: You have the right to object to processing based on legitimate interests or the performance of a task in the public interest/exercise of official authority (including profiling); direct marketing (including profiling); and processing for purposes of scientific/historical research and statistics.
          Rights in relation to automated decision making and profiling: You have rights related to automated decision making any profiling. Please note that the Company does not make any such automated decision making or profiling.
          If you would like to exercise any of these right or cancel your Company account you may do so by emailing us at info@datalucent.com. When you request cancellation of your account, your personally identifiable information will be deleted, including but not limited your email address, name, and photo(s) unless you also request an archival copy of your data. Archival copies of your account information that exist within our back-up system will be deleted in accordance with our normal back-up expiration schedule.

          What Personal Information We Collect
          Your Company Products work in conjunction with a Producer account on the Site (a “Producer Account”).

          When you sign up for a Producer Account, you are required to provide an email address (which will be used as your login ID) and to create an account password (collectively the “Registration Information”).
          In order to benefit fully from the Company Products and Service, you need to download social media files to a device you own and control and then license them to us via the Services.
          Any data you add via the Services is automatically encrypted, anonymized, and secured during our proprietary upload process.
          Information that you add manually to the Service is stored in your Producer Account.
          How We Use Your Personal Information
          Company uses your personal information to:

          Provide you with the Service.
          Analyze Site usage and improve the Service.
          Deliver to you any administrative notices and communications relevant to your use of the Company Products and Service.
          Provide you with updates regarding Company Products and Services.
          Perform internal market research, project planning, troubleshooting problems, and to detect and protect against error, fraud or other criminal activity.
          License you Producer Data on your behalf in exchange for rewards.
          Legal Basis
          We rely on a number of legal bases to use your information in the ways indicated above. These legal bases include where:

          necessary to perform the contractual obligations in our agreement with you or your employer and provide services to you;
          you have consented to the processing, which you can revoke at any time;
          necessary to comply with a legal obligation, a court order, or to exercise or defend legal claims;
          necessary for the purposes of our legitimate interests; and
          you have expressly made the information public.
          Note that we principally rely on consent (i) to send marketing messages, and (ii) for sharing data by other means.

          Where we process your information on the basis of legitimate interests, we do so as it is necessary to pursue our legitimate interests of providing and improving our services for our customers. The Company has a legitimate interest in understanding how our services are being used. We also pursue our legitimate interests of improving our services, efficiency, and determining the level of interest in services for customers by obtaining insights into usage patterns of the services.

          We may also use your information to maintain a secure site, including sharing of your information for such purposes, because it is necessary to pursue our legitimate interests in ensuring the security of our services, including enhancing protection of our site, intellectual property infringement and security risks of all kind. We may also process and share your personal information with a third party in response to lawful requests by public authorities, including to meet legitimate national security or law enforcement requirements; defend against legal claims, to comply with a subpoena, court order, legal process, or other legal requirement; or when we believe in good faith that such disclosure is reasonably necessary to comply with the law.

          Disclosure to Third Parties
          DataLucent has no direct connection with any of your data sources. Our relationship is with you as a data licensor and our customers as data licensees.

          At times Company may make certain personal information available to strategic partners that work with Company to provide services to you.  In such cases, your account with such third party will continue to be subject to that third party’s privacy policy and your Company Producer Account will continue to be governed by this Policy.

          Company may also share your personal information with companies who provide services such as information processing, order fulfillment, product delivery, customer data management, customer research and the like. These companies are obligated to protect your information and may be located wherever Company does business.

          We may also disclose information about you if we determine that disclosure is reasonably necessary to enforce our Terms of Service or protect our operations or Producers or if we are required to do so by any applicable law, rule, regulation, subpoena or other legal process. Additionally, in the event of a reorganization, merger, or sale we may transfer any and all personal information we collect to the relevant third party.

          Use of Aggregated Anonymous Producer Data
          Company may disclose non-personally identifiable aggregated Producer data, such as aggregated gender, age, height, weight, and usage data gathered from Company devices (without the inclusion of a Producer’s name or other identifying information) to:

          Organizations approved by Company that conduct consumer research;
          Our customers who are subject to non-disclosure agreements; and
          Advertisers who license aggregated data via Platform.
          Cookies and Other Technology
          The Company Site and Service may use “cookies” and other technologies such as pixel tags and web beacons.

          Cookies are alphanumeric identifiers in the form of text files that are inserted and stored by your Web browser on your computer’s hard drive. These technologies tell us which parts of our website you have visited, limit the number of times you see a Company offer, or help us better determine which Company offers you may like to see or to alert you to software compatibility issues. They are also used to analyze and improve our Service’s design and functionality.

          If you choose to delete cookies from your device or block them from being stored on your device, please note that the full functionality of the Service may not be available to you.

          “Web beacons” are images embedded in a Web page or email for the purpose of measuring and analyzing Site usage and activity. Company, or third-party service providers acting on our behalf, may use Web beacons to help us analyze Site usage and improve the Service.

          We may use third party service providers to help us analyze certain online activities and improve our products and the Service. For example, these service providers may help us measure the performance of our online campaigns or analyze visitor activity on Company.com. We may permit these service providers to use cookies and other technologies to perform these services for Company. We do not share any personal information about our customers with these third-party service providers, and these service providers do not collect such information on our behalf. Our third-party service providers are required to comply fully with this Policy.

          Information You Elect to Share With Others
          If you use a message board, blog, journal or any other method of posting Producer-generated content on our Site or through the Service, you should be aware that such information can be read, collected or used by others and could be used to send you unsolicited messages. We are not responsible for the personal information you choose to submit in these areas.

          Surveys
          Company may ask you to participate in surveys designed to help Company improve the Service. Any personal information provided to Company in connection with any survey will be used only in relation to that survey and as elsewhere set forth in this Policy.

          Children
          We do not knowingly collect any personal information from children under 13. If we discover that a child under the age of 13 has provided us with personally identifying information, we will take steps to delete the information as soon as possible.

          Email Communications From Us
          We may provide our registered customers with summaries of their Producer Account data and email alerts. We also allow Producers to subscribe to email newsletters and from time to time may transmit emails promoting Company or third-party goods or services.

          Company subscribers have the ability to opt-out of receiving our weekly summaries and promotional emails and to terminate their newsletter subscriptions by following the instructions provided in such emails.

          Opting out in this manner will not end transmission of service-related emails, such as email alerts.

          Data Security
          We use a combination of firewall barriers, encryption techniques and authentication procedures, among others, to maintain the security of your data and to protect Company accounts and systems from unauthorized access.

          When you register for the Service, Company requires a password from you for your privacy and security. This password is stored in an encrypted fashion on our systems.

          It is important to understand that these precautions apply only to our Site and systems. We exercise no control over how your information is stored, maintained or displayed by third parties or on third-party sites.

          International Producers
          Company’s Services are hosted and operated entirely in the United States and are subject to United States law. Any personal information that you provide to Company is being provided to Company solely in the United States and will be hosted on United States servers. You consent to the transfer of your personal information to the United States. If you are accessing the Company Services from outside the United States, please be advised that United States law may not offer the same privacy protections as the law of your jurisdiction.

          If you have a security related concern, please contact us at info@datalucent.com.

          Updates to This Policy
          We may update this Policy periodically. The date last revised appears at the bottom of the Policy. Changes take effect immediately upon posting.

          If you have questions, comments, concerns or feedback regarding this Policy or any other privacy or security concern, send an e-mail to info@datalucent.com.

          This policy was last updated on 3/02/2021.
        </p>
      </div>
      <PrivacyAgreement />
      <Button label="Continue" style={{ margin: '0 auto' }} onClick={() => window.location.href = '/dashboard/offers'} />
    </div>
  )
}

export default PrivacyPolicy;
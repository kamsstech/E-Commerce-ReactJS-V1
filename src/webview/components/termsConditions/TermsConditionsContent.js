import React, { useEffect } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";

import '../privacyAndPolicy/css/PrivacyAndPolicyStyle.css';

const TermsConditionsContent = () => {
	useEffect(() => {
		// window.scrollTo(0, 0)
		window.scrollTo({
			top: 0, 
			behavior: 'smooth' /* you can also use 'auto' behaviour in place of 'smooth' */
			});
			Aos.init({
				duration: 1000,
			});
	}, []);
	
	return (
		<Container
			data-aos="fade-up"
			// data-aos-delay="1500"
		>
		<div className="terms-content-container">
			<p
				className="terms-content-header"
				data-aos="fade-up"
				// data-aos-delay="1750"
			>
				Terms &amp; Conditions
			</p>
			<p
				className="terms-content-date"
				data-aos="fade-up"
				// data-aos-delay="1850"
			>
				Last Revised: 15 February, 2021
			</p>

			<p
				className="terms-content-point"
				data-aos="fade-up"
				// data-aos-delay="2000"
			>
				1. General
			</p>
			<p
				className="terms-content-paragraph"
				data-aos="fade-up"
				// data-aos-delay="2050"
			>
				1.1 C-Square Info Solutions Private Limited (“We”, “Our”, “C-Square” or the “Company”) is an entity with its registered office in 69, 2nd Floor Al Ameen Towers, Hosur Road, Bangalore, Karnataka, 560027, engaged in the business, inter alia, of providing ERP software, B2B platform and software as a service Solutions (the “Services”). Any person who wishes to procure the Services (the “User”, “Your” or “You”) may access our website (the “Website”) at www.csquare.in or www.c2info.com and, subject to submission of the required documents, fulfilment of certain criteria and provision of information which may include Personal Information (defined in paragraph 2.3 of this Privacy Policy), the User can obtain use of the Services from the Website.
			</p>
			<p
				className="terms-content-paragraph"
				data-aos="fade-up">
			1.2 The Company is committed to ensuring that the privacy of its clients, visitors, and Users of the Website is always respected. This Privacy Policy serves as a testament to Our sincere efforts to uphold privacy laws. The User’s privacy and the protection of the User’s personally identifiable information as defined below is one of our top priorities. We assure the User that we follow appropriate and necessary standards when it comes to protecting the User’s privacy. This Privacy Policy would cover all Services being provided through the Website and discloses and explains how we collect, use, share and protect Personal Information, Usage Information (defined in paragraph 3.1 of this Privacy Policy) or any other information about the Users. In this Privacy Policy, We also provide information regarding how You can access and update Your Personal Information and make certain choices about how Your Personal Information is used by us. This Privacy Policy is available for direct access on our website at http://www.csquare.in/#/privacy-policy We will not use or share Your information with anyone except as described in this Privacy Policy. This Privacy Policy does not apply to information we collect by other means (including offline) or from other sources. The use of information collected through our Website shall be limited to the purposes under this Privacy Policy to the customer.
			</p>
			<p
				className="terms-content-paragraph"
				data-aos="fade-up">
				1.3 We hope this will help You make an informed decision about sharing Personal Information with us. The following discloses our information gathering and dissemination practices. Our Privacy Policy is available for direct access at http://www.csquare.in/#/privacy-policy. 
			</p>
			<p
				className="terms-content-point"
				data-aos="fade-up"
				// data-aos-delay="2200"
			>
				{" "} 2. Information Collected by the Company
			</p>
			<p
				className="terms-content-paragraph"
				data-aos="fade-up"
				// data-aos-delay="2250"
			>
				2.1 In accordance with the provisions of the Information Technology Act, 2000 and the rules made thereunder that require publishing the rules and regulations, privacy policy on an online portal of the Company, We request you to go through this Privacy Policy carefully before you decide to access this Website. The Company is a registered company in India with its registered office at 69, 2nd Floor Al Ameen Towers, Hosur Road, Bangalore, Karnataka, 560027. For any queries regarding this Privacy Policy and the collection and use of data collected or processed under this Privacy Policy, the Company can be contacted by mail at 69, 2nd Floor Al Ameen Towers, Hosur Road, Bangalore, Karnataka, 560027; by phone at +918067657070 or by e-mail at data.privacy@csquare.in 
			</p>
			<p
				className="terms-content-paragraph"
				data-aos="fade-up">
				2.2 The legal basis for collection and processing of any information collected and processed by Us is (i) for the performance of the Services; and (ii) where it is Our legitimate interests to do so and not overridden by Your rights (for example, in some cases for direct marketing, fraud prevention, network and information systems security, for responding to Your communications, the operation of networks of groups by the network administrators, and improving our Website). In some cases, we may also have a legal obligation to collect information about You, or may otherwise need the information to protect Your vital interests or those of another person, or where we need to comply with a legal requirement. 
			</p>
			<p
				className="terms-content-paragraph"
				data-aos="fade-up">
				2.3 We may ask You to provide Us with certain categories of information such as Personal Information, which is information that could reasonably be used to identify You personally, such as inter alia, Your name, email address, gender, age, PIN code, credit card or debit card details, medical information, password and IP address (“Personal Information”). We may collect this information through various forms and in various places such as Our Website, including when You access the Website, when You first register with Us, when You create a transaction, when You contact Us, when You update Your information or when You otherwise interact with Us, by, for example, way of telephone, letter or in person. This Personal Information would be for the purposes of providing the Services and shall be afforded protection as per applicable law and shall be retained for the duration of the Services being provided and in accordance with this Privacy Policy. 
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				3. COLLECTION AND USE OF PERSONAL DATA FROM WEBSITE
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				3.1 [As a rule, all visits to our site are anonymous.] However, some of our web pages use cookies, tags or other tracking technologies to monitor website activity. In addition to any Personal Information or other information that You choose to submit to us, we may use a variety of technologies that automatically (or passively) collect certain information whenever You access the Website (“Usage Information”). This Usage Information may include the browser that You are using, the URL that referred You to the Website and information regarding the devices used by You to access the Website, among other information. Usage Information may be non-identifying or may be associated with You. Whenever we associate Usage Information or a device identifier with Your Personal Information, we will treat it as Personal Information and the conditions relating to Personal Information under this Privacy Policy will be followed. Traffic data, while anonymous, is gathered and analysed for business needs. Further, a User accessing the Website may get cookies from our advertisers. We do not control these cookies, and once a User has clicked on the advertisement and left our Website, this Privacy Policy no longer applies and shall be governed by the Privacy Policy of such advertiser. 3.2 We may, at a time, ask You for Your personal and business information such as name, address, email address, designation, organization, country You belong to, in order to provide You information on our services. We will use Your information to respond to You, regarding the reason You contacted us. 3.3 The User may change browser settings to accept or reject cookies on personal preference. You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but You can usually modify the browser setting to decline cookies if You so prefer. If You choose to decline cookies, you may not be able to sign in or use other interactive features of the Website that may depend on cookies. If You choose to accept cookies, you also have the ability to later delete cookies that You have accepted. If You choose to delete cookies, any settings and preferences controlled by those cookies, including advertising preferences, will be deleted and may need to be recreated. Specifically, in accessing our Website, session cookies are implemented, which are of temporary nature, which do not collect any user data and would be deleted once your session or usage of Our Website is completed.
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				4. THIRD PARTY CONTENT AND LINKS TO THEIR SERVICES
			</p>

			<p className="terms-content-paragraph" data-aos="fade-up">
				4.1 The Website may contain content that is supplied by a third party, and those third parties may collect website usage information and other information when web pages from any online or mobile services are provided to Your browser. In addition, when You are using the Website, you may be directed to other websites that are operated and controlled by third parties that we do not control. We are not responsible for the privacy practices employed by any of these third parties. These other websites may send their own cookies to You, independently collect data or solicit Personal Information and may or may not have their own published privacy policies. When You leave the Website, we encourage You to read the privacy statements of all third-party websites before submitting any information to third parties.
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				5. PROCESSING OF THE DATA
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				5.1 We, our affiliates or third-party service providers with whom we have entered into contractual arrangements may also process any Personal Information or Usage Information collected from You for legitimate commercial purposes including providing the Services. We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of our processing of Personal Information such as (i) only sharing and providing access to Personal Information to the minimum extent necessary, subject to appropriate contractual restrictions including confidentiality restrictions where appropriate, and on an anonymized basis wherever possible; (ii) using secure servers to store Personal Information; (iii) verifying the identity of any individual who requests access to Personal Information prior to granting them access to such information; and (iv) using Secure Sockets Layer (SSL) software or other similar encryption technologies to encrypt any payment transactions You make on or via our website.
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				6. COLLECTION AND USE OF PERSONAL DATA FOR DIRECT MARKETING PURPOSES
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				6.1 Personal data we collect and use for marketing purposes relates to existing clients &amp; prospects and other companies with which we have an existing or a new business relationship. C-Square may gather individual’s business contact information like name, designation, email id, phone no, and address either from public sources, or from third party data providers.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				6.2 We may send e-mails, or make personal telephonic calls or send e-mails to You, our existing client, prospects or other companies with whom we want to develop or maintain a business relationship in accordance with applicable data privacy laws.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				6.3 Collection of Your Personal Data for Direct Marketing Purposes shall take place only on Your consent to our collection of the same. You can also exercise the right to discontinue marketing communications to You, or to have Your personal data removed from our customer relationship management (CRM) databases at any time by contacting us at salesenquiries@csquare.in 
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				6. DATA TRANSFER
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				7.1 Your information collected through the Website may be stored and processed in India or any other country in which the Company or its subsidiaries, affiliates or service providers maintain facilities. Presently, the Company stores Personal Information collected in India.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				7.2 The Company may transfer information that we collect about You, including Personal Information, to affiliated entities, or to other third parties across borders and from Your country or jurisdiction to other countries or jurisdictions around the world. These countries may have data protection laws that are different to the laws of Your country and, in some cases, may not be as protective. We have taken appropriate safeguards to require that Your information will remain protected in accordance with this Privacy Policy to ensure the adequate protection of Your Personal Information. 
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				8. RIGHTS OF DATA SUBJECT
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				8.1 Any User who has submitted Personal Information on the Website has the right to (i) be informed about the Personal Information We collect from You and use; (ii) obtain confirmation from Us that Your Personal Information is being collected and used by Us and to access the Personal Information held about You by Us; (iii) have Your Personal Information corrected if it is inaccurate or incomplete at any time; (iv) erasure, or the right to be forgotten, which means You can request the deletion or removal of any Personal Information We hold about You at any time; (v) block or suppress Us from collecting and using Your Personal Information, which means We can continue to store Your Personal Information but we cannot further collect or us it in any way; (vi) obtain and reuse any Personal Information We hold about You for Your own purposes across different services, which allows You to move, copy or transfer Your Personal Information easily from the Company to another place notified by You to Us in a safe and secure way without hindrance to the usability of Your Personal Information; (vii) object to the processing of Your Personal Information on legitimate grounds; (viii) opt out of receiving any promotional or marketing material by clicking on the “Unsubscribe” button or by sending an email to salesenquiries@csquare.in . Please note that if You withdraw Your consent, this will not affect the lawfulness of our use and processing of Your information if such processing is based on another lawful basis other than consent;
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				8.2 Any request received by Us in relation to the aforesaid shall be acknowledged within 30 days of receipt of such request. 
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				9. CONSENT AND WITHDRAWAL OF CONSENT
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				9.1 Generally, we do not rely on consent as a legal basis for processing Your Personal Information other than in relation to sending third party direct marketing communications to You via email or text message. You have the right to withdraw Your consent to marketing at any time by contacting us at salesenquiries@csquare.in 
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				10. USE OF INFORMATION COLLECTED
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.1 We do not share any Personal Information with any third party (not being an affiliate, third party service provider or a group company of Us) without Your consent, except when directed by law. The Company can use Personal Information and/or Usage Information to verify User identity the context of any engagement initiated by a User. 
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.2 We will process your Personal Information to (i) respond to any queries that You may have, (ii) to provide any information requested regarding the Services; (iii) respond to any communication initiated by you regarding a career opening with Us; (iv) enable You to attend or view webinars conducted by C-Square; (v) download material from the Website or (vi) to send marketing and promotional material on our Services. You can choose to opt out of receiving such promotional and marketing communications by sending us an email at salesenquiries@csquare.in. We may also use Your Personal Information to send You information in relation to our Services based on the analysis of the Usage Information collected. We may also send strictly service-related announcements, for instance, if our Services are temporarily suspended for maintenance, we may send You an email, text message, flash notification or telephone call. 
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.3 We, our affiliates or third party service providers may use Personal Information or Usage Information collected in the following ways: (i) to operate and improve the Website and tools associated with the Website; (ii) to create aggregated and anonymized information to determine which Website features are most popular and useful to Users, and for other statistical analyses; (iii) to prevent, discover and investigate violations of this Privacy Policy or the Terms and Conditions, and to investigate fraud or other matters; (iv) to customize the content or the Services on the Website for You, or the communications sent to You through the Website; (v) to provide You the Services; (vi) to improve our ability to provide You the Services; (vii) to observe, improve and administer the quality of Services; (viii) to analyze how the Website is used, diagnose technical problems; (ix) to remember the basic information provided by You for effective access; (x) to confirm Your identity in order to determine Your eligibility to use the Website and avail the Services; (xi) to notify You about any changes to the Website; (xii) to transmit, share or transfer the data to a group company or affiliate of Us to enable such group company or Affiliate to provide You with the Services; (xiii) to enable Us to comply with Our legal and regulatory obligations; (xiv) for the purpose of sending administrative notices, Service-related alerts and other similar communication with a view to optimizing the efficiency of the Website. (xv) to do market research, troubleshooting or project planning, (xvi) to protect against errors, fraud and other criminal activity; and (xvii) to reinforce the Terms of Use.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.4 We may share non-Personal Information, such as aggregated User statistics and log data, with our business partners for the purposes of industry analysis, demographic profiling, to deliver targeted advertising about other products or services, or for other business purposes. This information is solely used to analyse the Website and understand usage statistics, as mentioned above, and is anonymous. The Company may share this data with its business partners on an anonymous basis. We do not sell, share, rent or trade the information we have collected about You, including Personal Information, other than as disclosed within this Privacy Policy or at the time You provide Your information. We do not share Your Personal Information with third parties otherwise than as mentioned under this Privacy Policy for those third parties’ direct marketing purposes unless You consent to such sharing at the time You provide Your Personal Information.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.5 You may be presented with an opportunity to receive information and/or marketing offers directly from third parties with whom You have created a transaction through the Website. If You do agree to have Your Personal Information being shared, Your Personal Information will be disclosed to such third parties and all information You disclose will be subject to the Privacy Policy and practices of such third parties. We are not responsible for the privacy policies and practices of such third parties and, therefore, you should review the privacy policies and practices of such third parties prior to agreeing to receive such information from them. If You later decide that You no longer want to receive communication from a third party, you will need to contact that third party directly.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.6 We cooperate with government and law enforcement officials and private parties to enforce and comply with the law. Thus, we may access, use, store, transfer and disclose Your information (including Personal Information), including disclosure to third parties such as government or law enforcement officials or private parties as we reasonably determine is necessary and appropriate: (i) to satisfy any applicable law, regulation, governmental requests or legal process; (ii) to protect the safety, rights, property or security of the Company, our Services, the Website or any third party; (iii) to protect the safety of the public for any reason; (iv) to detect, prevent or otherwise address fraud, security or technical issues; and /or (v) to prevent or stop any activity we consider to be, or to pose a risk of being, an illegal, unethical, or legally actionable activity. Such disclosures may be carried out without notice to You.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.7 We may share Your information, including Your Personal Information and Usage Information with our parent, subsidiaries and affiliates for internal reasons. We also reserve the right to disclose and transfer all such information: (i) to a subsequent owner, co-owner or operator of the Website or applicable database; or (ii) in connection with a corporate merger, consolidation, restructuring, the sale of substantially all of our membership interests and/or assets or other corporate change, including, during the course of any due diligence process. You will be notified via email and/or through a prominent notice on the Website of any change in ownership or uses of Your Personal Information, as well as any choices You may have regarding Your Personal Information. 
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				10.8 We may partner with another party to provide specific services if required. When You sign-up for the Services, we will share names or other Personal Information that is necessary for the third party to provide these Services. Our contractual arrangements with such third parties restrict these parties from using Personal Information except for the explicit purpose of assisting in the provision of these Services. We also protect Your Personal Information off-line other than as specifically mentioned in this Privacy Policy. Access to Your Personal Information is limited to employees, agents or partners and third parties, who We reasonably believe will need that information to enable Us to provide Services to You. However, we are not responsible for the confidentiality, security, or distribution of Your own Personal Information by our partners and third parties outside the scope of our agreement with such partners and third parties.
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				11. SECURITY MEASURES
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				11.1 We maintain technical and organizational measures to safeguard the personal data we hold. This includes necessary controls and relevant policies, procedures and guidance taking into account the risks associated with the categories of personal data and the processing we undertake.
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				12. DATA RETENTION
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				12.1 Your information will be retained by Us for as long as it is needed for Us to provide the Services to You. The Company will retain and use your information as necessary to comply with legal obligations. If You wish to cancel Your account or request that we no longer collect, process or retain Your information to provide Services, You may contact Us at data.privacy@csquare.in. When the Company has no ongoing legitimate business need to process Your information, we will either delete the information or anonymize it.
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				13. SECURITY
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				13.1 Personal Information and Usage Information we collect is securely stored within our databases, and we use standard, industry-wide, commercially reasonable security practices such as encryption, firewalls and SSL (Secure Socket Layers) for protecting Your information. However, as effective as encryption technology is, no security system is impenetrable. We cannot guarantee the security of our databases, nor can we guarantee that information You supply won’t be intercepted while being transmitted to us over the Internet or wireless communication and any information You transmit to the Company You do at Your own risk. If, despite our best efforts, an unauthorised breach of our security measures occurs, resulting in the unauthorised access, duplication, removal or alteration of any Personal Information, Third Party Information, or Usage Information, the Company, its directors, officers, employees, promoters, or affiliates will not be held responsible for any loss resulting from such breach.
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				14. NOTIFICATION IN CASE OF BREACH
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				14.1In the event that Personal Information is compromised as a breach of security, the Company will promptly notify You in compliance with the applicable law.
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				15. CHILDREN’S PRIVACY
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				15.1 Protecting the privacy of young children is especially important. For that reason, the Company does not knowingly collect or solicit Personal Information from anyone under the age of 13. In the event that we learn that we have collected Personal Information from a child under age 13, we will delete that information as quickly as possible. If You believe that we might have any information from or about a child under age 13, please contact us at data.privacy@csquare.in 
			</p>
			<p className="terms-content-point" data-aos="fade-up">
				16. CHANGE IN INFORMATION AND CANCELLATION OF ACCOUNT
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				16.1 You are responsible for maintaining the accuracy of the information You submit to us, such as Your contact information provided as part of account registration. If Your Personal Information changes, or if You no longer desire to access the Website, You may correct, delete inaccuracies, or amend information by making the change on our member information page or by contacting us through salesenquiries@csquare.in and We will respond within 96 hours of receipt of communication.
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				16.2 You may also cancel or modify Your communications that You have elected to receive from the Website by logging into Your User account and changing Your communication preferences or by sending us an email on salesenquiries@csquare.in
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				16.3 If You wish to cancel Your account or request that we no longer use Your Personal Information to provide You with details with respect to our Services and the Website, please write to us at salesenquiries@csquare.in
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				17. YOUR FEEDBACK AND GRIEVANCES
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				17.1 All concerns received or incidents reported shall be investigated and tracked to closure by C-Square. 17.2 Any disputes concerning the processing of the Personal Data of website users will be resolved through arbitration. 17.3 Depending on applicable data privacy law, You may opt out of any future contact from us at any time by contacting us at data.privacy@csquare.in 17.4 If You have any questions or concerns about this Privacy Policy, please feel free to contact C-Square’s Grievance officer in writing at data.privacy@csquare.in or using the details provided on our ‘Contact Us’ page. We will use reasonable efforts to respond promptly to requests, questions or concerns You may have regarding Our use of Personal Information about You. 
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				18. CHANGES TO THIS POLICY
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				18.1 From time to time, we may update this Privacy Policy to reflect changes to Our information practices. Any changes will be effective immediately upon the posting of the revised Privacy Policy on the Website. If We make any material changes, we will notify You by email (sent to the e-mail address specified in Your account) or by means of a notice on the Website prior to the change becoming effective. We encourage You to periodically review this page for the latest information on our privacy practices.
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				19. OPT IN
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				19.1 If You wish to specifically opt for receiving non-essential communications such as promotional and marketing-related information regarding the Company, the Website and the Services, please send the Company an email at salesenquiries@csquare.in
			</p>

			<p className="terms-content-point" data-aos="fade-up">
				20. Summary of Contact Information
			</p>
			<p className="terms-content-paragraph" data-aos="fade-up">
				20.1 The contact information provided by Us under this Privacy Policy is as follows: i. You can access this Privacy Policy on our website at http://www.csquare.in/#/privacy-policy You can contact Us by mail at 69, 2nd Floor Al Ameen Towers, Hosur Road, Bangalore, Karnataka, 560027 ii. You can contact Us by phone at +918067657000 iii. You can contact Us by e-mail at salesenquiries@csquare.in iv. You can opt out of receiving any promotional or marketing material by clicking on the “Unsubscribe” button in the email, or by sending an email to salesenquiries@csquare.in v. You can contact the Company to cancel Your account or request that the Company no longer collect, process or retain Your information to provide Services at salesenquiries@csquare.in vi. You can address any queries on this Privacy Policy to data.privacy@csquare.in vii. If You believe that we might have any information from or about a child under 16, please contact us at data.privacy@csquare.in viii. You may correct, delete inaccuracies, or amend Your Personal Information by making the change on our member information page at http://www.csquare.in/#/privacy-policy or by contacting us through data.privacy@csquare.in ix. You can cancel or modify Your communications that You have elected to receive from the Website by sending us an email on salesenquiries@csquare.in x. You can opt to receive non-essential communications such as promotional and marketing-related information regarding the Company, the Website and the Services by sending Us an email at salesenquiries@csquare.in 
			</p>
			</div>
		</Container>
	)		
}
export default TermsConditionsContent;

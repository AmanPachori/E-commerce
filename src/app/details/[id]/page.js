"use client";
import { Navbar, Footer } from "@/components";
import { useEffect, useState } from "react";

const data = [
  {
    head: "Return & Refund Policy",
    body: `We understand how disappointing it can be when purchases do not work out, and we do everything we can to make the returns process fast and simple.

    Cancellation Policy
    Garden360 believes in helping its customers as much as possible and has a liberal cancellation policy. Under this policy:
    Cancellations will be considered only if the request is made before the order is shipped. After placing an order, you can check the order status on the order tracking page in your account section or through the link provided in the SMS. However, the cancellation request will not be entertained if the orders have been initiated through shipping.
    
    Returns
    1. If you need a refund, please ask us within 7 days after the delivery date. If 7 days have passed since the delivery date, unfortunately, we cannot refund or exchange for you.
    2. To be eligible for a return, the products of your order must be in the category of returnable, and all returned items must be in brand-new condition, uninstalled and/or non-assembled, unused, with no pieces missing, and with original tags and packaging. You must pay for the return or exchange cost if no quality issues are involved. We reserve the right to deduct the restocking fee from your refund when the returned item is not considered in its original packaging/condition or has already been damaged.
    3. We recommend you check the items within 24 hours of delivery and report to our customer service as soon as possible. Please offer a copy of your original order confirmation, confirm the item number & QTY of the defective item(s), and provide photographs or video showing the defect(s). Depending on the situation, we will be responsible for refunds, exchanges, or replacements as applicable within 7 days post-delivery.
    4. To complete your return, please get in touch with our customer support at greenloverscare@gmail.com or +91-9306308583, and we will be happy to assist you with your request.
    
    Refunds
    1. Once your return is received and inspected, we will email you to notify you that we have received your returned item. We will also notify you that your refund will be processed within 2-3 business days.
    2. Recheck your bank account if you are still waiting to receive your refund within the specified period. Then contact your credit card company; it may take some time before your refund is officially posted. There is often some processing time before a refund is posted. If you've done all of this and still have not received your refund, please contact us at greenloverscare@gmail.com or +91-9306308583.
    3. Please note that for credit card payment refund, please allow up to one billing cycle for your account to be credited. It is usually better to be patient and wait for the return process to run its course. Or, if an unusual delay occurs, feel free to contact us for assistance.
    Note: Returns or refunds for all orders and products will not be entertained. It depends on the product type and varies accordingly. Some additional fees may also be charged for return shipping costs or processing.

    Your satisfaction is our ultimate goal.`,
  },
  {
    head: "About Us",
    body: `Garden360 is India's first platform serving all kinds of gardening needs. We cover the following domains:- 
    • Renting a professional Mali for household or corporate.
    • Garden designing & setup services for creating your dream garden include indoor gardens, outdoor gardens, balcony gardens, vertical gardens, terrace gardens, office gardens, corporate garden designing, architecture-coordinated gardening services, etc.
    • Various gardening needs include plants, potters, seeds, seedlings, tools, manure, etc. An exceptional range of kitchen gardening products.`,
  },
  {
    head: "Privacy Policy",
    body: `
    At Garden360, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains the types of information collected and recorded by Garden360 and how we use it. Please get in touch with us if you have additional questions or require more information about our Privacy Policy. This Privacy Policy applies only to our online activities. It is valid for visitors to our website or the mobile app (a web view of the website) concerning the information they share and/or collect in Garden360.

Consent:-
By using our website or the mobile app (a web view of the website), you with this consent to our Privacy Policy and agree to its terms.

Information we collect:-
The personal information you are asked to provide and why you are asked to provide it will be made clear when we ask you to provide your personal information. If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.

How we use your information:-
We use the information we collect in various ways, including:- Provide, operating, and maintaining our website; Improving, personalize, and expanding our website; Understanding and analyzing how you use our website; Developing new products, services, features, and functionality based on the collected data; Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes; Find and prevent fraud; By sending you emails.

Log Files:-
Garden360 follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The purpose of the data is to analyze trends, administer the site, track users' movement on the website, and gather demographic information.

Cookies and Web Beacons:-
Like any other website, Garden360 uses 'cookies.' These cookies store information, including visitors' preferences and the pages on the website that the visitor accessed or visited. The data is used to optimize the users' experience by customizing our web page content based on visitors browser type and/or other information. Please read "What Are Cookies" from Cookie Consent for more general cookie information.

Advertising Partners Privacy Policies:-
You may consult this list to find the Privacy Policy for each of the advertising partners of Garden360. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons used in their respective advertisements and links that appear on Garden360, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or personalize the advertising content you see on websites you visit. Note that Garden360 has no access to or control over these cookies used by third-party advertisers.

Third-Party Privacy Policies:-
Garden360's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt out of specific options. You can choose to disable cookies through your browser options. To know more detailed information about cookie management with specific web browsers, it can be found on the browsers' respective websites.

Children's Information:-
Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Garden360 does not knowingly collect any Personal Identifiable Information from children under 13. Suppose your child provided this kind of information on our website. In that case, we strongly encourage you to contact us immediately, and we will do our best to remove such information from our records promptly.

Your satisfaction is our ultimate goal.`,
  },
  {
    head: "Payment Policy",
    body: `We have integrated Razorpay as our payment partner. Right now, we support the following payment modes: Domestic and International Credit & Debit cards, EMIs ( Credit/Debit Cards & Cardless), PayLater, Net banking from 58 banks, UPI and 8 mobile wallets, Google Pay, PhonePe, Bhim UPI, Amazon Pay, etc. Regarding online payment refunds, the refunds can take up to 7 business days. If you are still waiting to receive your refund within the specified period, please contact us at greenloverscare@gmail.com or +91-9306308583. If we don't receive the payment, you must submit proof from the bank.

    Your satisfaction is our ultimate goal.`,
  },
  {
    head: "Shipping Policy",
    body: `We ship from Gwalior, MP, India. Please allow 2-3 days (excluding weekends and holidays) for your order to be processed for shipping. We make every effort to fulfill orders as quickly as possible.
    Successfully placed orders will receive an SMS with the tracking page link. If you do not receive an SMS, please wait and check your spam folder.
    Delivery time is generally 3-9 business days post-shipping. However, your orders may be delayed by days or weeks due to Covid-19 or events that may not be in our control. Sometimes the delivery schedule may also be affected due to the unavailability of stocks or unforeseen circumstances.
    We only ship domestically. If you haven't received your domestic order within the specified time for shipping confirmation, please get in touch with us at greenloverscare@gmail.com or +91-9306308583 with your name and order number. We will look into it for you.
    If you need assistance with your order (modifying order, order cancellation) or wish to expedite the shipping, please get in touch with us immediately at +91-9306308583.
    We cannot make any changes to your order after it has shipped. Please review and ensure that you have entered the correct address. We are not responsible for non-delivery due to errors in your lesson. In such cases, we will be unable to refund the original order.
    Shipping charges vary according to the order value, delivery pin code, mode of shipping, order weight (including packaging) and order size (including packaging), etc. Shipping charges will be displayed on the final checkout page.
    Note:- The product images on the website or mobile app are only for depiction purposes. Actual products may vary in shape, size, color, variety, etc. The dimensions and other specifications provided with each product is just an approximation. The actual product may vary in specific parameters.

    Your satisfaction is our ultimate goal.`,
  },
  {
    head: "Terms and Condition",
    body: `At Garden360, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information collected and recorded by Garden360 and how we use it. If you have additional questions or require more information about our Privacy Policy, please get in touch with us. This Privacy Policy applies only to our online activities. It is valid for visitors to our website or the mobile app (a web view of the website) about the information they share and/or collect in Garden360.

    Consent:-
    By using our website or the mobile app (a web view of the website), you with this consent to our Privacy Policy and agree to its terms.
    
    Information we collect:-
    The personal information you are asked to provide and why you are asked to provide it will be made clear when we ask you to provide your personal information. If you contact us directly, we may receive additional information about you, such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
    
    How we use your information:-
    We use the information we collect in various ways, including:- Provide, operating, and maintaining our website; Improving, personalize, and expanding our website; Understanding and analyzing how you use our website; Developing new products, services, features, and functionality based on the collected data; Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes; Find and prevent fraud; By sending you emails.
    
    Log Files:-
    Garden360 follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any personally identifiable information. The information aims to analyze trends, administer the site, track user's movement, and gather demographic information.
    
    Cookies and Web Beacons:-
    Like any other website, Garden360 uses 'cookies.' These cookies store information, including visitors' preferences and the pages on the website that the visitor accessed or visited. The data is used to optimize the users' experience by customizing our web page content based on visitors browser type and/or other information. Please read "What Are Cookies" from Cookie Consent for more general cookie information.
    
    Advertising Partners Privacy Policies:-
    You may consult this list to find the Privacy Policy for each of the advertising partners of Garden360. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons used in their respective advertisements and links that appear on Garden360, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or personalize the advertising content you see on websites you visit. Note that Garden360 has no access to or control over these cookies used by third-party advertisers.
    
    Third-Party Privacy Policies:-
    Garden360's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about opting out of specific options. You can choose to disable cookies through your browser options. To know more detailed information about cookie management with specific web browsers, it can be found on the browsers' respective websites.
    
    Children's Information:-
    Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Garden360 does not knowingly collect any Personal Identifiable Information from children under 13. Suppose you think that your child provided this kind of information on our website. In that case, we strongly encourage you to contact us immediately, and we will try our best to remove such information from our records promptly.
    Note:- The product images on the website or mobile app are only for depiction purposes. Actual products may vary in shape, size, color, variety, etc. The dimensions and other specifications provided with each product is just an approximation. The actual product may vary in specific parameters.

    Your satisfaction is our ultimate goal.`,
  },
];
export default function Page({ params }) {
  const [head, setHead] = useState();
  const [body, setBody] = useState();

  useEffect(() => {
    const ran = () => {
      if (params.id === "about") {
        setHead(data[1].head);
        setBody(data[1].body);
      } else if (params.id === "return") {
        setHead(data[0].head);
        setBody(data[0].body);
      } else if (params.id === "privacy") {
        setHead(data[2].head);
        setBody(data[2].body);
      } else if (params.id === "paymentpolicy") {
        setHead(data[3].head);
        setBody(data[3].body);
      } else if (params.id === "shipping") {
        setHead(data[4].head);
        setBody(data[4].body);
      } else if (params.id === "terms") {
        setHead(data[5].head);
        setBody(data[5].body);
      }
    };
    ran();
  }, []);
  return (
    <>
      <Navbar />
      <div style={{ minheight: "60vh" }} className="container mx-auto my-5">
        <h1 className="text-center py-3  font-bold text-3xl ">{head}</h1>
        <p
          style={{ whiteSpace: "pre-line" }}
          className="py-2 font-medium text-xl"
        >
          {" "}
          {body}
        </p>
      </div>
      <Footer />
    </>
  );
}

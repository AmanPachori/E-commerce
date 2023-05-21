"use client";
import { Navbar, Footer } from "@/components";

const data = [
  {
    head: "Return & Refund Policy",
    body: `We understand how disappointing it can be when purchases do not work out, and we do everything we can to make the returns process fast and simple.

    Cancellation Policy
    Plantose believes in helping its customers as far as possible and has, therefore, a liberal cancellation policy. Under this policy:
    Cancellations will be considered only if the request is made before the order is shipped. You can check the order status on the order tracking page in your account section or through the link provided in the SMS after placing an order. However, the cancellation request will not be entertained if the orders have been initiated through the process of shipping.
    
    Returns
    1. If you need a refund, please ask us within 7 days after the delivery date. If 7 days have passed since the date of delivery, unfortunately, we will not be able to refund or exchange for you.
    2. To be eligible for a return, the products of your order must be in the category of returnable and all returned items must be in brand-new condition, uninstalled and/or non-assembled, unused, with no pieces missing, and with original tags and packaging. You must pay for the return or exchange cost if no quality issues are involved. We reserve the right to deduct the restocking fee from your refund when the returned item is not considered to be in its original packaging/condition or has already been damaged.
    3. We recommend you check the items within 24 hours of delivery and report to our customer service as soon as possible. Please offer a copy of your original order confirmation, confirm the item number & QTY of the defective item(s), and photographs or video clearly showing the defect(s). Depending on the situation, we will be responsible for refunds, exchanges, or replacements as applicable within 7 days post-delivery.
    4. To complete your return, please contact our customer support at greenloverscare@gmail.com or +91-9306308583 and we are happy to assist you with your request.
    
    Refunds
    1. Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you that your refund will be processed within 2-3 business days.
    2. In case you will not receive your refund within the specified period then first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us at greenloverscare@gmail.com or +91-9306308583.
    3. Please note that for credit card payment refund, please allow up to one billing cycle for your account to be credited. It is usually better to be patient and wait for the return process to run its course. Or if an unusual delay occurs, feel free to contact us for assistance.
    Note: Returns or refunds will not be entertained for all orders and products. It depends on the product type and varies accordingly. Some additional fees may also be charged for return shipping costs or processing.
    
    Your satisfaction is our ultimate goal`,
  },
];
export default function Page({ params }) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5">
        <h1 className="text-center py-3  font-bold text-3xl ">
          {data[0].head}
        </h1>
        <p
          style={{ whiteSpace: "pre-line" }}
          className="py-2 font-medium text-xl"
        >
          {" "}
          {data[0].body}
        </p>
      </div>
      <Footer />
    </>
  );
}

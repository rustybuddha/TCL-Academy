import axios from "axios";
import crypto from "crypto";

// Constants
const PhonePeURL = "https://api-preprod.phonepe.com/apis/hermes";
const ProdPhonePeURL = "https://api.phonepe.com/apis/hermes";
const TestMerchantId = "PGTESTPAYUAT86";
const ProdMerchantId = "M222GU0OFKMJU";
const SaltIndex = "1";
const SaltKey = "96434309-7796-489d-8924-ab56988a6076";
const ProdSaltKey = "9f37e36f-b58f-4e34-9a28-cb7fdd686d02";

export async function sendPhonePeRequest(redirectURL, callbackURL, merchantUserID, merchantTransactionID, amount, prod = false) {
  const merchantID = prod ? ProdMerchantId : TestMerchantId;
  const phonePeURL = prod ? ProdPhonePeURL : PhonePeURL;
  const saltKey = prod ? ProdSaltKey : SaltKey;

  // Prepare the request body
  const requestBody = {
    merchantId: merchantID,
    merchantTransactionId: merchantTransactionID,
    merchantUserId: merchantUserID,
    amount: amount * 100, // Convert to paise
    redirectUrl: redirectURL,
    redirectMode: "REDIRECT",
    callbackUrl: callbackURL,
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };

  // Convert request body to Base64 string
  const base64Payload = Buffer.from(JSON.stringify(requestBody)).toString("base64");

  // Generate X-Verify header
  const xVerify = generateXVerifyWithSalt(base64Payload, saltKey);

  // Make the HTTP request
  try {
    const response = await axios.post(`${phonePeURL}/pg/v1/pay`, {
      request: base64Payload,
    }, {
      headers: {
        "Content-Type": "application/json",
        "X-VERIFY": xVerify,
      },
    });

    const redirectInfo = response?.data?.data?.instrumentResponse?.redirectInfo;

    // Ensure redirect URL exists
    if (!redirectInfo || !redirectInfo.url) {
      throw new Error("PhonePe URL for payment not created, try again!");
    }

    return redirectInfo.url;
  } catch (error) {
    throw new Error(`Error in sending request to PhonePe: ${error.message}`);
  }
}

// Generate the X-Verify header
function generateXVerifyWithSalt(base64Payload, saltKey) {
  const data = `${base64Payload}/pg/v1/pay${saltKey}`;
  const hash = crypto.createHash("sha256").update(data).digest("hex");
  return `${hash}###${SaltIndex}`;
}
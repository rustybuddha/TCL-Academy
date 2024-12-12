import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "jcnlheos",
  dataset: "production",
  apiVersion: "2021-10-21",
  token:
    "skFa4goQ3Im1LnzChA7FbEiEs62uY46WyqnARS7oFAjd36UJdP0RI87kDKtBmIihi6ksE2FHUPTQHjEcUMkO1PLxb5GwV2UZx28LbTCP6iM3qRV2cOkY1ydT1wRl6P26zPCAdMFppIPjnn5LcPdYySedqedvkVQTCcyQrdiSH4rgnSnLcog4",
  useCdn: false,
});

export default client;

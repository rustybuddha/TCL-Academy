import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "e3lypy0y",
  dataset: "production",
  apiVersion: "2021-10-21",
  token:
    "skhJTprFPb8uVc54cwWXHovYU9Xh0gpmZZu7Yfn3WqwzKodmfOIpTNBDHewkF7o9J21VoPKv1UGJIu3UIZzAXNZuBT7zpoW6X7Iewh7uRkTObWqzYVOMdBF2nNrObE4KKNRAn628ZWvAFzv4nS0Lfqdcj8GoNmetwfrNz7iaPNCdNCSTFxiq",
  useCdn: false,
});

export default client;

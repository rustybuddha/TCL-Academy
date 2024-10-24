import { writable } from "svelte/store";

export const metaInfo = writable({
  title: "",
  description: "",
  ogImage: "",
});

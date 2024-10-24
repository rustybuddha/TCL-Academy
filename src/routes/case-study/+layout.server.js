// import client from "$lib/sanityClient.js" ; 
// import { superValidate, message } from "sveltekit-superforms/server";
// import { consultRequestSchema } from "$lib/schemas.js";


// export async function load({ params }) 
// {
//     const data = await client.fetch(`*[_type == "testimonials"]`);
//     const form = await superValidate(consultRequestSchema);
//     if (data) {
//       return {
//         testimonials: data,
//         form,
//       };
//     }
//     return {
//       status: 500,
//       body: new Error("Internal Server Error"),
//     };
// }
  
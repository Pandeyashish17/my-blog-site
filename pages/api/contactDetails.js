import sanityClient from "@sanity/client";



const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};
const client = sanityClient(config);

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const { name, email, message } = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "contact",
            name: name,
            email: email,
            message: message,
          })
          .then((res) => {
            console.log(`message sent`);
          });
        res.status(200).json({ msg: `sent!!!` });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }

      break;
  }
}

export default async function getAllData() {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/allProducts`, {
    cache: "no-store",
  });
  if (!res.ok) return "products not found";

  return res.json()
}

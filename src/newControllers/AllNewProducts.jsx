export default async function getData() {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/newProducts`, {
    cache: "no-store",
  });
  if (!res.ok) return "products not found";

  const newPro = await res.json();
  return newPro.data;
}

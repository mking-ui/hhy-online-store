export default async function getSingleNewproduct(id) {
  const apiUrl = process.env.API_URL;
  const res = await fetch(`${apiUrl}/api/newProducts/${id}`, {
    cache: "no-store",
  });
  const allNewPrd = await res.json();
  return allNewPrd.data;
}

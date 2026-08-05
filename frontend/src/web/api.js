const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function submitForm(type, data) {
  const response = await fetch(`${API_URL}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, ...data }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.message || "Unable to submit the form");
  }

  return result;
}

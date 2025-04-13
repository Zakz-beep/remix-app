import { json } from "@remix-run/node";

export async function loader() {
  return json({ message: "Hello from API!" }, { status: 200 });
}

export async function action() {
  return json({ error: "Method not allowed" }, { status: 405 });
}
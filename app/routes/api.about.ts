import { json } from "@remix-run/node";

export async function loader() {
  return json({ message: "Hello from API!" }, { status: 200 });
}

export async function POST(request) {
  const body = await request.json();
  const message = body.message;

  if (message.toLowerCase() === "hi") {
    return Response.json({ reply: "Hello" });
  }

  return Response.json({ reply: "I didn’t understand that." });
}

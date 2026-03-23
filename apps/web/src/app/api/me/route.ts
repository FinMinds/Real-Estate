export async function GET(): Promise<Response> {
  return Response.json({
    status: 'ok',
    service: 'me',
    placeholder: true
  });
}

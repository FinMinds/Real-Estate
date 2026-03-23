export async function GET(): Promise<Response> {
  return Response.json({
    status: 'ok',
    service: 'auth',
    placeholder: true
  });
}

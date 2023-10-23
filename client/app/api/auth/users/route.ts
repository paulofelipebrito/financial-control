import { NextResponse } from "next/server";

interface NewUserRequest {
  name: string;
  email: string;
  password: string;
}

interface NewUserResponse {
  id: string;
  name: string;
  email: string;
  role: string;
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest;

  // send api req...

  return NextResponse.json({
    user: {
      id: 'test',
      email: 'test',
      name: 'test',
      role: 'test'
    }
  })
};
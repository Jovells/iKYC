import { fetchApplicantData } from "../../../zkPass/kyc/sumsub";
export async function GET(
  Request: Request,
  { params }: { params: { userId: string } }
) {
  console.log("GET /api/user/[userId]", params);
  const applicant = await fetchApplicantData(params.userId);
  return new Response(JSON.stringify(applicant));
}

import { useQuery } from "@tanstack/react-query";
import { sendEmail } from "../api/Resend";

export function useSendEmail() {
  const query = useQuery({
    queryKey: [""],
    queryFn: sendEmail,
  });

  return { query };
}

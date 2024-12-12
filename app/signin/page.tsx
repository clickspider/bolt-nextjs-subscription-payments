import { redirect } from "next/navigation";
import { getDefaultSignInView } from "@/utils/auth-helpers/settings";
import { cookies, type UnsafeUnwrappedCookies } from "next/headers";

export default function SignIn() {
  const preferredSignInView =
    (cookies() as unknown as UnsafeUnwrappedCookies).get("preferredSignInView")
      ?.value || null;
  const defaultView = getDefaultSignInView(preferredSignInView);

  return redirect(`/signin/${defaultView}`);
}

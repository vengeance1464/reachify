import { signIn } from "@/auth";
import { Button } from "../button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/dashboard" });
      }}
    >
      <Button className="h-10" type="submit">
        Signin with Google
      </Button>
    </form>
  );
}

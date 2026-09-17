"use client";

import { DropdownMenuItem } from "./ui/dropdown-menu";
import { signOut } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  return (
    <DropdownMenuItem
      onClick={async () => {
        await signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/sign-in");
            },
            onError: () => {
              alert("Failed to sign out");
            },
          },
        });
      }}
    >
      Log Out
    </DropdownMenuItem>
  );
}
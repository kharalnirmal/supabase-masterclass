import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const SignUpSuccess = () => {
  return (
    <main className="flex justify-center items-center bg-zinc-950 px-4 min-h-screen">
      <Card className="bg-zinc-900 p-8 border border-zinc-800 w-full max-w-md">
        <h1 className="text-emerald-800 text-4xl text-center">
          Check Your Email
        </h1>
        <p className="mb-6 text-zinc-300 text-lg text-center">
          We've sent a confirmation email to your inbox. Please open it and
          follow the instructions to verify your account.
        </p>

        <Link href="/auth/login">
          <Button
            className={
              "w-full bg-emerald-600 hover:bg-emerald-700 text-zinc-200"
            }
          >
            Back to Login
          </Button>
        </Link>
      </Card>
    </main>
  );
};

export default SignUpSuccess;

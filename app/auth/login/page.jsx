"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const handleLogin = () => {};
  return (
    <main className="flex justify-center items-center bg-zinc-950 px-4 min-h-screen">
      <Card className="bg-zinc-900 p-8 border-zinc-800 w-full max-w-md">
        <h1 className="mb-6 font-bold text-emerald-400 text-3xl">
          Submit Form
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-zinc-300 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setemail(e.target.value)}
              placeholder="example@example.com"
              className="bg-zinc-800 border-zinc-700 w-full text-zinc-50"
            />
          </div>
          <div>
            <label
              className="block mb-2 font-medium text-zinc-300 text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setpassword(e.target.value)}
              placeholder="**********"
              className="bg-zinc-800 border-zinc-700 w-full text-zinc-50"
            />
          </div>

          {error && (
            <div className="bg-red-900/20 p-3 border border-red-800 rounded text-red-400 text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className={"w-full bg-emerald-600 hover:bg-emerald-700"}
          >
            {loading ? "Logging...." : "Login"}
          </Button>
        </form>

        <p className="mt-6 text-zinc-400 text-center">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-emerald-400 hover:text-emerald-300"
          >
            Sign Up
          </Link>
        </p>
      </Card>
    </main>
  );
};

export default LoginPage;

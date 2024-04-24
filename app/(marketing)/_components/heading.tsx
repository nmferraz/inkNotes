"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    return (
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:6xl font-bold">
          Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
          <span className="underline">inkNotes</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          inkNotes is the connected workspaces where <br />
          better, faster work happens.
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href="/documents">
              Enter inkNotes
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Get inkNotes free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </SignInButton>
        )}
      </div>
    );
}
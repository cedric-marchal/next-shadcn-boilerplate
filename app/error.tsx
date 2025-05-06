"use client";

import { HomeIcon, RefreshCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-destructive text-3xl font-bold">
            500 - Server Error
          </CardTitle>
          <CardDescription>
            An error occurred while loading this page
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-4 pt-6">
          <p className="text-muted-foreground text-center">
            The server encountered an error while processing your request.
          </p>
          {error.digest && (
            <p className="text-muted-foreground text-center text-xs">
              Error code: {error.digest}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => reset()}
            className="gap-2"
          >
            <RefreshCcw className="h-4 w-4" />
            Retry
          </Button>
          <Button variant="default" size="lg" asChild className="gap-2">
            <Link href="/">
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

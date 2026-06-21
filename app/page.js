import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <form action="/auth/logout" method="post">
        <Button variant="outline" type="submit">
          Logout
        </Button>
      </form>
    </div>
  );
};

export default page;

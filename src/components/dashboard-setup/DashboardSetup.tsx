import { AuthUser } from "@supabase/supabase-js";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "@radix-ui/react-label";
import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface DashboardSetupProps {
  user: AuthUser;
  subscription: {} | null;
}

const DashboardSetup: React.FC<DashboardSetupProps> = () => {
  return (
    <Card
      className="w-[800px]
      h-screen
      sm:h-auto
  "
    >
      <CardHeader>
        <CardTitle>Create A Workspace</CardTitle>
        <CardDescription>
          Lets create a private workspace to get you started.You can add
          collaborators later from the workspace settings tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>hi</div>
      </CardContent>
    </Card>
  );
};

export default DashboardSetup;

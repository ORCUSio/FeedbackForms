"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function page() {
  const route = useRouter();
  const handleLanding = () => {
    route.push("/custom");
  };
  useEffect(() => {
    handleLanding();
  }, []);
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      holla ^+^
    </div>
  );
}

export default page;

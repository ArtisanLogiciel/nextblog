import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="mw-auto mx-auto w-full max-w-7xl">{children}</div>;
}

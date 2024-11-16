// https://github.com/t3dotgg/1app5stacks/blob/main/next-rsc-version/src/app/turbo/page.tsx
import { cookies } from "next/headers";
import { Suspense } from "react";

async function ServerPage() {
  const cookieStore = await cookies();

  return <>Hello from Server</>;
}

export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ServerPage />
      </Suspense>
    </div>
  );
}

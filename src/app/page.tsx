import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1>Hello from S3</h1>
      <p>
        This is project is a template for a Next.js app that is deployed to AWS
        S3.
      </p>
      <button className="px-4 py-2 rounded-lg bg-blue-500 text-white">
        <Link href="/about">Go to About Page</Link>
      </button>
    </main>
  );
}

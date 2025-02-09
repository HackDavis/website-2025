export default function CelebrateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-center border border-red-500 text-background-dark">
      <div className="flex flex-col gap-8 rounded-xl bg-gray-100/50 p-[5%] pl-[10%] pr-[10%] backdrop-blur-sm">
        <div className="flex flex-col items-start justify-center text-start">
          <h1 className="text-4xl font-bold">Celebrate our past with us!</h1>
          <p>
            We've been through a lot together, and we're proud of what we've
            achieved. Let's celebrate our past with us!
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}

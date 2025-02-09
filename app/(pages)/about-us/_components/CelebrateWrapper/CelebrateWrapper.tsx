export default function CelebrateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="border border-red-500 pt-8 text-background-dark">
      <div className="flex flex-col gap-4 rounded-3xl bg-gray-100/50 backdrop-blur-sm">
        <div className="flex flex-col items-start justify-center gap-4 p-8 pb-0 text-start">
          <h1 className="text-4xl font-bold">Celebrate our past with us!</h1>
          <p className="text-base font-semibold">
            We could not have done any of this without you. Your support means
            the world!
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}

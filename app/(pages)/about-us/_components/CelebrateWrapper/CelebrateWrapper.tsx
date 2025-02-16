export default function CelebrateWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="my-auto w-full text-background-dark sm:p-[calc(13%-4rem)]">
      <div className="flex flex-col gap-8 rounded-3xl bg-gray-100/50 backdrop-blur-sm md:gap-20">
        <div className="flex flex-col items-start justify-center gap-4 px-[13%] pb-0 pt-12 text-start md:px-16 md:pt-8">
          <div className="w-[90%]">
            <h1 className="text-4xl font-bold">Celebrate our past with us!</h1>
          </div>
          <p className="text-base font-semibold md:text-lg">
            We could not have done any of this without you. Your support means
            the world!
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}

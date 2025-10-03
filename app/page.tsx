import Image from "next/image";
import Form from "./components/form";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.jpeg"
          alt="My logo"
          width={300}
          height={38}
          priority
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Australia Delivery Cost Calculator</h1>
          <Form />
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Copyright AUO.Dev ©{new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

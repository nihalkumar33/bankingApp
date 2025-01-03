import Mobilenav from "@/components/Mobilenav";
import Sidebar  from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/dist/server/api-utils";
import Image from 'next/image'

export default async function RootLayout({ 
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in');

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>

      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo"/>

          <div>
            <Mobilenav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}

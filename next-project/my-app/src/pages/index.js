import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {useSession,signIn,signOut} from 'next-auth/react'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const session = useSession();
  // console.log(session);

  if(session.data == null ){
    return <button onClick={signIn}>Login</button>
  }

  return (
    <div>
      <h2>Homepage</h2>
      <h3>Authentication using next-auth</h3>
      <img src={session.data?.user.image} width={200}/>
      <h1>hello {session.data?.user.name}</h1>
      <h1>{session.data?.user.email}</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  );
}

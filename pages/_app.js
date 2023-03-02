import '@/styles/globals.css';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, } from "@clerk/nextjs"; 
import Sidebar from '../components/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider frontendApi={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </ClerkProvider>
  );
}

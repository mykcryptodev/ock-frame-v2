import { Metadata } from "next";

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../components/app'), {
  ssr: false,
});

const appUrl = "https://ock-frame-v2.vercel.app";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/og.png`,
  button: {
    title: "Launch Frame",
    action: {
      type: "launch_frame",
      name: "Farcaster Frames v2 Demo",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Farcaster Frames v2 OnchainKit Demo",
    openGraph: {
      title: "Farcaster Frames v2 OnchainKit Demo",
      description: "A Farcaster Frames v2 OnchainKit demo app.",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}


export default function MyApp() {
  return (
    <div className="flex flex-col min-h-screen font-sans dark:bg-background dark:text-white bg-white text-black">
      <App />
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import sdk from "@farcaster/frame-sdk";
import { SwapDefault } from "@coinbase/onchainkit/swap";

export default function Swap() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

  useEffect(() => {
    const load = async () => {
      sdk.actions.ready();
    };
    if (sdk && !isSDKLoaded) {
      setIsSDKLoaded(true);
      load();
    }
  }, [isSDKLoaded]);

  if (!isSDKLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-4 px-2">
      <SwapDefault to={[]} from={[]} />
    </div>
  );
}

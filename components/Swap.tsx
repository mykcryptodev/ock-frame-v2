"use client";

import { useEffect, useState } from "react";
import sdk, {
  type FrameContext,
} from "@farcaster/frame-sdk";
import { SwapAmountInput, SwapButton, SwapMessage, SwapToast, SwapToggleButton, Swap} from "@coinbase/onchainkit/swap";
import { Token } from "@coinbase/onchainkit/token";

export default function SwapComponent() {
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const [, setContext] = useState<FrameContext>();

  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "",
  };

  const USDCToken: Token = {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC",
    symbol: "USDC",
    image: "",
  };

  const swappableTokens: Token[] = [ETHToken, USDCToken];
  useEffect(() => {
    const load = async () => {
      setContext(await sdk.context);
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
    <div className="w-full">
      <Swap className="max-w-sm mx-auto">
        <SwapAmountInput
          label="Sell"
          swappableTokens={swappableTokens}
          token={ETHToken}
          type="from"
        />
        <SwapToggleButton />
        <SwapAmountInput
          label="Buy"
          swappableTokens={swappableTokens}
          token={USDCToken}
          type="to"
        />
        <SwapButton />
        <SwapMessage />
        <SwapToast />
      </Swap> 
    </div>
  );
}

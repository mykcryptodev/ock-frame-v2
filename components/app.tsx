"use client";

import { Wallet, WalletDropdown, WalletDropdownDisconnect, WalletDropdownLink } from "@coinbase/onchainkit/wallet";
import { ConnectWallet } from "@coinbase/onchainkit/wallet";
import { EthBalance } from "@coinbase/onchainkit/identity";
import { Address, Name } from "@coinbase/onchainkit/identity";
import { Avatar, Identity } from "@coinbase/onchainkit/identity";
import dynamic from "next/dynamic";

const Swap = dynamic(() => import("./Swap"), { ssr: false });

export default function App() {
  return (
    <>
      <header className="pt-4 pr-4">
        <div className="flex justify-end">
          <div className="wallet-container">
            <Wallet>
              <ConnectWallet>
                <Avatar className="h-6 w-6" />
                <Name />
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                  <EthBalance />
                </Identity>
                <WalletDropdownLink
                  icon="wallet"
                  href="https://keys.coinbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wallet
                </WalletDropdownLink>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-3xl">
          <Swap />
        </div>
      </main>
    </>
  );
}

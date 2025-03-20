// XionPlay Frontend - Next.js Starter (TypeScript)
// Install dependencies: npm install next react react-dom tailwindcss ethers wagmi viem @types/react @rainbow-me/rainbowkit

import { useState } from "react";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import "../styles/globals.css";
import type { NextPage } from "next";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({ appName: "XionPlay", projectId: "your_project_id", chains });

const wagmiClient = createConfig({ autoConnect: true, connectors, publicClient, webSocketPublicClient });

const Home: NextPage = () => {
  const [account, setAccount] = useState<string | null>(null);

  return (
    <WagmiConfig config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
          <h1 className="text-4xl font-bold">Welcome to XionPlay</h1>
          <p className="mt-2">Stake, Play & Earn in Real-Time</p>
          <div className="mt-5">
            <ConnectButton />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default Home;
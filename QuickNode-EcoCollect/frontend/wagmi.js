import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { base, baseSepolia } from 'wagmi/chains'; 
import { coinbaseWallet, metaMask } from 'wagmi/connectors';
 
export function getConfig() {
  return createConfig({
    chains: [baseSepolia], 
    multiInjectedProviderDiscovery:true,
    connectors: [
      metaMask({ shimDisconnect: true }),
      coinbaseWallet({
        appName: "OnchainKit",
        preference: 'all',
        version: '4',
      }),
    ],
    // storage: createStorage({
    //   storage: cookieStorage,
    // }),
    ssr: true,
    transports: {
      [baseSepolia.id]: http(), 
    },
  });
}
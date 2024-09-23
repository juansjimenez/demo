import { RouterAbi } from "@/abi/RouterAbi";
import { config } from "@/wagmi";
import { useQuery } from "@tanstack/react-query";
import { readContract } from "@wagmi/core";
import { Address } from "viem";
import { Market } from "./useMarket";
import { Position, useMarketPositions } from "./useMarketPositions";

export const useWinningPositions = (account: Address | undefined, market: Market, router: Address) => {
  const { data: positions = [] } = useMarketPositions(account, market);

  return useQuery<Position[] | undefined, Error>({
    enabled: !!router && positions.length > 0,
    queryKey: ["useWinningPositions", router],
    queryFn: async () => {
      const winningOutcomes = await readContract(config, {
        abi: RouterAbi,
        address: router!,
        functionName: "getWinningOutcomes",
        args: [market.conditionId],
      });

      return positions.map((position, i) => {
        if (!winningOutcomes[i]) {
          position.balance = BigInt(0);
        }
        return position;
      });
    },
  });
};

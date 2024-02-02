import { useMutation } from "@tanstack/react-query";
import { waitForTransactionReceipt, writeContract } from "@wagmi/core";
import { Address, TransactionReceipt, parseUnits, stringToHex } from "viem";
import { ConditionalTokensAbi } from "../abi/ConditionalTokensAbi";
import { generateBasicPartition } from "../lib/conditional-tokens";
import { config } from "../wagmi";

interface MergePositionProps {
  account: Address;
  conditionalTokens: Address;
  conditionId: `0x${string}`;
  collateralToken: Address;
  collateralDecimals: number;
  outcomeSlotCount: number;
  amount: number;
}

async function mergePositions(props: MergePositionProps): Promise<TransactionReceipt> {
  const parsedAmount = parseUnits(String(props.amount), props.collateralDecimals);

  const hash = await writeContract(config, {
    address: props.conditionalTokens,
    abi: ConditionalTokensAbi,
    functionName: "mergePositions",
    args: [
      props.collateralToken,
      stringToHex("", { size: 32 }),
      props.conditionId,
      generateBasicPartition(props.outcomeSlotCount),
      parsedAmount,
    ],
  });

  const transactionReceipt = await waitForTransactionReceipt(config, {
    confirmations: 0,
    hash,
  });

  return transactionReceipt as TransactionReceipt;
}

export const useMergePositions = (onSuccess: (data: TransactionReceipt) => unknown) => {
  return useMutation({
    mutationFn: mergePositions,
    onSuccess,
  });
};

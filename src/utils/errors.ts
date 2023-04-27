import { type TRPC_ERROR_CODE_KEY } from "@trpc/server/rpc";
import toast from "react-hot-toast";

export const handleTRPCErrors = ({
  message,
  code,
}: {
  message?: string;
  code?: TRPC_ERROR_CODE_KEY;
}): { isNotFound: boolean } => {
  code;
  if (code === "NOT_FOUND") {
    return { isNotFound: true };
  }
  if (message) {
    const regex = /(?<=TRPCError:\s)[^\n]+/;
    const formattedMessage = message.match(regex);
    if (formattedMessage) {
      toast.error(formattedMessage[0]);
    } else {
      toast.error("Something went wrong! Please try again later");
    }
  } else {
    toast.error("Something went wrong! Please try again later");
  }
  return { isNotFound: false };
};

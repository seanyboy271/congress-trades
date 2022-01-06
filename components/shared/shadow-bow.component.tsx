import { Box } from "@chakra-ui/react";

export const ShadowBox = ({ children }: any) => {
  return (
    <Box
      borderRadius={"10px"}
      height="100%"
      padding="1% 2% 1% 2%"
      bg={"red.100"}
      boxShadow={"md"}
    >
      {children}
    </Box>
  );
};

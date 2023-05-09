import { Flex } from "@chakra-ui/react";
import React from "react";

type BrandBorderDividerProps = {};

const BrandBorderDivider: React.FC<BrandBorderDividerProps> = () => {
  return (
    <Flex marginTop={"10px"} border={"1px solid"} borderColor={"brand.100"} />
  );
};
export default BrandBorderDivider;

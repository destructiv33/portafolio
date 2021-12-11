import {
  Box,
  Icon,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";

const SkillItem = ({ icon, label }) => (
  <Tooltip label={label} bo>
    <Box
      borderRadius="lg"
      bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")}
      p={3}
      mt={4}
      mb={6}
      align="center"
    >
      <Icon as={icon} w={16} h={16} />
    </Box>
  </Tooltip>
);

export default SkillItem;

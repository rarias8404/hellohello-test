import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const OptionsContainerSkeleton = () => {
  return (
    <Stack spacing={2} width="100%">
      <Skeleton variant="rounded" height={80} />
      <Skeleton variant="rounded" height={80} />
      <Skeleton variant="rounded" height={80} />
    </Stack>
  );
};

export default OptionsContainerSkeleton;

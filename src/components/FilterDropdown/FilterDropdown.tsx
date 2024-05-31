import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

interface FilterDropdownProps {
  anchorEl: Element | (() => Element) | null | undefined;
  onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
}

const FilterDropdown = ({ anchorEl, onClose }: FilterDropdownProps) => {
  return (
    <div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </div>
  );
};

export default FilterDropdown;

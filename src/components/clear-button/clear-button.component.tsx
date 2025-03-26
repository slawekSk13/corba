import { Button } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";

export const ClearButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate({})}
      sx={{ position: "absolute", right: "0", top: "2px" }}
      size={"small"}
    >
      Wyczyść filtry
    </Button>
  );
};

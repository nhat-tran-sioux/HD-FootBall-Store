import { Box } from "@mui/material";

const SignIn = () => {
  console.log(">>do sign in");
  return (
    <Box
      bgcolor={"blue"}
      sx={{
        width: 300,
        height: 300,
        backgroundColor: "primary.dark",
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      Sign In
    </Box>
  );
};

export default SignIn;

import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { red } from "@mui/material/colors";
export default function Team() {
  const theme = useTheme();
  const columns = [
    {
      field: "ID",
      headerName: "ID",

      align: "center",
      headerAlign: "center",
      width: 33,
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Email",
      headerName: "Email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Age",
      headerName: "Age",

      align: "center",
      headerAlign: "center",
    },
    {
      field: "Phone",
      headerName: "Phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "Access",
      headerName: "Access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { Access } }) => {
        return (
          <>
            <Box
              sx={{
                p: "8px",
                mx: "auto",
                width: "99px",
                bgcolor:
                  Access === "User"
                    ? theme.palette.primary.dark
                    : Access === "Admin"
                    ? theme.palette.secondary.dark
                    : theme.palette.success.dark,
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              {Access === "User" ? (
                <LockOpenOutlinedIcon
                  fontSize="small"
                  sx={{ color: theme.palette.grey[100] }}
                />
              ) : Access === "Admin" ? (
                <AdminPanelSettingsOutlinedIcon
                  fontSize="small"
                  sx={{ color: theme.palette.grey[100] }}
                />
              ) : (
                <SecurityOutlinedIcon
                  fontSize="small"
                  sx={{ color: theme.palette.grey[100] }}
                />
              )}
              <Typography
                sx={{ fontSize: "15px" }}
                color={theme.palette.grey[100]}
              >
                {Access}
              </Typography>
            </Box>
          </>
        );
      },
    },
  ];
  return (
    <div style={{ height: 600, width: "98%", marginInline: "auto" }}>
      <DataGrid
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </div>
  );
}

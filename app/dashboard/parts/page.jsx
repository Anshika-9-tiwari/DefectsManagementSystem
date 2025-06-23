"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Typography,
  Stack,
  Button,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Parts() {
  const [parts, setParts] = useState([]);
  const router = useRouter();
  const theme = useTheme();

  // Responsive breakpoints for layout direction and typography adjustments
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const res = await fetch("/api/dashboard/parts");
        if (!res.ok) {
        const errorData = await res.json();
        console.error("Failed to fetch parts:", errorData?.error || res.status);
        return;
      }
        const data = await res.json();
        if (!Array.isArray(data)) {
        console.error("Expected an array but got:", data);
        return;
      }

        setParts(data);
      } catch (error) {
        console.error("Failed to fetch parts:", error);
      }
    };

    fetchParts();
  }, []);

  const handleRemove = async (id) => {
    if (!confirm("Are you sure you want to delete this part?")) return;
    try {
      const res = await fetch(`/api/dashboard/parts/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setParts((prev) => prev.filter((part) => part.id !== id));
      } else {
        console.error("Failed to delete part");
      }
    } catch (err) {
      console.error("Error deleting part:", err);
    }
  };

  return (
    <Box
      sx={{
        margin: "2% 2%",
        padding: 2,
        bgcolor: "#f9fafb",
        borderRadius: 2,
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack spacing={3}>
        {/* Header + Icon */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: 1, flexWrap: "wrap" }}
        >
          <SettingsIcon fontSize="large" />
          <Typography
            variant={isXs ? "h6" : "h5"}
            sx={{ fontWeight: 700, flexShrink: 0 }}
            component="h1"
          >
            Parts
          </Typography>
        </Stack>

        {/* Add Parts Button */}
        <Stack
          direction={isXs ? "column" : "row"}
          spacing={1}
          alignItems="flex-start"
          sx={{ mb: 2 }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push("/dashboard/addparts")}
            sx={{
              textTransform: "none",
              borderRadius: 2,
              px: 3,
              py: isXs ? 1.5 : 1,
              fontSize: isXs ? "0.875rem" : "1rem",
              alignSelf: "start",
              display: "flex",
              alignItems: "center",
              gap: 1,
              boxShadow:
                "0 3px 5px rgb(0 0 0 / 0.1), 0 1px 18px rgb(0 0 0 / 0.06)",
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
            aria-label="Add new part"
          >
            <AddCircleIcon fontSize={isXs ? "small" : "medium"} />
            <Typography variant="button" component="span">
              Add Parts
            </Typography>
          </Button>
        </Stack>

        {/* Table Section*/}
        <TableContainer
          sx={{
            maxWidth: "100%",
            overflowX: "auto",
            borderRadius: 2,
            boxShadow:
              "0 4px 10px rgb(0 0 0 / 0.05), inset 0 -1px 0 rgb(0 0 0 / 0.07)",
            bgcolor: "background.paper",
          }}
        >
          <Table
            size={isXs ? "small" : "medium"}
            sx={{
              minWidth: 1200, // min width to allow horizontal scroll on small devices
              "& .MuiTableCell-root": {
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: isXs ? 11 : 12,
                py: isXs ? 0.5 : 0.75,
                px: isXs ? 0.75 : 1.5,
              },
              typography: "body2",
            }}
            aria-label="Parts data table"
          >
            <TableHead>
              <TableRow
                sx={{
                  bgcolor: theme.palette.grey[100],
                  borderBottom: `2px solid ${theme.palette.divider}`,
                }}
              >
                <TableCell/>
                <TableCell sx={{ width: 40 }}>Sno.</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Assy part no.</TableCell>
                <TableCell>Sub assy part no.</TableCell>
                <TableCell>Quality plan available</TableCell>
                <TableCell>ID (A)</TableCell>
                <TableCell>Plug gauge available</TableCell>
                <TableCell>ID (B)</TableCell>
                <TableCell>Plug gauge available</TableCell>
                <TableCell>Wall thickness (A)</TableCell>
                <TableCell>Wall thickness (B)</TableCell>
                <TableCell>Flare length mm (Min)</TableCell>
                <TableCell>End cap length (Min)</TableCell>
                <TableCell>Profile fixture available</TableCell>
                <TableCell>Hardness</TableCell>
                <TableCell>Hardness inspection pin gauge available</TableCell>
                <TableCell>Notching required</TableCell>
                <TableCell>Notching tool available</TableCell>
                <TableCell>Connector required</TableCell>
                <TableCell>Connector position fixture available</TableCell>
                <TableCell>Oetiker clamp required</TableCell>
                <TableCell>Oetiker clamp position fixture</TableCell>
                <TableCell>Mubea Clamp</TableCell>
                <TableCell>Mubea clamp fixture</TableCell>
                <TableCell>Spring band clamp</TableCell>
                <TableCell>Heat sink sleeve</TableCell>
                <TableCell>Assy. profile fixture available</TableCell>
                <TableCell>Leakage testing required as per QP</TableCell>
                <TableCell>Leakage testing performed</TableCell>
                <TableCell>Leakage testing fixture available</TableCell>
                <TableCell>No of leakage testing fixture</TableCell>
                <TableCell>Cleanliness milipore test</TableCell>
                <TableCell>Burst req. available</TableCell>
                <TableCell>Pull out load (N)</TableCell>
                <TableCell>Vacuum testing required as per QP</TableCell>
                <TableCell>Vacuum testing performed</TableCell>
                <TableCell>Pad printing fixture</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parts.map((part, index) => (
                <TableRow
                  key={part.id}
                  sx={{
                    borderBottom: `1.5px solid ${theme.palette.primary.light}`,
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <TableCell sx={{ px: 1 }}>
                    <Button
                      aria-label={`Remove part ${part.customer}`}
                      onClick={() => handleRemove(part.id)}
                      size={isXs ? "small" : "medium"}
                      variant="text"
                      color="error"
                      sx={{
                        textTransform: "none",
                        minWidth: 67,
                        fontWeight: 600,
                        p: 0.2,
                        boxShadow:'1',
                        "&:hover": {
                          backgroundColor: "transparent",
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      Remove
                    </Button>
                  </TableCell>
                  <TableCell sx={{ px: 1 }}>{index + 1}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.customer}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.assyPartNo}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.subAssyPartNo}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.qualityPlanAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.idA}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.plugGaugeAvailableA}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.idB}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.plugGaugeAvailableB}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.wallThicknessA}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.wallThicknessB}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.flareLengthMin}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.endCapLengthMin}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.profileFixtureAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.hardness}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.hardnessPinGaugeAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.notchingRequired}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.notchingToolAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.connectorRequired}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.connectorFixtureAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.oetikerClampRequired}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.oetikerClampFixture}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.mubeaClamp}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.mubeaClampFixture}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.springBandClamp}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.heatSinkSleeve}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.assyProfileFixtureAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.leakageTestingRequired}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.leakageTestingPerformed}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.leakageFixtureAvailable}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.numLeakageFixtures}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.cleanlinessMiliporeTest}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.burstReqAvailable}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.pullOutLoad}</TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.vacuumTestingRequired}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>
                    {part.vacuumTestingPerformed}
                  </TableCell>
                  <TableCell sx={{ maxWidth: 140 }}>{part.padPrintingFixture}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
}
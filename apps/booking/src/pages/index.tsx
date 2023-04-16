import { MovieCard } from "../components/movie-card";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ p: 8, border: "1px dashed grey", mt: 5, mx: 5 }}>
        <Grid container justifyContent="center" spacing={5}>
          <Grid item xs={3}>
            <MovieCard slug={"1"}></MovieCard>
          </Grid>
          <Grid item xs={3}>
            <MovieCard slug={"2"}></MovieCard>
          </Grid>
          <Grid item xs={3}>
            <MovieCard slug={"3"}></MovieCard>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

import BookingDialog from "../../components/booking-dialog/dialog";
import useCurrentUser from "../../hooks/useCurrentUser";
import { Box, Button, Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MovieDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useCurrentUser();

  const [open, setOpen] = useState(false);

  const handleClickOpenBookingDialog = () => {
    if (!user?.isLoggedIn) {
      router.push({
        pathname: "/login",
        query: {
          backTo: "/movies/" + slug,
        },
      });
    } else {
      setOpen(true);
    }
  };

  const handleCloseBookingDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ p: 8, border: "1px dashed grey", mt: 5, mx: 5 }}>
        <h3>NỘI DUNG PHIM</h3>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Image
              src={"https://mui.com/static/images/cards/paella.jpg"}
              alt={"Movie cover image"}
              width={200}
              height={160}
              style={{ height: "100%", width: "100%" }}
            />
          </Grid>
          <Grid item xs={8}>
            <h4>TÊN PHIM</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos
              corrupti pariatur, totam facere, ex est quasi sed suscipit
              explicabo similique possimus provident debitis voluptatem. Ratione
              repellendus quod inventore officiis.
            </p>
            <Button
              variant="contained"
              disableElevation
              onClick={() => handleClickOpenBookingDialog()}
            >
              Đặt vé
            </Button>
          </Grid>
        </Grid>
      </Box>
      <BookingDialog
        isOpen={open}
        onClose={handleCloseBookingDialog}
      ></BookingDialog>
    </>
  );
}

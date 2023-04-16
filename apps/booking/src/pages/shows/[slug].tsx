import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function BookingPage() {
  const router = useRouter();
  const notAvailable = [
    20, 21, 24, 26, 27, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  ];
  const [checkedArr, setCheckedArr] = useState<number[]>([]);

  const handleCheckSeat = (index: number) => {
    if (checkedArr.includes(index)) {
      setCheckedArr((arr) => arr.filter((item) => item !== index));
    } else {
      setCheckedArr((arr) => [...arr, index]);
    }
  };
  return (
    <Box sx={{ p: 8, border: '1px dashed grey', mt: 5, mx: 5 }}>
      <Typography variant="h2" component="h2" align="center">
        Booking Online
      </Typography>
      <Divider />
      <h4>CGV Pandora | Cinema 4 | Số ghế: (123/123)</h4>
      <h4>02/04/2023 22:15 ~ 03/04/2023 22:20</h4>
      <Divider />
      <Box
        sx={{
          p: 1,
          backgroundColor: 'red',
          width: '30%',
          margin: '0 auto',
          mt: 5,
        }}
      ></Box>
      <Container
      // sx={{ width: '100%', overflow: 'scroll' }}
      >
        <Box
          sx={{
            mx: 'auto',
            textAlign: 'center',
            px: 5,
            // width: '100rem',
            my: 10,
          }}
        >
          {Array(50)
            .fill(0)
            .map((item, index) => (
              <Button
                color={notAvailable.includes(index) ? 'error' : 'primary'}
                key={index}
                variant={
                  checkedArr.includes(index) || notAvailable.includes(index)
                    ? 'contained'
                    : 'outlined'
                }
                sx={{ m: 1 }}
                onClick={() => handleCheckSeat(index)}
              >
                {index}
              </Button>
            ))}
        </Box>
      </Container>

      <Stack direction="row" spacing={1} marginX="auto" marginTop={10}>
        <Button color="primary" variant={'outlined'}>
          Ghế trống
        </Button>
        <Button color="primary" variant={'contained'}>
          Đang đặt
        </Button>
        <Button color="error" variant={'contained'}>
          Đã được đặt
        </Button>
      </Stack>
    </Box>
  );
}

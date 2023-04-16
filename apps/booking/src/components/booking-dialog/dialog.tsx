import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
} from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';

import style from './dialog.module.css';

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const contry = ['Hồ Chí Minh', 'Hà Nội', 'Quãng Ninh', 'Đồng Tháp'];

export default function AlertDialog({ isOpen, onClose }: AlertDialogProps) {
  const roure = useRouter();
  const [open, setOpen] = React.useState(false);
  const [dateChoose, setDateChoose] = React.useState<number | null>(null);
  const [timeChoose, setTimeChoose] = React.useState<number | null>(null);
  const [numberCountry, setnumberCountry] = React.useState<number>();

  React.useEffect(() => {
    if (isOpen) {
      setDateChoose(null);
      setTimeChoose(null);
    }
    setOpen(isOpen);

    return () => {
      isOpen;
    };
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleCountry = (CT: string, idx: number) => {
    setnumberCountry(idx);
  };

  const handleGoToShows = (idx: number) => {
    roure.push(`/shows/${idx}`);
  };

  const handleChooseDate = (value: any, idx: number) => {
    setDateChoose(idx);
  };
  const handleChooseTime = (idx: number) => {
    setTimeChoose(idx);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'xl'}
      >
        <div style={{ position: 'relative' }}>
          <Divider
            style={{
              background: 'black',
              height: '4px',
              margin: '7px 10px 0 10px',
            }}
          />
          <Button
            style={{
              position: 'absolute',
              top: '10px',
              right: '15px',
              background: '#000000',
              color: '#fff',
            }}
            onClick={handleClose}
          >
            X
          </Button>
        </div>
        <DialogContent>
          <Grid container>
            {Array(31)
              .fill(0)
              .map((item, index) => (
                <Grid key={index}>
                  <Button
                    variant={'outlined'}
                    sx={{
                      color: '#000000',
                      background: dateChoose == index ? '#ddd' : 'transparent',
                      borderColor:
                        dateChoose == index ? '#979797' : 'transparent',
                      '&:hover': {
                        background: '#ddd',
                        borderColor: '#979797',
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                    onClick={() => handleChooseDate(item, index)}
                  >
                    <div style={{ marginRight: '10px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                        }}
                      >
                        12
                      </div>
                      <div>Mon</div>
                    </div>
                    <div style={{ fontSize: '40px' }}>02</div>
                  </Button>
                </Grid>
              ))}
          </Grid>
        </DialogContent>
        <Divider
          style={{
            background: 'black',
            height: '4px',
            margin: '0 10px 0 10px',
          }}
        />
        <DialogContent>
          <div style={{ marginBottom: '20px' }}>
            {contry.map((CT, idx) => (
              <Button
                key={idx}
                variant={'outlined'}
                onClick={() => handleCountry(CT, idx)}
                sx={{
                  marginRight: '5px',
                  borderColor: '#000000',
                  color: numberCountry === idx ? '#fff' : '#000000',
                  background: numberCountry === idx ? '#000000' : '',
                  padding: 'none',
                  '&:hover': {
                    backgroundColor: '#000000',
                    color: 'white',
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                {CT}
              </Button>
            ))}
          </div>
          <Divider
            style={{
              background: 'black',
              height: '1px',
              marginBottom: '20px',
            }}
          />
          {Array(3)
            .fill(0)
            .map((value, index) => (
              <>
                <div className={style.showtimes} key={index}>
                  <div>CGV Crescent Mall</div>
                  <div style={{ fontSize: '15px' }}>Rạp 2d</div>
                  <div>
                    <Button
                      onClick={() => handleChooseTime(index)}
                      // className={style.showtimes_button}
                      variant={timeChoose == index ? 'contained' : 'outlined'}
                    >
                      22:00 pm
                    </Button>
                  </div>
                </div>
                <Divider
                  style={{
                    background: 'black',
                    height: '1px',
                    margin: '20px 0 20px 0',
                  }}
                />
              </>
            ))}
        </DialogContent>

        <DialogActions>
          <Button
            autoFocus
            onClick={() => handleGoToShows(1)}
            // size={'large'}
            variant="contained"
            fullWidth={true}
            disabled={timeChoose === null}
          >
            Tiếp tục
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

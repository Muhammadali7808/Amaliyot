import { Button, IconButton, Container, Stack, Typography, Checkbox, Fab, TextField } from "@mui/material";
import { ReactIcon } from "./assets/react_icon";

function App() {
  const show = (e, value) => {
    console.log(value);

  }


  return (
    <>
      <Container>
        <Stack mt={'20px'}>
          <Button endIcon={<ReactIcon />} startIcon={<ReactIcon />} variant="contained">CLICK</Button>
          <Button variant="outlined">CLICK</Button>
          <Button>CLICK</Button>
          <IconButton>
            <ReactIcon />
          </IconButton>
        </Stack>
        <Stack>
          <Typography variant="body1">lorem</Typography>
          <Typography variant="h1">lorem</Typography>
          <Typography variant="h2">lorem</Typography>
          <Typography variant="h3">lorem</Typography>
          <Typography variant="h4">lorem</Typography>
        </Stack>
        <Checkbox onChange={show} defaultChecked={true} />
        <Fab color="primary" variant="extended" >
          <ReactIcon />
        </Fab>
        <Stack mb={"70px"} gap={"20px"} mt={"50px"} >
          <form>
            <TextField helperText="eng kam qiymat 3ta" error label="yozuv kiritish" size="small" placeholder="First Name" />
            <TextField label="yozuv kiritish" placeholder="First Name" variant="filled" />
            <TextField label="yozuv kiritish" placeholder="First Name" variant="standard" />
          </form>
        </Stack>
      </Container>
    </>
  )
}

export default App

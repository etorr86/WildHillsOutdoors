import { Button, Container, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <Container component={Paper} sx={{ height: 400 }}>
            <>
                <Typography variant="h3" color={'error'} gutterBottom>Oops - We could not find what you are looking for</Typography>
            </>
            <Button fullWidth component={Link} to='/catalog'>Go back to the store</Button>
        </Container>
    )
}
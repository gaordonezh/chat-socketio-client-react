import { Paper, Grid, Container } from "@mui/material";
import Header from "./components/Header";
import ContactsContainer from "./components/ContactsContainer";
import ChatContainer from "./components/ChatContainer";
import ProfileContainer from "./components/ProfileContainer";

const App = () => {
  const isOpen = false;

  return (
    <Container sx={{ p: 2 }} maxWidth="xl">
      <Paper sx={{ borderRadius: 2, overflow: "hidden" }}>
        <Grid container>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
            <ContactsContainer />
          </Grid>
          <Grid item xs={12} sm={isOpen ? 6 : 12} md={isOpen ? 4 : 8} lg={isOpen ? 6 : 9} xl={isOpen ? 7 : 9}>
            <ChatContainer />
          </Grid>
          {isOpen ? (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
              <ProfileContainer />
            </Grid>
          ) : null}
        </Grid>
      </Paper>
    </Container>
  );
};

export default App;

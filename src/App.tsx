import Masonry from "@mui/lab/Masonry";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AggregatorsCategory } from "./containers/categories/aggregators";
import { CharityCategory } from "./containers/categories/charity";
import { CookingCategory } from "./containers/categories/cooking";
import { ForumsCategory } from "./containers/categories/forums";
import { GamesCategory } from "./containers/categories/games";
import { ITCategory } from "./containers/categories/it";
import { NewsCategory } from "./containers/categories/news";
import { TechCategory } from "./containers/categories/tech";

function App() {
  return (
    <>
      <AppBar position="static" sx={{ marginBottom: "20px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            UA Sites
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={4}>
          <AggregatorsCategory />
          <CharityCategory />
          <CookingCategory />
          <ForumsCategory />
          <GamesCategory />
          <ITCategory />
          <NewsCategory />
          <TechCategory />
        </Masonry>
      </Box>
    </>
  );
}

export default App;

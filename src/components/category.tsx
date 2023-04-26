import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

type Props = {
  icon: string;
  title: string;
  data: SiteList;
  titleBackgroundColor?: string;
  titleColor?: "white" | "black";
  titleFontWeight?: 300 | 400 | 500 | 700;
};

export function Category(props: Props) {
  const {
    data,
    title,
    icon,
    titleBackgroundColor,
    titleColor,
    titleFontWeight,
  } = props;

  return (
    <Paper sx={{ width: "320px" }}>
      <List>
        <ListItem
          secondaryAction={<span>{icon}</span>}
          sx={{
            backgroundColor: titleBackgroundColor || "#0080F6",
            color: titleColor || "white",
          }}
        >
          <ListItemText sx={{ fontWeight: titleFontWeight || 500 }}>
            {title}
          </ListItemText>
        </ListItem>
        {data
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((item) => (
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="open_in_new_tab">
                  <Link href={item.link} target="_blank" rel="noopener">
                    <OpenInNewIcon />
                  </Link>
                </IconButton>
              }
            >
              <ListItemText>{item.name}</ListItemText>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
}

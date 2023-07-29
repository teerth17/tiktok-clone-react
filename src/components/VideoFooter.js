import { ResetTvRounded } from "@mui/icons-material";
import "./VideoFooter.css";

export default function VideoFooter({ channel, description, song }) {
  return (
    <div className="videoFooter">
      <h3>@{channel}</h3>
      <p>{description}</p>
      <p>{song}</p>

      <img
        className="videoFooter_record"
        src="https://static.thenounproject.com/png/934821-200.png"
        about="Track Image"
      />
    </div>
  );
}

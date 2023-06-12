import PropTypes from "prop-types";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      justifyContent={"center"}
      alignItems={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #FF2625" : "",
        bgcolor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
    >
      <img
        src={Icon}
        alt="gym icon img"
        style={{ width: "120px", height: "120px" }}
      />
      {item}
    </Stack>
  );
};

BodyPart.propTypes = {
  item: PropTypes.string,
  bodyPart: PropTypes.string,
  setBodyPart: PropTypes.func,
};

export default BodyPart;

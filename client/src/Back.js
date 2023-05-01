import { Button } from "react-bootstrap/";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

function Back() {
  const navigate = useNavigate();
  const [showPage, setShowPage] = useState(false);
  return (
    <>
      <Button
        variant="outline-secondary"
        onClick={() => {
          if (!showPage) {
            navigate("/");
            setShowPage(true);
          }
        }}
      >
        <FaLongArrowAltLeft style={{fontSize:25}}/><span> </span>BACK
      </Button>
    </>
  );
}
export default Back;

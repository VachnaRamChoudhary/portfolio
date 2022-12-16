import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Bottombar() {
  

  return (
    <BottomNavigation
      sx={{
        height:'auto',
        backgroundColor: "#1e192f",
        width: "100%",
        position: "sticky",
        display: "flex",
        flexWrap:'wrap',
        justifyContent: "space-around",
      }}
    >
      <div style={{ color: "white" }}>
        <p>Designed and Developed by Vachna Ram</p>
      </div>
      <div style={{ color: "white" }}>
        <p>Copyright © 2022 V.R</p>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/vachna-ram-068a2319b/" target="_blank" rel="noopener noreferrer">
          <BottomNavigationAction
            label="Linkedin"
            value="linkedin"
            sx={{ color: "white" }}
            icon={<LinkedInIcon />}
          />
        </a>

        <a href="https://github.com/VachnaRamChoudhary" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction
          label="GitHub"
          value="gitHub"
          sx={{ color: "white" }}
          icon={<GitHubIcon />}
        />
        </a>
        <a href="https://www.facebook.com/vachnaram.choudhary.779?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction
          label="Instagram"
          value="instagram"
          sx={{ color: "white" }}
          icon={<FacebookIcon />}
        />
        </a>
        <a href="https://instagram.com/vachna_ram_choudhary?igshid=ZDdkNTZiNTM=" target="_blank" rel="noopener noreferrer">
        <BottomNavigationAction
          label="Facebook"
          value="facebook"
          sx={{ color: "white" }}
          icon={<InstagramIcon />}
        />
        </a>
      </div>
    </BottomNavigation>
  );
}

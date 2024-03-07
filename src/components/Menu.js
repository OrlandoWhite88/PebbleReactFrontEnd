import { useCallback } from "react";
import GPUCloudMenuSection from "./GPUCloudMenuSection";
import StudioMenuSection from "./StudioMenuSection";
import SettingsMenuSection from "./SettingsMenuSection";
import styles from "./Menu.module.css";

const Menu = () => {
  const onMenuItemContainer1Click = useCallback(() => {
    // Please sync "Deployment" to the project
  }, []);

  const onMenuItemContainer2Click = useCallback(() => {
    // Please sync "File System Launch Page" to the project
  }, []);

  const onMenuItemContainer3Click = useCallback(() => {
    // Please sync "API Key" to the project
  }, []);

  const onMenuItemContainerClick = useCallback(() => {
    // Please sync "VS Code Instances" to the project
  }, []);

  const onMenuItemContainer12Click = useCallback(() => {
    window.location.href = "https://example.com/";
  }, []);

  const onMenuItemContainer22Click = useCallback(() => {
    window.open("https://example.com/");
  }, []);

  const onMenuItemContainer32Click = useCallback(() => {
    // Please sync "Profile" to the project
  }, []);

  return (
    <nav className={styles.menuBar}>
      <div className={styles.logo}>
        <img className={styles.logoDarkIcon} alt="" src="/Logo Image@2x.png" />
        <div className={styles.pebble}>Pebble</div>
      </div>
      <GPUCloudMenuSection
        onMenuItemContainer1Click={onMenuItemContainer1Click}
        onMenuItemContainer2Click={onMenuItemContainer2Click}
        onMenuItemContainer3Click={onMenuItemContainer3Click}
      />
      <StudioMenuSection onMenuItemContainerClick={onMenuItemContainerClick} />
      <SettingsMenuSection
        onMenuItemContainer12Click={onMenuItemContainer12Click}
        onMenuItemContainer22Click={onMenuItemContainer22Click}
        onMenuItemContainer32Click={onMenuItemContainer32Click}
      />
      <div className={styles.iconchevronsLeftWrapper}>
        <img
          className={styles.iconchevronsLeft}
          alt=""
          src="/Collapse Menu Button@2x.png"
        />
      </div>
    </nav>
  );
};

export default Menu;

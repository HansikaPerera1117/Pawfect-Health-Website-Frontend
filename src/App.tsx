import "./styles/common/commonStyles.scss";
import { ConfigProvider } from "antd";
import Routes from "./Routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#6BAED6",
          },
          components: {
            Button: {
              defaultBg: "#6BAED6",
              defaultBorderColor: "#6BAED6",
              defaultColor: "#ffffff",
              defaultHoverBorderColor: "#F7DC6F",
              defaultHoverColor: "#353535",
              defaultActiveBorderColor: "#F7DC6F",
              defaultActiveColor: "#353535",
              defaultActiveBg: "#F7DC6F",
              defaultHoverBg: "#F7DC6F",
            },
          },
        }}
      >
        <Routes />
      </ConfigProvider>
    </>
  );
}

export default App;

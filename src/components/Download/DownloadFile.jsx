import Data from "../../Data";
import DownloadComponent from "./DownloadComponent";
import { nanoid } from "nanoid";

function DownloadFile(props) {
  console.log("Data: ", Data);

  const showData = Data.map((dataObj, index) => (
    <DownloadComponent key={nanoid()} {...dataObj} index={index} />
  ));

  return <div>{showData}</div>;
}

export default DownloadFile;

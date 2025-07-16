import { useEffect, useState } from "react";
import { CloseButton, Input, InputGroup } from "@chakra-ui/react";
import { LuFileUp } from "react-icons/lu";

const UpLoadImage = ({thumbnailHandeler}) => {
  const [fileName, setFileName] = useState("");
  const [thumbnail,setthumbnail]=useState(null)
 useEffect(()=>{
  thumbnailHandeler(thumbnail)
 },[thumbnail])
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setthumbnail(file)
    console.log("file", file);

    if (file) {
      setFileName(file.name);
    }
  };

  const clearFile = () => {
    setFileName("");
    onchanfeImageHandeler(null);
  };

  return (
    <div className=" max-w-[300px] gap-2 flex flex-col w-[100px] border-solid border bg-gray-300 h-[100px]">

      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={handleFileChange}
      />
      <InputGroup
        startElement={<LuFileUp />}
        endElement={
          fileName && (
            <>
              <CloseButton
                onClick={clearFile}
                size="xs"
                variant="plain"
                aria-label="Clear file"
              />
              <Input
                value={fileName}
             
                accept="image/png ,image/gif , image/jpeg"
                placeholder="No file selected"
              />
            </>
          )
        }
      ></InputGroup>
    </div>
  );
};

export default UpLoadImage;

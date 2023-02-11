import { Box, Button, Flex, Image, Stack } from "@chakra-ui/react";
import React, { useRef } from "react";

type ImageUploadProps = {
  selectedFile?: string[];
  onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSelectedTab: (value: string) => void;
  setSelectedFile: (value: string[]) => void;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  selectedFile,
  onSelectImage,
  setSelectedTab,
  setSelectedFile,
}) => {
  const selectedFileRef = useRef<HTMLInputElement>(null);

  const removeSelectedFile = (index: number) => {
    let tmpRemove = selectedFile;
    tmpRemove?.splice(index, 1);
    setSelectedFile(tmpRemove as string[]);
    console.log(selectedFile);
  };

  return (
    <Flex direction="column" justify="center" align="center" width="100%">
      {selectedFile?.length ? (
        selectedFile?.map((img, index) => (
          <Box key={img}>
            <Image src={img as string} maxWidth="400px" maxHeight="400px" />
            <Stack direction="row" mt={4}>
              <Button height="28px" onClick={() => setSelectedTab("Post")}>
                Back to Post
              </Button>
              <Button
                variant="outline"
                height="28px"
                onClick={() => removeSelectedFile(index)}
              >
                Remove
              </Button>
            </Stack>
          </Box>
        ))
      ) : (
        <Flex
          justify="center"
          align="center"
          p={20}
          border="1px dashed"
          width="100%"
          borderRadius={4}
        >
          <Button
            variant="outline"
            height="28px"
            onClick={() => selectedFileRef.current?.click()}
          >
            Upload
          </Button>
        </Flex>
      )}
      <input
        ref={selectedFileRef}
        type="file"
        hidden
        onChange={onSelectImage}
        accept="image/jpeg, image/png, image/gif"
        multiple
      />
    </Flex>
  );
};

export default ImageUpload;

import { Button, Stack, StackProps, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { FieldInput } from "../../../components/FieldInput";
import { FieldUploadDocument } from "../../../components/FieldUploadDocument";
import { UploadMenu } from "../../../components/UploadMenu";
import { ConfirmDialog } from "../../../components/ConfirmDialog";

type MajorFormProps = StackProps & {
    
};
export const MajorForm: FC<MajorFormProps> = ({...rest}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const handleDeleteDocument = async () => {
    onClose();
  };
  const handleOnDelete = () => {
    onOpen();
  };
  const handleUploadFile = (file: File) => {
    if (!!file?.name) {
      console.log("File",{
        file,
      });
    }
  };
    return (<Stack {...rest}>
        <FieldInput
            name="name"
            label="name"
            placeholder="Enter your name"
            type="name"
            required="name is required"
        />
        <FieldUploadDocument
            name="plan"
          completed={7}
          onChange={(e)=>{handleUploadFile(e)}}
            label="plan"
            placeholder="Enter your plan"
            type="plan"
            required="plan is required"
            accept="application/pdf,.pdf"
            sectionLabel="Upload your plan in"
            menu={
                <UploadMenu
                  isLoading={false}
                  size="md"
                  onDelete={()=>{handleOnDelete()}}
                  onDownload={()=>{}}
                />
              }
        />

      {isOpen && (
        <>
          <ConfirmDialog
            title="Delete document"
            content="Are you sure you want to delete this document?"
            onClose={onClose}
          >
            <Button onClick={handleDeleteDocument} variant="@danger">
              Confirm
            </Button>
          </ConfirmDialog>
        </>
      )}
    </Stack>
    );
};
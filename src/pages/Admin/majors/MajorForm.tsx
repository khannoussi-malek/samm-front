import { Button, Stack, StackProps, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { ConfirmDialog } from "../../../components/ConfirmDialog";
import { FieldInput } from "../../../components/FieldInput";
import { FieldUploadDocument } from "../../../components/FieldUploadDocument";
import { UploadMenu } from "../../../components/UploadMenu";
import { uploadMutation, useDeleteFile } from "./Major.service";

type MajorFormProps = StackProps & {
  setPlan :(values: number)=>void
  plan: number
    
};
export const MajorForm: FC<MajorFormProps> = ({setPlan,plan,...rest}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    mutate: deleteDocument,
  }=useDeleteFile({
    onSuccess: () => {
    onClose();
    setPlan(0);
    }
  })

  const {
    mutate: uploadDocument,
    isLoading: uploadMutationDocument,
  } = uploadMutation(
    {
      onSuccess: (data) => {
        setPlan(data?.data?.id)
      }
    }
  )
  const handleDeleteDocument = async () => {
    deleteDocument(plan)
  };

  
  const handleOnDelete = () => {
    onOpen();
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
            name="fiel"
            completed={7}
            onUpdate={uploadDocument}
            label="plan"
            placeholder="Enter your plan"
            type="plan"
            accept="application/pdf,.pdf"
            sectionLabel="Upload your plan in"
            menu={
                <UploadMenu
                  isLoading={uploadMutationDocument}
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
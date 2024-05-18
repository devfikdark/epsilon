import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type UserModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const UserModal = ({ open, onClose, onSubmit }: UserModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Create new user</DialogTitle>
          <DialogDescription>From here you can create a new user or update your existing one</DialogDescription>
        </DialogHeader>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, aliquid?
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;

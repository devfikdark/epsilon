import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormProvider from "@/components/rhf-form/FormProvider";
import RHFInputField from "@/components/rhf-form/RHFInputField";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UserSchema } from "@/lib/schema-validations";
import RHFSelectField from "@/components/rhf-form/RHFSelectField";
import { SelectItem } from "@/components/ui/select";

type UserModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const UserModal = ({ open, onClose, onSubmit }: UserModalProps) => {
  type TUserSchema = z.infer<typeof UserSchema>;

  const methods = useForm<TUserSchema>({
    resolver: zodResolver(UserSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      role: "",
    },
  });

  const { handleSubmit } = methods;

  const onFinish = (data: TUserSchema) => {
    console.log("form submitted", data);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Create new user</DialogTitle>
          <DialogDescription>From here you can create a new user or update your existing one</DialogDescription>
        </DialogHeader>
        <FormProvider methods={methods} onSubmit={handleSubmit(onFinish)}>
          <div className="space-y-4">
            <RHFInputField name="name" label="Name" />
            <RHFInputField name="email" label="Email" />
            <RHFSelectField name="gender" label="Gender">
              <SelectItem value={"1"} key={1}>
                Admin
              </SelectItem>
              <SelectItem value={"2"} key={2}>
                Normal
              </SelectItem>
            </RHFSelectField>
            <RHFInputField name="phone_number" label="Phone Number" />
            <RHFInputField name="password" label="Password" type="password" />
            <RHFInputField name="confirm_password" label="Confirm Password" type="password" />
          </div>
          <Button className="w-full mt-8" type="submit">
            Create User
          </Button>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;

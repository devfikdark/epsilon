import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";

const users = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    accountCreated: "2023-05-01",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@example.com",
    phone: "123-456-7891",
    accountCreated: "2023-05-02",
  },
  {
    name: "Charlie Davis",
    email: "charlie.davis@example.com",
    phone: "123-456-7892",
    accountCreated: "2023-05-03",
  },
  {
    name: "Diana Martinez",
    email: "diana.martinez@example.com",
    phone: "123-456-7893",
    accountCreated: "2023-05-04",
  },
  {
    name: "Evan Wilson",
    email: "evan.wilson@example.com",
    phone: "123-456-7894",
    accountCreated: "2023-05-05",
  },
  {
    name: "Fiona Brown",
    email: "fiona.brown@example.com",
    phone: "123-456-7895",
    accountCreated: "2023-05-06",
  },
  {
    name: "George Clark",
    email: "george.clark@example.com",
    phone: "123-456-7896",
    accountCreated: "2023-05-07",
  },
  {
    name: "Hannah Lewis",
    email: "hannah.lewis@example.com",
    phone: "123-456-7897",
    accountCreated: "2023-05-08",
  },
  {
    name: "Ian Walker",
    email: "ian.walker@example.com",
    phone: "123-456-7898",
    accountCreated: "2023-05-09",
  },
  {
    name: "Julia Hall",
    email: "julia.hall@example.com",
    phone: "123-456-7899",
    accountCreated: "2023-05-10",
  },
];

console.log(users);

export function UserList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Account Created</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.accountCreated}</TableCell>
            <TableCell className="text-right">
              <div className="flex gap-1">
                <Button size="icon" variant="outline">
                  <Pencil className="size-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Trash2 className="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

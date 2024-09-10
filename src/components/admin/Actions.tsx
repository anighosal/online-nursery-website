import { EditFilled } from "@ant-design/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Trash } from "lucide-react";

import { Button } from "../ui/button";

const Actions = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-green-500">Actions </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-10 bg-slate-50">
        <DropdownMenuSeparator />

        <div className="flex justify-center items-center">
          <DropdownMenuRadioItem value="">
            <Button className=" bg-red-500 hover:bg-red-200 focus:outline-none">
              <Trash className="text-white bg-rounded size-3" />
            </Button>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="">
            {" "}
            <Button
              className="   bg-green-500

          hover:bg-green-200
          focus:outline-none"
            >
              <EditFilled className="text-white size-3 rounded-r-xl" />
            </Button>
          </DropdownMenuRadioItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;

import { Fragment, useState } from "react";
import Router from "next/router";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useStateContext from "../../context/StateContext";

export default function Modal() {
  const { handleOpen, open } = useStateContext();
  const [query, setQuery] = useState("");
  return (
    <Fragment>
      <Button onClick={handleOpen} variant="gradient">
        Search{" "}
      </Button>
      <Dialog
        className="px-6"
        open={open}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Search...</DialogHeader>
        <DialogBody divider>
          <input
            type="text"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" Search..."
            required
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            c="green"
            onClick={() => {
              handleOpen();
              Router.push(`/blogs?query=${query}`);
            }}
          >
            <span>Search</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}

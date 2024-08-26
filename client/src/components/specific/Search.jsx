import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import UserItem from "../shared/UserItem";
import { SampleUsers } from "../../constants/sampleData";
import { useInputValidation } from "6pp";
const Search = () => {
  const search = useInputValidation("");
  let isLoadingSendFriendReq = false;
  const [users, setUsers] = useState(SampleUsers);
  console.log('users', users);
  

  const addFriendHandler = (id) => {
    console.log(id);
  };

  return (
    <Dialog open>
      <Stack p={"2rem"} alignItems={"center"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          variant="outlined"
          size="small"
          onChange={search.changeHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              key={i._id}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendReq}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;

import sql from "sql-template-strings";
import PGWrapper from "../../utils/pg-wrapper";


const userDTO = row => ({
  userHandle: row.user_handle,
  username: row.username,
  firstName: row.first_name,
  middleName: row.middle_name,
  lastName: row.last_name,
  suffix: row.suffix,
  email: row.email,
  joined: row.joined_date  
})

const userListDTO = row => ({
  userHandle: row.user_handle,
  firstName: row.first_name,
  lastName: row.last_name,
})

export async function fetchCreatorInfo(userHandle) {
  const query = sql`select * from users where user_handle = ${userHandle};`;

  const creator = await PGWrapper.sqlAndMap(query, userDTO);

  return creator[0];
}

export async function fetchCreatorsDetails() {
  const query = sql`select user_handle, first_name, last_name from users where user_handle in (select user_handle from site_creators);`;

  const creators = await PGWrapper.sqlAndMap(query, userListDTO);

  return creators;
}
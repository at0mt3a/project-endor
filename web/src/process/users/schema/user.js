import { schema } from 'normalizr'

// Docs - https://github.com/paularmstrong/normalizr/blob/master/docs/api.md

export const user = new schema.Entity('users', {}, { idAttribute: 'userHandle' })

INSERT INTO users
    (name, authid)
values
    ($1, $2)
RETURNING *;

-- returning causes insert to compute and return values
--  based on each row actually inserted
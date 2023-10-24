DELETE FROM `users` WHERE 0
UPDATE `users` SET `UserID`='[value-1]',`FirstName`='[value-2]',`LastName`='[value-3]',`Email`='[value-4]',`is_deleted`='[value-5]' WHERE 1
INSERT INTO `users`(`UserID`, `FirstName`, `LastName`, `Email`, `is_deleted`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]')
SELECT `UserID`, `FirstName`, `LastName`, `Email`, `is_deleted` FROM `users` WHERE 1
SELECT * FROM `users` WHERE 1
# نمودار ERD برای موجودیت‌های "messages" و "users"

در اینجا نمودار ERD (Entity-Relationship Diagram) برای دو موجودیت "messages" و "users" نمایش داده شده است.

## موجودیت "Users"

- مشخصه‌های ضروری:
  - UserID (شناسه کاربر)
  - FirstName (نام)
  - LastName (نام خانوادگی)
  - Email (ایمیل)

## موجودیت "Messages"

- مشخصه‌های ضروری:
  - MessageID (شناسه پیام)
  - Content (محتوا یا متن پیام)
  - Timestamp (زمان ارسال پیام)

نمودار ERD به شکل زیر ترسیم شده است:

+-------------+    <br />    +-------------+<br />
|   Users     |    <br />    |   Messages  |<br />
+-------------+    <br />    +-------------+<br />
| UserID      |    <br />    | MessageID   |<br />
| FirstName   |    <br />    | Content     |<br />
| LastName    |    <br />    | Timestamp   |<br />
| Email       |    <br />    | SenderID    |<br />
+-------------+    <br />    | ReceiverID  |<br />
                   <br />    +-------------+<br />


ERD : https://www.figma.com/file/CE5XGQn4XozNWH4bazcl2b/Untitled?type=whiteboard&node-id=0%3A1&t=OlZRbmpTm5uX40mZ-1

در این نمودار، موجودیت "Users" و موجودیت "Messages" به همراه ویژگی‌های ضروری نمایش داده شده‌اند. همچنین، رابطه‌ای بین این دو موجودیت نیز با ویژگی‌های "SenderID" و "ReceiverID" نشان داده شده است.

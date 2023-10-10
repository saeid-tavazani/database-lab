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

+-------------+       +-------------+
|   Users     |       |   Messages  |
+-------------+       +-------------+
| UserID      |       | MessageID   |
| FirstName   |       | Content     |
| LastName    |       | Timestamp   |
| Email       |       | SenderID    |
+-------------+       | ReceiverID  |
                      +-------------+


در این نمودار، موجودیت "Users" و موجودیت "Messages" به همراه ویژگی‌های ضروری نمایش داده شده‌اند. همچنین، رابطه‌ای بین این دو موجودیت نیز با ویژگی‌های "SenderID" و "ReceiverID" نشان داده شده است.

# Reflection Questions
Why was it important to re-format the data from the Useless Facts API before sending it to your own client? What are the benefits of an API providing a clean, minimal response?
- Its cleaner and allows only a certain part of the object to pulled if its not needed. Cleaner and simple.

In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
- While using axios its best to send generic error messages for debugging and for the user to have simple, easy, consistent error messages.

How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?

-I would add language to a query string, 

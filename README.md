# Javascript Calculator with React, a Node and Express API, and Axios
 
 This is a realtime calculator using React, Node, Express, and Axios. You enter numbers, the numbers go to the API, and the answer comes back without hitting submit. See sample.png for the final product.

 ## Backend

 The backend uses Node and Express. The entry point is app.js, which configures everything and points to routes/calculator.js. This then directs to controllers/calculator.js to do the calculations.

 ## Frontend

 The frontend uses React and Axios. Whenever a number or sign changes, a POST request is sent to the appropriate function in the API's controller. UseEffect is used to keep track of when and how thing change.

 ## Next Steps

 Try making the calculator controller one function by using the same Switch method as the frontend.



 https://matthewgruman.com
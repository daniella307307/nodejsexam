const express=require('express');
const app = express();
app.listen(5000, () => {
console.log(`server is running  at http://localhost:${port}`); 
});
app.get('/addition', (req, res) => {
 const numbers = req.query.numbers; 
 let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += parseInt(numbers[i]); } 
     res.send({ total });
     });
     app.get('/multiplication', (req, res) => {
         const numbers = req.query.numbers; 
         let prod = 1;
         // variable prod symbolises product of the numbers in the array
          for (let i = 0; i < numbers.length; i++)
           { prod *= parseInt(numbers[i]); } 
           res.send({ prod }); 
        });   
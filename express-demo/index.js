const Joi=require('joi')
const express=require ('express')
const app=express()

app.use(express.json())

const courses=[
    {id:1,name:'course1'},
    {id:2,name:'course2'},
    {id:3,name:'course3'},
]
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/api/courses',(req,res)=>{
    res.send(courses)
})
app.get('/api/courses/:id',(req,res)=>{
   const course=courses.find(c=>c.id===parseInt(req.params.id))
   if(!course)return res.status(404).send("The course with the given id is not found!")
    res.send(course)
   
 //   res.send(req.query) // for reading query parameters 
})

app.post('/api/courses',(req,res)=>{
//  const schema =Joi.object({
//     name: Joi.string().min(3).required
//  })
//  const result=schema.validate(req.body)
 
//     if(result.error){
//         //400 Bad Request
//         res.status(400).send(result.error.message)
//         return;
//     }
    if(!req.body.name || req.body.name.length<3)
        //400 Bad Request
        return res.status(400).send("Name is required and it should be of min length 3")
        
    const course={
        id:courses.length+1,
        name:req.body.name
    }
    courses.push(course)    
    res.send(course)
})

 app.put('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) return res.status(404).send("The course with the given id is not found!")  

    if(!req.body.name || req.body.name.length<3)
        //400 Bad Request
        return  res.status(400).send("Name is required and it should be of min length 3")
    
    course.name=req.body.name;
res.send(course);

})

app.delete('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=>c.id===parseInt(req.params.id))
    if(!course) return res.status(404).send("The course with the given id is not found!")  

    const index=courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)

})
const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
    })
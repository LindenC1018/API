import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "Lean Back for Self-Care",
    content:
       "One New Year’s Day, when I was 11 years-old, our parents had taken me, my brother and two neighbour kids, to go tobogganing at a nearby gravel pit. It was an off-limits area and it had a wobbly fence we had to climb to get into. Despite that, our Dad thought it was the best place for sledding since it had a steep hill and there were no cars nearby.",
    date: "1/7/2026"
  },
  {
    id: 2,
    title: "Love is…",
    content:
      "Every month in our IAJW Journaling Community, we have a Writing Alone Together (WAT) Circle. This is a time to come together with fellow journal writers from around the world and do what we love, which is to grow and care for ourselves through expressive writing. Our WAT circles are one hour and we begin with a brief introduction to the theme, followed by a grounding arrival meditation, and then I offer various journaling prompts where participants write freely.",
    date: "3/2/2026"
  },
  {
    id: 3,
    title: "Tips for Keeping Your Journal Private and Safe",
    content:
      "I was recently at a meeting at our local library, where I love to work from time to time. I was there for a late in the day meeting on Friday afternoon, and I had lots of things at the meeting – my phone, computer, chargers, water bottle, books, binder, notes file, my Daytimer calendar, and my journal. I had a backpack and my waist pack. It was a lot to keep track of. I was tired and hungry. The meeting was somewhat intense as my writing mentor was guiding me through an “energetic and emotional clearing process” as part of advancing my adoptee memoir.",
    date: "5/7/2026"
  }
];

let lastId = 3;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Write your code here//

//CHALLENGE 1: GET All posts
app.get("/posts", (req, res) => {
  console.log(posts);
  res.json(posts);
});

//CHALLENGE 2: GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));

  if(!post){
    res.status(404).json({ message:"Post Not Found" });
  }
  res.json(post);
});

//CHALLENGE 3: POST a new post
app.post("/posts", (req, res) => {
  const newID = lastId + 1;
  const post = {
    id: newID,
    title: req.body.title,
    content: req.body.content,
    date: new Date().toLocaleDateString()
  }

  lastId = newID;
  posts.push(post);
  res.status(201).json(post);
});

//CHALLENGE 4: PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === parseInt(req.params.id));
  if(!post){
    res.status(404).json({ message:"Post Not Found" });
  }


  if(req.body.title){
    post.title = req.body.title;
  }
  if(req.body.content){
    post.content = req.body.content;
  }
  if(req.body.title){
    post.author = req.body.author;
  }

  res.json(post);
});

//CHALLENGE 5: DELETE a specific post by providing the post id.

app.delete("/posts/:id", (req, res) => {
  const index = posts.findIndex((p) => p.id === parseInt(req.params.id));

  if(index === -1){
    return res.status(404).json({ message:"Post Not Found" });
  }
  posts.splice(index, 1);
  res.json({ message:"Post Deleted"});
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});

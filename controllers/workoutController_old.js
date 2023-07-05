// const Workout = require('../models/workoutModel')
// const mongoose = require('mongoose')

// get all workouts from json server
const getWorkoutsFromJsonServer = async (req, res) => {
  // var url_parts = url.parse(req.url);
  //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*')
  let workouts = ""
  let uri = "http://localhost:8000" + req.url
  // if(req.query.q){
  //   uri = 'http://localhost:8000/notes?q=' + req.query.q
  // }
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {workouts=res2.data})
  res.status(200).json(workouts)
  //res.status(200).send(workouts); //infers content type and status
  //res.sendFile('./views/index.html', { root: __dirname });

  // fetch('http://localhost:8000/notes')
  //   .then(res2 => res2.json())
  //   .then(data => {workouts = data})
  // res.status(200).json(workouts)
}
const getHighlightersFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let highlighters = ""
  let uri = "http://localhost:8000" + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {highlighters=res2.data})
  res.status(200).json(highlighters)
}
const getStyledSelectionsFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let styledSelections = ""
  let uri = "http://localhost:8000" + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {styledSelections=res2.data})
  res.status(200).json(styledSelections)
}
const getCommentedSelectionsFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let commentedSelections = ""
  let uri = "http://localhost:8000" + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {commentedSelections=res2.data})
  res.status(200).json(commentedSelections)
}
const getTextToSpeechFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let textToSpeech = ""
  let uri = "http://localhost:8000" + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {textToSpeech=res2.data})
  res.status(200).json(textToSpeech)
}
const getSearchedTermsFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let searchedTerms = ""
  let uri = "http://localhost:8000" + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {searchedTerms=res2.data})
  res.status(200).json(searchedTerms)
}

// create a new workout from json server
const createWorkoutFromJsonServer = async (req, res) => {
  //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  // res.setHeader('Access-Control-Allow-Methods', '*');
  let workouts = ""
  const axios = require('axios');
  await axios.post('http://localhost:8000/notes/', req.body)
    .then(res2 => workouts=res2.data)
  res.status(200).json(workouts)
  //res.status(200).send(workouts); //infers content type and status
  //res.sendFile('./views/index.html', { root: __dirname });

  // fetch('http://localhost:8000/notes/')
  //   .then(res2 => res2.json())
  //   .then(data => {workouts = data})
  // res.status(200).json(workouts)
}
const insertHighlighterFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let highlighters = ""
  const axios = require('axios');
  await axios.post('http://localhost:8000/highlighters/', req.body)
    .then(res2 => highlighters=res2.data)
  res.status(200).json(highlighters)
}
const insertStyledSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  

  let styledSelection = ""
  const axios = require('axios');
  await axios.get('http://localhost:8000/styledselections?title=' + req.body.title + '&start=' + req.body.start + '&end=' + req.body.end)
    .then(res2 => styledSelection=res2.data)
  
  if(styledSelection.length === 0){
  await axios.post('http://localhost:8000/styledselections/', req.body)
    .then(res2 => styledSelection=res2.data)
  }
  res.status(200).json(styledSelection)
}
const insertCommentedSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let commentedSelection = ""
  const axios = require('axios');
  await axios.post('http://localhost:8000/commentedselections/', req.body)
    .then(res2 => commentedSelection=res2.data)
  res.status(200).json(commentedSelection)
}
const insertTextToSpeechFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let textToSpeech = ""
  const axios = require('axios');
  await axios.post('http://localhost:8000/texttospeech/', req.body)
    .then(res2 => textToSpeech=res2.data)
  res.status(200).json(textToSpeech)
}
const insertSearchedTermFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let searchedTerm = ""
  const axios = require('axios');
  await axios.post('http://localhost:8000/searchedterms/', req.body)
    .then(res2 => searchedTerm=res2.data)
  res.status(200).json(searchedTerm)
}

// delete workout from json server
const deleteWorkoutFromJsonServer = async (req, res) => {
  // res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // let workouts = ""
  // const axios = require('axios');
  // await axios.delete('http://localhost:8000/notes/' + req.params.id)
  //   .then(res2 => workouts=res2.data)
  // res.status(200).json(workouts)
  // //res.status(200).send(workouts); //infers content type and status
  // //res.sendFile('./views/index.html', { root: __dirname });

  // fetch('http://localhost:8000/notes/' + req.params.id, {
  //   method: 'DELETE'
  // })
  // .then(res2 => res2.json())
  // .then(data => {workouts = data})
  // res.status(200).json(workouts)

  const response = await fetch('http://localhost:8000/notes/' + req.params.id, {
    method: 'DELETE'
  })
  let workouts;
  const json = await response.json()
  if (response.ok) {
    workouts = json
  }
  res.status(200).json(workouts)
}
const deleteHighlighterFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/highlighters/' + req.params.id, {
    method: 'DELETE'
  })
  let highlighters;
  const json = await response.json()
  if (response.ok) {
    highlighters = json
  }
  res.status(200).json(highlighters)
}
const deleteStyledSelectionFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/styledselections/' + req.params.id, {
    method: 'DELETE'
  })
  let styledSelection;
  const json = await response.json()
  if (response.ok) {
    styledSelection = json
  }
  res.status(200).json(styledSelection)
}
const deleteCommentedSelectionFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/commentedselections/' + req.params.id, {
    method: 'DELETE'
  })
  let commentedSelection;
  const json = await response.json()
  if (response.ok) {
    commentedSelection = json
  }
  res.status(200).json(commentedSelection)
}
const deleteTextToSpeechFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/texttospeech/' + req.params.id, {
    method: 'DELETE'
  })
  let textToSpeech;
  const json = await response.json()
  if (response.ok) {
    textToSpeech = json
  }
  res.status(200).json(textToSpeech)
}
const deleteAllTextToSpeechFromJsonServer = async (req, res) => {
  let ids = req.query.id.split(',');
  let textToSpeech=[];

  ids.map(async id => {
    let response = await fetch('http://localhost:8000/texttospeech/' + id, {
      method: 'DELETE'
    })
    let json = await response.json()
    if (response.ok) {
      textToSpeech.push(json)
    }else{
      textToSpeech.push(json)
      // const error = (json && json.message) || response.status;
      // textToSpeech.push(error)
      // return Promise.reject(error)
    }}
  )
  res.status(200).json(textToSpeech)
}
const deleteSearchedTermFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/searchedterms/' + req.params.id, {
    method: 'DELETE'
  })
  let searchedTerm;
  const json = await response.json()
  if (response.ok) {
    searchedTerm = json
  }
  res.status(200).json(searchedTerm)
}

// get workout from json server
const getWorkoutFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/notes/' + req.params.id)
  const json = await response.json()
  let workouts;
  if (response.ok) {
    workouts = json
  }
  res.status(200).json(workouts)

  // res.setHeader('Access-Control-Allow-Origin', '*');
  // let workout = ""
  // const axios = require('axios');
  // await axios.get('http://localhost:8000/notes/' + req.params.id)
  //   .then(res2 => workout=res2.data)
  // res.status(200).json(workout)
}
const getHighlighterFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/highlighters/' + req.params.id)
  const json = await response.json()
  let highlighter;
  if (response.ok) {
    highlighter = json
  }
  res.status(200).json(highlighter)
}
const getStyledSelectionFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/styledselections/' + req.params.id)
  const json = await response.json()
  let styledSelection;
  if (response.ok) {
    styledSelection = json
  }
  res.status(200).json(styledSelection)
}
const getCommentedSelectionFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/commentedselections/' + req.params.id)
  const json = await response.json()
  let commentedSelection;
  if (response.ok) {
    commentedSelection = json
  }
  res.status(200).json(commentedSelection)
}
const getSearchedTermFromJsonServer = async (req, res) => {
  const response = await fetch('http://localhost:8000/searchedterms/' + req.params.id)
  const json = await response.json()
  let searchedTerm;
  if (response.ok) {
    searchedTerm = json
  }
  res.status(200).json(searchedTerm)
}

// update workout from json server
const updateWorkoutFromJsonServer = async (req, res) => {
  // res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  // res.setHeader('Access-Control-Allow-Origin', '*');
  // let workouts = ""
  // const axios = require('axios');
  // await axios.put('http://localhost:8000/notes/' + req.params.id, req.body)
  //   .then(res2 => workouts=res2.data)
  // res.status(200).json(workouts)
  // //res.status(200).send(workouts); //infers content type and status
  // //res.sendFile('./views/index.html', { root: __dirname });

  // fetch('http://localhost:8000/notes/' + req.params.id, {
  //   method: 'PUT',
  //   body: JSON.stringify(req.body),
  //   headers: {'Content-Type': 'application/json'}
  // })
  // .then(res2 => res2.json())
  // .then(data => {workouts = data})
  // res.status(200).json(workouts)

  const response = await fetch('http://localhost:8000/notes/' + req.params.id, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: {'Content-Type': 'application/json'}
  })
  let workouts;
  const json = await response.json()
  if (response.ok) {
    workouts = json
  }
  res.status(200).json(workouts)
}

// // get all workouts
// const getWorkouts = async (req, res) => {
//   //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const workouts = await Workout.find({}).sort({createdAt: -1})
//   res.status(200).json(workouts)
// }

// // get a single workout
// const getWorkout = async (req, res) => {
//   //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findById(id)

//   if (!workout) {
//     return res.status(404).json({error: 'No such workout'})
//   }
//   res.status(200).json(workout)
// }

// // create a new workout
// const createWorkout = async (req, res) => {
//   //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const {title, load, reps} = req.body

//   console.log("testing controller for request body");
//   console.log(req.body);
//   console.log("created");
  
//   let emptyFields = []

//   if (!title) {
//     emptyFields.push('title')
//   }
//   if (!load) {
//     emptyFields.push('load')
//   }
//   if (!reps) {
//     emptyFields.push('reps')
//   }
//   if (emptyFields.length > 0) {
//     return res.status(400).json({ error: 'Please fill in all fields', emptyFields })
//   }

//   // add to the database
//   try {
//     const workout = await Workout.create({ title, load, reps })
//     res.status(200).json(workout)
//   } catch (error) {
//     res.status(400).json({ error: error.message })
//   }
// }

// // delete a workout
// const deleteWorkout = async (req, res) => {
//   //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndDelete({_id: id})

//   if(!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

// // update a workout
// const updateWorkout = async (req, res) => {
//   //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   const { id } = req.params

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   const workout = await Workout.findOneAndUpdate({_id: id}, {
//     ...req.body
//   })

//   if (!workout) {
//     return res.status(400).json({error: 'No such workout'})
//   }

//   res.status(200).json(workout)
// }

module.exports = {
  getWorkoutsFromJsonServer,
  getHighlightersFromJsonServer,
  getStyledSelectionsFromJsonServer,
  getCommentedSelectionsFromJsonServer,
  getTextToSpeechFromJsonServer,
  getSearchedTermsFromJsonServer,
  createWorkoutFromJsonServer,
  insertHighlighterFromJsonServer,
  insertStyledSelectionFromJsonServer,
  insertCommentedSelectionFromJsonServer,
  insertTextToSpeechFromJsonServer,
  insertSearchedTermFromJsonServer,
  deleteWorkoutFromJsonServer,
  deleteHighlighterFromJsonServer,
  deleteStyledSelectionFromJsonServer,
  deleteCommentedSelectionFromJsonServer,
  deleteTextToSpeechFromJsonServer,
  deleteAllTextToSpeechFromJsonServer,
  deleteSearchedTermFromJsonServer,
  getWorkoutFromJsonServer,
  getHighlighterFromJsonServer,
  getStyledSelectionFromJsonServer,
  getCommentedSelectionFromJsonServer,
  getSearchedTermFromJsonServer,
  updateWorkoutFromJsonServer,
  // getWorkouts,
  // getWorkout,
  // createWorkout,
  // deleteWorkout,
  // updateWorkout
}
// const Workout = require('../models/workoutModel')
// const mongoose = require('mongoose')

// const env = require('../config/index')
let env = require('../env')
// env.database_url = 'http://localhost:8000'
// let fetch = require('cross-fetch');

// get all workouts from json server
const getWorkoutsFromJsonServer = async (req, res) => {
  // var url_parts = url.parse(req.url);
  //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*')
  let workouts = ""
  let uri = env.database_url + req.url
  // if(req.query.q){
  //   uri = `${env.database_url}/notes?q=` + req.query.q
  // }
  // console.log(uri)
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {workouts=res2.data})
    .catch(err => console.log(err))
  res.status(200).json(workouts)
  //res.status(200).send(workouts); //infers content type and status
  //res.sendFile('./views/index.html', { root: __dirname });

  // fetch(`${env.database_url}/notes`)
  //   .then(res2 => res2.json())
  //   .then(data => {workouts = data})
  //   .catch(err => console.log(err))
  // res.status(200).json(workouts)
}
const getCategoriesFromJsonServer = async (req, res) => {
  // var url_parts = url.parse(req.url);
  //res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*')
  let categories = ""
  let uri = env.database_url + req.url
  // if(req.query.q){
  //   uri = `${env.database_url}/notes?q=` + req.query.q
  // }
  // console.log(uri)
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {categories=res2.data})
    .catch(err => console.log(err))
  res.status(200).json(categories)
}
const getHighlightersFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let highlighters = ""
  let uri = env.database_url + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {highlighters=res2.data})
    .catch(err => console.log(err))
  res.status(200).json(highlighters)
}
const getStyledSelectionsFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let styledSelections = ""
  let uri = env.database_url + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {styledSelections=res2.data})
    .catch(err => console.log(err))
  res.status(200).json(styledSelections)
}
const getCommentedSelectionsFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let commentedSelections = ""
  let uri = env.database_url + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {commentedSelections=res2.data})
    .catch(err => console.log(err))
  res.status(200).json(commentedSelections)
}
const getTextToSpeechFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let textToSpeech = ""
  let uri = env.database_url + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {textToSpeech=res2.data})
    .catch(err => console.log(err))
  res.status(200).json(textToSpeech)
}
const getSearchedTermsFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let searchedTerms = ""
  let uri = env.database_url + req.url
  
  const axios = require('axios');
  await axios.get(uri)
    .then(res2 => {searchedTerms=res2.data})
    .catch(err => console.log(err))
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
  await axios.post(`${env.database_url}/notes/`, req.body)
    .then(res2 => workouts=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(workouts)
  //res.status(200).send(workouts); //infers content type and status
  //res.sendFile('./views/index.html', { root: __dirname });

  // fetch(`${env.database_url}/notes/`)
  //   .then(res2 => res2.json())
  //   .then(data => {workouts = data})
  //   .catch(err => console.log(err))
  // res.status(200).json(workouts)
}
const insertCategoryFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  console.log(req.body)
  let categories = ""
  const axios = require('axios');
  await axios.post(`${env.database_url}/categories/`, req.body)
    .then(res2 => categories=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(categories)
}
const insertHighlighterFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let highlighters = ""
  const axios = require('axios');
  await axios.post(`${env.database_url}/highlighters/`, req.body)
    .then(res2 => highlighters=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(highlighters)
}
const insertStyledSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  

  let styledSelection = ""
  const axios = require('axios');
  await axios.get(`${env.database_url}/styledselections?title=` + req.body.title + '&start=' + req.body.start + '&end=' + req.body.end)
    .then(res2 => styledSelection=res2.data)
    .catch(err => console.log(err))
  
  if(styledSelection.length === 0){
  await axios.post(`${env.database_url}/styledselections/`, req.body)
    .then(res2 => styledSelection=res2.data)
    .catch(err => console.log(err))
  }
  res.status(200).json(styledSelection)
}
const insertCommentedSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let commentedSelection = ""
  const axios = require('axios');
  await axios.post(`${env.database_url}/commentedselections/`, req.body)
    .then(res2 => commentedSelection=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(commentedSelection)
}
const insertTextToSpeechFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let textToSpeech = ""
  const axios = require('axios');
  await axios.post(`${env.database_url}/texttospeech/`, req.body)
    .then(res2 => textToSpeech=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(textToSpeech)
}
const insertSearchedTermFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  
  let searchedTerm = ""
  const axios = require('axios');
  await axios.post(`${env.database_url}/searchedterms/`, req.body)
    .then(res2 => searchedTerm=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(searchedTerm)
}

// delete workout from json server
const deleteWorkoutFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let workouts = ""
  const axios = require('axios');
  await axios.delete(`${env.database_url}/notes/` + req.params.id)
    .then(res2 => workouts=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(workouts)
  // //res.status(200).send(workouts); //infers content type and status
  // //res.sendFile('./views/index.html', { root: __dirname });

  // fetch(`${env.database_url}/notes/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // .then(res2 => res2.json())
  // .then(data => {workouts = data})
  // .catch(err => console.log(err))
  // res.status(200).json(workouts)

  // const response = await fetch(`${env.database_url}/notes/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // let workouts;
  // const json = await response.json()
  // if (response.ok) {
  //   workouts = json
  // }
  // res.status(200).json(workouts)
}
const deleteCategoryFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let categories = ""
  const axios = require('axios');
  await axios.delete(`${env.database_url}/categories/` + req.params.id)
    .then(res2 => categories=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(categories)
}
const deleteHighlighterFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let highlighters = ""
  const axios = require('axios');
  await axios.delete(`${env.database_url}/highlighters/` + req.params.id)
    .then(res2 => highlighters=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(highlighters)

  // const response = await fetch(`${env.database_url}/highlighters/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // let highlighters;
  // const json = await response.json()
  // if (response.ok) {
  //   highlighters = json
  // }
  // res.status(200).json(highlighters)
}
const deleteStyledSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let styledSelection = ""
  const axios = require('axios');
  await axios.delete(`${env.database_url}/styledselections/` + req.params.id)
    .then(res2 => styledSelection=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(styledSelection)
  
  // const response = await fetch(`${env.database_url}/styledselections/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // let styledSelection;
  // const json = await response.json()
  // if (response.ok) {
  //   styledSelection = json
  // }
  // res.status(200).json(styledSelection)
}
const deleteCommentedSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let commentedSelection = ""
  const axios = require('axios');
  console.log('commentedselections')
  await axios.delete(`${env.database_url}/commentedselections/` + req.params.id)
    .then(res2 => commentedSelection=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(commentedSelection)
  
  // const response = await fetch(`${env.database_url}/commentedselections/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // let commentedSelection;
  // const json = await response.json()
  // if (response.ok) {
  //   commentedSelection = json
  // }
  // res.status(200).json(commentedSelection)
}
const deleteTextToSpeechFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let textToSpeech = ""
  const axios = require('axios');
  await axios.delete(`${env.database_url}/texttospeech/` + req.params.id)
    .then(res2 => textToSpeech=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(textToSpeech)
  
  // const response = await fetch(`${env.database_url}/texttospeech/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // let textToSpeech;
  // const json = await response.json()
  // if (response.ok) {
  //   textToSpeech = json
  // }
  // res.status(200).json(textToSpeech)
}
const deleteAllTextToSpeechFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let ids = req.query.id.split(',');
  let textToSpeech=[];

  ids.map(async id => {
    const axios = require('axios');
    let response = await axios.delete(`${env.database_url}/texttospeech/` + id)
    let json = await response.data
    if (response.ok) {
      textToSpeech.push(json)
    }else{
      textToSpeech.push(json)
      // const error = (json && json.message) || response.status;
      // textToSpeech.push(error)
      // return Promise.reject(error)
    }

    // let response = await fetch(`${env.database_url}/texttospeech/` + id, {
    //   method: 'DELETE'
    // })
    // let json = await response.json()
    // if (response.ok) {
    //   textToSpeech.push(json)
    // }else{
    //   textToSpeech.push(json)
    //   // const error = (json && json.message) || response.status;
    //   // textToSpeech.push(error)
    //   // return Promise.reject(error)
    // }
  })
  res.status(200).json(textToSpeech)
}
const deleteSearchedTermFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let searchedTerm = ""
  const axios = require('axios');
  await axios.delete(`${env.database_url}/searchedterms/` + req.params.id)
    .then(res2 => searchedTerm=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(searchedTerm)

  // const response = await fetch(`${env.database_url}/searchedterms/` + req.params.id, {
  //   method: 'DELETE'
  // })
  // let searchedTerm;
  // const json = await response.json()
  // if (response.ok) {
  //   searchedTerm = json
  // }
  // res.status(200).json(searchedTerm)
}

// get workout from json server
const getWorkoutFromJsonServer = async (req, res) => {
  // console.log(`${env.database_url}/notes/` + req.params.id)
  // const response = await fetch(`${env.database_url}/notes/` + req.params.id)
  // const json = await response.json()
  // let workouts;
  // if (response.ok) {
  //   workouts = json
  // }
  // res.status(200).json(workouts)

  res.setHeader('Access-Control-Allow-Origin', '*');
  let workout = ""
  const axios = require('axios')
  let ids = req.params.id.split(',')
  console.log(ids)
  if(Array.isArray(ids) && ids.length>1){
    let workoutArr = []
    for(let i =0;i<ids.length;i++){
    await axios.get(`${env.database_url}/notes/` + ids[i])
      .then(res2 => workout=res2.data)
      .catch(err => console.log(err))
      workoutArr[i] = workout
    }
    res.status(200).json(workoutArr)
  }else{
    await axios.get(`${env.database_url}/notes/` + req.params.id)
      .then(res2 => workout=res2.data)
      .catch(err => console.log(err))
    res.status(200).json(workout)
  }
}
const getCategoryFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let category = ""
  const axios = require('axios');
  await axios.get(`${env.database_url}/categories/` + req.params.id)
    .then(res2 => category=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(category)
}
const getHighlighterFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let highlighter = ""
  const axios = require('axios');
  await axios.get(`${env.database_url}/highlighters/` + req.params.id)
    .then(res2 => highlighter=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(highlighter)
  
  // const response = await fetch(`${env.database_url}/highlighters/` + req.params.id)
  // const json = await response.json()
  // let highlighter;
  // if (response.ok) {
  //   highlighter = json
  // }
  // res.status(200).json(highlighter)
}
const getStyledSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let styledSelection = ""
  const axios = require('axios');
  await axios.get(`${env.database_url}/styledselections/` + req.params.id)
    .then(res2 => styledSelection=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(styledSelection)
  
  // const response = await fetch(`${env.database_url}/styledselections/` + req.params.id)
  // const json = await response.json()
  // let styledSelection;
  // if (response.ok) {
  //   styledSelection = json
  // }
  // res.status(200).json(styledSelection)
}
const getCommentedSelectionFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let commentedSelection = ""
  const axios = require('axios');
  await axios.get(`${env.database_url}/commentedselections/` + req.params.id)
    .then(res2 => commentedSelection=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(commentedSelection)
  
  // const response = await fetch(`${env.database_url}/commentedselections/` + req.params.id)
  // const json = await response.json()
  // let commentedSelection;
  // if (response.ok) {
  //   commentedSelection = json
  // }
  // res.status(200).json(commentedSelection)
}
const getSearchedTermFromJsonServer = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let searchedTerm = ""
  const axios = require('axios');
  await axios.get(`${env.database_url}/searchedterms/` + req.params.id)
    .then(res2 => searchedTerm=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(searchedTerm)
  
  // const response = await fetch(`${env.database_url}/searchedterms/` + req.params.id)
  // const json = await response.json()
  // let searchedTerm;
  // if (response.ok) {
  //   searchedTerm = json
  // }
  // res.status(200).json(searchedTerm)
}

// update workout from json server
const updateWorkoutFromJsonServer = async (req, res) => {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  let workouts = ""
  const axios = require('axios');
  await axios.put(`${env.database_url}/notes/` + req.params.id, req.body)
    .then(res2 => workouts=res2.data)
    .catch(err => console.log(err))
  res.status(200).json(workouts)
  // //res.status(200).send(workouts); //infers content type and status
  // //res.sendFile('./views/index.html', { root: __dirname });

  // fetch(`${env.database_url}/notes/` + req.params.id, {
  //   method: 'PUT',
  //   body: JSON.stringify(req.body),
  //   headers: {'Content-Type': 'application/json'}
  // })
  // .then(res2 => res2.json())
  // .then(data => {workouts = data})
  // .catch(err => console.log(err))
  // res.status(200).json(workouts)

  
  // const response = await fetch(`${env.database_url}/notes/` + req.params.id, {
  //   method: 'PUT',
  //   body: JSON.stringify(req.body),
  //   headers: {'Content-Type': 'application/json'}
  // })
  // let workouts;
  // const json = await response.json()
  // if (response.ok) {
  //   workouts = json
  // }
  // res.status(200).json(workouts)
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
  getCategoriesFromJsonServer,
  getHighlightersFromJsonServer,
  getStyledSelectionsFromJsonServer,
  getCommentedSelectionsFromJsonServer,
  getTextToSpeechFromJsonServer,
  getSearchedTermsFromJsonServer,
  createWorkoutFromJsonServer,
  insertCategoryFromJsonServer,
  insertHighlighterFromJsonServer,
  insertStyledSelectionFromJsonServer,
  insertCommentedSelectionFromJsonServer,
  insertTextToSpeechFromJsonServer,
  insertSearchedTermFromJsonServer,
  deleteWorkoutFromJsonServer,
  deleteCategoryFromJsonServer,
  deleteHighlighterFromJsonServer,
  deleteStyledSelectionFromJsonServer,
  deleteCommentedSelectionFromJsonServer,
  deleteTextToSpeechFromJsonServer,
  deleteAllTextToSpeechFromJsonServer,
  deleteSearchedTermFromJsonServer,
  getWorkoutFromJsonServer,
  getCategoryFromJsonServer,
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